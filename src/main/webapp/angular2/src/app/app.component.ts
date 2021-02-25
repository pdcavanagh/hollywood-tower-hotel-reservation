import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
	public submitted : boolean = false;
  	roomsearch : FormGroup;
	rooms : Room[];

    constructor(fb: FormBuilder) {
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
		
		this.rooms = ROOMS;
	}
	
	onSubmit({value,valid}: {value:Roomsearch, valid:boolean} ) {
		console.log(value);
	}
	
	reserveRoom(value:string) {
		console.log("Room reservation id: " + value);
	}

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