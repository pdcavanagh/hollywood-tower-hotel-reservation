import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReservationService, ReservationRequest } from './reservation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
	constructor (private reservationService:ReservationService) {};

	rooms: Room[] = [];
	roomSearchForm: FormGroup = new FormGroup({});
	currentCheckinVal: string = '';
	currentCheckoutVal: string = '';
	currentPrice: number = -1;
	currentRoomNumber: number = -1;

	ngOnInit() {
		this.roomSearchForm = new FormGroup({
			checkin: new FormControl(''),
			checkout: new FormControl(''),
			roomNumber: new FormControl(''),
		});
		
		this.roomSearchForm.valueChanges.subscribe(form => {
			this.currentCheckinVal = form.checkin;
			this.currentCheckoutVal = form.checkout;
			
			if(form.roomNumber) {
				let roomVals: string[] = form.roomNumber.split('|');
				this.currentRoomNumber = Number(roomVals[0]);
				this.currentPrice = Number(roomVals[1]);		
			}
			
			console.log(this.currentCheckinVal);
			console.log(this.currentCheckoutVal);
			console.log(this.currentRoomNumber);		
		});
		
		this.rooms = [ new Room("127", "127", "250"),
			new Room("128", "128", "275"),
			new Room("129", "129", "300") 
		];
	}
	
	createReservation() {
		this.reservationService.createReservation(
		new ReservationRequest(this.currentRoomNumber, this.currentCheckinVal, this.currentCheckoutVal, this.currentPrice)
		).subscribe(postResult => 
			console.log(postResult)
		);
	}

}

export interface Roomsearch {
	checkin:string;
	checkout:string;
}

export class Room {
	id:string;
	roomNumber:string;
	price:string;
	
	constructor (id: string, roomNumber: string, price: string) {
		this.id = id;
		this.roomNumber = roomNumber;
		this.price = price;
	}	
}