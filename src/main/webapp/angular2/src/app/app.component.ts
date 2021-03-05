import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
	private baseUrl: string = "http://localhost:8080";
	public submitted : boolean = false;
  	roomsearch : FormGroup;
	rooms : Room[];

    constructor(fb: FormBuilder, private http: HttpClient) {
        this.roomsearch = fb.group({
            title: fb.control('initial value', Validators.required)
        });

		this.rooms = [];
    }

	ngOnInit() {
		this.roomsearch = new FormGroup({
			checkin: new FormControl(''),
			checkout: new FormControl('')
		});
	}
	
	onSubmit({value,valid}: {value:Roomsearch, valid:boolean} ) {
		this.getAll()
			.subscribe(
				(rooms:Room[]) => this.rooms = { ...rooms},
				err => {
					console.log(err);
				}
			);
	}
	
	reserveRoom(value:string) {
		console.log("Room reservation id: " + value);
	}
	
	getAll():Observable<Room[]> {
		return this.http.get<Room[]>(
			this.baseUrl + '/room/reservation/v1?checkin=2021-01-07&checkout=2021-01-14',
			{
				observe: 'body',
				responseType: 'json'
			}
		);
	}
	
//	mapRoom(response:Response):Room[] {
//		return response.json().content;
//	}

}

export interface Roomsearch {
	checkin:string;
	checkout:string;
}

export interface Room {
	id:string;
	roomNumber:string;
	price:string;
	links:string;
}

let ROOMS:Room[] = [
	{
		id: "34575672",
		roomNumber: "1301",
		price: "275",
		links: ""
	},
	{
		id: "92016234",
		roomNumber: "1302",
		price: "295",
		links: ""
	},
	{
		id: "10239751",
		roomNumber: "1303",
		price: "305",
		links: ""
	}
]