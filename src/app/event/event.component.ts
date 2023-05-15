import { Component, Input } from '@angular/core';
import { GridEvent } from '../GridEvent';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {

  @Input() event!: GridEvent;

  ngOnInit(): void {
    console.log(this.event)
  }

  goToLink(url: string){
    console.log("Link:", url)
    window.open(url, "_blank");
}

}
