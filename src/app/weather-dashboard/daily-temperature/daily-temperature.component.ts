import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { DailyWeather } from '../model/weather.model';
import { KelvinToTemperaturePipe } from "../../shared/pipe/kelvin-to-celsius.pipe";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-daily-temperature',
    standalone: true,
    templateUrl: './daily-temperature.component.html',
    styleUrl: './daily-temperature.component.css',
    imports: [KelvinToTemperaturePipe, CommonModule],    
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyTemperatureComponent {
    @Input()
    dailyWeather!: DailyWeather[];
}
