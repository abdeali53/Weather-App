import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, } from 'rxjs';
import { CityWeather, DailyWeather, GeoLocation, HourlyWeather } from '../../weather-dashboard/model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private httpClient: HttpClient) { }

  cities = ["Rio de Janeiro", "Beijing", "Los Angeles"];
  APIKey = "9aab3f9a7ddd2b6b438674e97e59a57e";
  getCityGeoLocation(city: string) {
    return this.httpClient.get("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + this.APIKey)
      .pipe(map((response: any) => { return { lat: response[0].lat, lon: response[0].lon } as GeoLocation }))
  }

  getCityWeatherByLatLong(lat: number, lon: number) {
    return this.httpClient.get("https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + this.APIKey);
  }

  getCityWeather(city: string) {
    return this.getCityGeoLocation(city).pipe(mergeMap((reponse: GeoLocation) => {
      return this.getCityWeatherByLatLong(reponse.lat, reponse.lon)
    }), map((responseData: any) => {
      var daily = responseData.daily.map((item: any) => {
        return {
          clouds: item.clouds,
          summary: item.summary,
          temp: {
            min: item.temp.min,
            max: item.temp.max
          },
          dt: item.dt,
          icon: item.weather[0].icon
        } as DailyWeather;
      })
      var hourly = responseData.hourly.map((item: any) => {
        return { clouds: item.clouds, humidity: item.humidity, temperature: item.temp, dt: item.dt, icon: item.weather[0].icon } as HourlyWeather
      })
      return {
        hourlyWeather: hourly,
        dailyWeather: daily
      } as CityWeather
    }))

  }

  getCitiesFromCSV() {
    return this.httpClient.get("assets/data/cities_20000.csv", { responseType: 'text' }).pipe(
      map((csv: string) => {
        var lines = csv.split("\n");
        var result: string[] = [];
        var headers = lines[0].split(",");

        for (var i = 1; i < lines.length; i++) {
          var currentline = lines[i].split(",");
          // Assuming 'city_name' is one of the headers
          var cityIndex = headers.indexOf('city_name');
          if (cityIndex !== -1) {
            result.push(currentline[cityIndex]);
          }
        }

        return result;
      })
    );

  }

}



