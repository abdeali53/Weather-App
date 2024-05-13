import { Component, OnInit } from '@angular/core';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, distinctUntilChanged, map, startWith, take, tap } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, MatAutocompleteModule, ReactiveFormsModule, AsyncPipe, CommonModule, MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  control = new FormControl('');
  cities: string[] = [];
  filteredCities$: Observable<string[]> = this.control.valueChanges.pipe(
    distinctUntilChanged(),
    tap((resp) => console.log(resp)),
    map(value => this._filter(value || '')),
  );
  isCelsius: boolean = true;
  temperature: number = 0;
  constructor(private citiesService: CitiesService) {

  }
  ngOnInit(): void {
    this.citiesService.getCitiesFromCSV().pipe(take(1)).subscribe((data: string[]) => this.cities = data.slice(0, 10));    
  }
  searchCity() {
    this.citiesService.cities.push("Toronto");
  }

  private _filter(value: string): string[] {

    return this.cities.length > 0 ? this.cities.filter(city => {
      if (city)
        return city.includes(value)
      return false
    }) : [];

  }

  toggleUnit(): void {
    this.isCelsius = !this.isCelsius;
    this.updateTemperature();
  }

  updateTemperature(): void {
    if (this.isCelsius) {
      // Convert to Celsius
      this.temperature = (this.temperature - 32) * 5 / 9;
    } else {
      // Convert to Fahrenheit
      this.temperature = this.temperature * 9 / 5 + 32;
    }
  }

}
