import { Component, OnInit } from '@angular/core';
import { EventElement } from '../eventelement';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})

export class HomeComponent implements OnInit {
  
  eventList: EventElement[] = [];

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.service.loadTicketmasterDataForGermany()
      .subscribe(events => this.eventList = events)
  }
  
}
