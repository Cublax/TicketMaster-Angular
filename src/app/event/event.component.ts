import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventElement } from './eventElement';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'event',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {
  @Input() eventElement!: EventElement;
}
