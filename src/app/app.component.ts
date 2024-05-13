import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { WeatherDashboardComponent } from "./weather-dashboard/weather-dashboard.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HttpClientModule, CommonModule, WeatherDashboardComponent]
})
export class AppComponent {
  title = 'ria-weather-app';
}

