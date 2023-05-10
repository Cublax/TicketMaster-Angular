import { Component, Input } from '@angular/core';
import { Event } from '../TicketMasterData';
import { ApiService } from '../api.service';

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

  goToLink(url: string){
    console.log("Link:", url)
    window.open(url, "_blank");
}

}
