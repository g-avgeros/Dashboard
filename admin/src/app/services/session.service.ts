import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const apiUrl =
  'https://greece.snap4city.org/ServiceMap/api/v1/?serviceUri=http://www.disit.org/km4city/resource/iot/orionGreeceUNISYSTEMS-UNIFI/Greece-UNISYSTEMS/Session-LOC2&format=json';
@Injectable({
  providedIn: 'root',
})
export class SessionService {
  getSession() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getSessionDetails() {
    return this.http.get(`${apiUrl}`);
  }
}
