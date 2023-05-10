import { Component, OnInit, Input } from '@angular/core';
import { EventElement } from '../eventelement';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {
  @Input() eventElement!: EventElement;
  
}
