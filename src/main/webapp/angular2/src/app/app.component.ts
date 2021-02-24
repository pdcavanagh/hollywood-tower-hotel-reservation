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

    constructor(fb: FormBuilder) {
        this.roomsearch = fb.group({
            title: fb.control('initial value', Validators.required)
        });
    }

	ngOnInit() {
		this.roomsearch = new FormGroup({
			checkin: new FormControl(''),
			checkout: new FormControl('')
		});
	}
	
	onSubmit({value,valid}: {value:Roomsearch, valid:boolean} ) {
		console.log(value);
	}

}

export interface Roomsearch {
	checkin:string;
	checkout:string;
}
