import { Component, OnInit } from '@angular/core';
import { Event, TicketMasterData } from '../TicketMasterData';
import { ApiService } from '../api.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {GridEvent} from "../GridEvent";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})

export class HomeComponent implements OnInit {

  eventList: GridEvent[] = [];
  private searchResponse$!: Observable<GridEvent[]>;
  private searchTerms = new Subject<string>();

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getEvents();

    this.searchResponse$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.service.searchEventInGermany(term)),
    );

    this.searchResponse$.subscribe(events => this.eventList = events);
  }

  getEvents(): void {
    this.service.getDiscoveryEventGermany()
      .subscribe(data => this.eventList = data);
      console.log("LIST", this.eventList)
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
