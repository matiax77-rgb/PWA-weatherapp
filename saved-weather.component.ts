import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-saved-weather',
  templateUrl: './saved-weather.component.html',
  styleUrls: ['./saved-weather.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SavedWeatherComponent {
  cities: string[] = [];

  constructor() {
    const data = localStorage.getItem('savedWeather');
    if (data) {
      const arr = JSON.parse(data);
      this.cities = arr.map((w: any) => w.name).filter((v: string, i: number, a: string[]) => a.indexOf(v) === i);
    }
  }
}
