import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {

  event: any = { 
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 399.99,
    imageUrl: '',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
