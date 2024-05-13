import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../shared/services/cities.service';
import { HourlyTemperatureComponent } from "../hourly-temperature/hourly-temperature.component";
import { DailyTemperatureComponent } from "../daily-temperature/daily-temperature.component";

import { Observable, map, mergeMap } from 'rxjs';
import { CityWeather } from '../model/weather.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cities',
  standalone: true,
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
  imports: [HourlyTemperatureComponent, DailyTemperatureComponent, CommonModule]
})
export class CitiesComponent implements OnInit {
  cities: string[] = [];
  cityWeatherData$: Observable<CityWeather> | undefined;
  selectedCity: string = '';

  constructor(private citiesService: CitiesService) {
  }

  ngOnInit(): void {
    this.cities = this.citiesService.cities;
    this.selectedCity = this.cities[0]
    this.cityWeatherData$ = this.citiesService.getCityWeather(this.selectedCity)
  }
  onTabChange(city: string) {
    this.selectedCity = city;
    this.cityWeatherData$ = this.citiesService.getCityWeather(city)
  }

}
