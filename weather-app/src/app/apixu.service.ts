import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=7f706c352ebb493c90765a3c11d2c0ea&query=' + location
    );
  }
}
