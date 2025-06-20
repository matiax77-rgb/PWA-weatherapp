import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saved-city-weather',
  templateUrl: './saved-city-weather.component.html',
  styleUrls: ['./saved-city-weather.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SavedCityWeatherComponent {
  city: string | null = null;
  weatherList: any[] = [];

  constructor(private route: ActivatedRoute) {
    this.city = this.route.snapshot.paramMap.get('city');
    const data = localStorage.getItem('savedWeather');
    if (data && this.city) {
      const arr = JSON.parse(data);
      this.weatherList = arr.filter((w: any) => w.name === this.city);
    }
  }
}
