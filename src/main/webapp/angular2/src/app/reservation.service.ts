import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

	private baseUrl:string = 'http://localhost:8080';
  	private reservationUrl:string = this.baseUrl + '/room/reservation/v1?checkin=2021-01-07&checkout=2021-01-14';

	constructor(private http: HttpClient) {}

}
