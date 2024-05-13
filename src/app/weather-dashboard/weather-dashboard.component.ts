import { Component } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { CitiesComponent } from './cities/cities.component';


@Component({
    selector: 'app-weather-dashboard',
    standalone: true,
    templateUrl: './weather-dashboard.component.html',
    styleUrl: './weather-dashboard.component.css',
    imports: [HeaderComponent, CitiesComponent, FooterComponent]
})
export class WeatherDashboardComponent {

}
