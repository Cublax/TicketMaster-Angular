import { Component, OnInit } from '@angular/core';
import { Event } from '../TicketMasterData';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})

export class HomeComponent implements OnInit {
  
  eventList: Event[] = [];

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.service.loadTicketmasterDataForGermany()
      .subscribe(data => this.eventList = data._embedded.events);
      console.log("LIST", this.eventList)
  }
  
}
