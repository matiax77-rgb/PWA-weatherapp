import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherBodyComponent } from './weather-body/weather-body.component';
import { SavedWeatherComponent } from './saved-weather/saved-weather.component';
import { SavedCityWeatherComponent } from './saved-weather/saved-city-weather.component';

const routes: Routes = [
  { path: '', component: WeatherBodyComponent },
  { path: 'saved', component: SavedWeatherComponent },
  { path: 'saved/:city', component: SavedCityWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
