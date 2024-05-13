import { Component, Input, OnInit } from '@angular/core';
import { HourlyWeather } from '../model/weather.model';
import { CommonModule } from '@angular/common';
import { KelvinToTemperaturePipe } from "../../shared/pipe/kelvin-to-celsius.pipe";

@Component({
    selector: 'app-hourly-temperature',
    standalone: true,
    templateUrl: './hourly-temperature.component.html',
    styleUrl: './hourly-temperature.component.css',
    imports: [CommonModule, KelvinToTemperaturePipe]
})
export class HourlyTemperatureComponent implements OnInit{
  ngOnInit(): void {

  }

  @Input()
  hourlyWeather!: HourlyWeather[];


}
