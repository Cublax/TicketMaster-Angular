export class GridEvent {
  name: string;
  city: string;
  date: string;
  time: string;
  price: number;
  eventLink: string;
  constructor(name: string, city: string, date: string, time: string, price: number, eventLink: string) {
    this.name = name;
    this.city = city;
    this.date = date;
    this.time = time;
    this.price = price;
    this.eventLink = eventLink;
  }
}

