export interface CityWeather{
    hourlyWeather : HourlyWeather[];
    dailyWeather: DailyWeather[];
}

export interface HourlyWeather{
    icon: string;
    temperature : number;
    humidity : number;
    clouds: number;
    dt:number;
}

export interface DailyWeather{
    dt: number;
    clouds:number;
    summary:string;
    temp:{min:number, max:number};
    icon: string  
}
export interface GeoLocation{
    lat:number;
    lon:number;
}