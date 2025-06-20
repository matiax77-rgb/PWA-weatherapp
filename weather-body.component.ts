import { Component, OnInit } from '@angular/core';
import { Weather } from '../Result/weather';
import { WeatherapiService } from '../Service/weatherapi.service';
import { MatDialog } from '@angular/material/dialog';
import { SaveConfirmDialogComponent } from './save-confirm-dialog.component';


@Component({
    selector: 'app-weather-body',
    templateUrl: './weather-body.component.html',
    styleUrls: ['./weather-body.component.css'],
    standalone: false
})


export class WeatherBodyComponent implements OnInit {

  icon : string = "09d";
  city : string = "Gdansk";
  obj : Weather = {} as Weather;
  temp_type : string = "celsius";
  temp_symbol : string = "C";

  constructor(private weatherService : WeatherapiService, private dialog: MatDialog) {    }



  ngOnInit(): void {
    // this.setCity("Karimnagar");
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        if (position) {

          console.log("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude + "\nAccuracy: " + position.coords.accuracy/1000);
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;

          this.weatherService.getWeatherFromLatLong(lat,lng).subscribe(data => {
            this.obj = data;
          });

        }
      },
        (error: GeolocationPositionError) => {
          console.log(error);
          // alert("Location permission denied. Defaulting to Karimnagar.!");
          this.toastMessage();
          this.getWeatherForCity("Kukatpally");
        })

    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }



  getWeatherForCity(cityName : string){

    this.weatherService.getWeatherFromCity(cityName).subscribe(data => {
      this.obj = data;
    });

  }


  toastMessage() {
    let x = document.getElementById("snackbar");
    x!.className = "show";
    setTimeout(
      function() {
        x!.className = x!.className.replace("show", "");
      }, 3000);
  }

  // Funkcja do zapisywania pogody (na razie tylko alert)
  saveWeather() {
    const dialogRef = this.dialog.open(SaveConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const weatherToSave = {
          name: this.obj.name,
          temp: this.obj.temp,
          feel_like: this.obj.feel_like,
          max_temp: this.obj.max_temp,
          min_temp: this.obj.min_temp,
          description: this.obj.description,
          icon: this.obj.icon,
          speed: this.obj.speed
        };
        let saved = localStorage.getItem('savedWeather');
        let arr = saved ? JSON.parse(saved) : [];
        arr.push(weatherToSave);
        localStorage.setItem('savedWeather', JSON.stringify(arr));
      }
    });
  }
}

