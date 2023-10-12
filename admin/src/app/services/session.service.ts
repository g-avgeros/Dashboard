import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl =
  'https://greece.snap4city.org/ServiceMap/api/v1/?serviceUri=http://www.disit.org/km4city/resource/iot/orionGreeceUNISYSTEMS-UNIFI/Greece-UNISYSTEMS/Session-LOC2&format=json';
@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: HttpClient) {}

  getsSessionDetails() {
    return this.http.get(`${apiUrl}`);
  }
}
