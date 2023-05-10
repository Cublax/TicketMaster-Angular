import { Component, Input } from '@angular/core';
import { Event } from '../TicketMasterData';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {
  @Input() event!: Event;

  ngOnInit(): void {
    console.log(this.event)
  }
}
