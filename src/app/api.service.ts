import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import {TicketMasterData} from './TicketMasterData';
import {GridEvent} from './GridEvent';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ticketApiKey: string = "eDqkAcI5hIr92LAEsw94WqSjELpoxFV8";

  constructor(private http: HttpClient) { }

  getDiscoveryEventGermany(): Observable<GridEvent[]> {
    return this.http.get<TicketMasterData>(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=DE&apikey=${this.ticketApiKey}`)
      .pipe(
        tap(res => console.log("success: ", res)),
        map(res => this.mapToGridFormat(res)),
        catchError(this.handleError<GridEvent[]>('getHeroes'))
      );
  }

  mapToGridFormat(data: TicketMasterData): GridEvent[] {
    return data._embedded.events.map(event => {
        return new GridEvent(
          event.name,
          event._embedded.venues[0].city.name,
          event.dates.start.localDate,
          event.dates.start.localDate,
          event.priceRanges[0].min,
          event.url
        )
    }
    )
  }

  searchEventInGermany(term: String): Observable<GridEvent[]> {
    return this.http.get<TicketMasterData>(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${term}&apikey=${this.ticketApiKey}`)
      .pipe(
        map(res => this.mapToGridFormat(res)),
        tap(res => console.log("success: ", res)),
        catchError(this.handleError<GridEvent[]>('getHeroes'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("🐞 ERROR: ", error);
      return of(result as T);
    };
  }

}
