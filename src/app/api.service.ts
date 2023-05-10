import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { EventElement } from './eventelement';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ticketApiKey: string = "eDqkAcI5hIr92LAEsw94WqSjELpoxFV8";

  constructor(private http: HttpClient) { }

  // loadTicketmasterDataForGermany() {
  //   return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=DE&apikey=${this.ticketApiKey}`);
  // }

  loadTicketmasterDataForGermany(): Observable<EventElement[]> {
    return this.http.get<EventElement[]>(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=DE&apikey=${this.ticketApiKey}`)
      .pipe(
        tap(res => console.log("success: ", res)),
        catchError(this.handleError<EventElement[]>('getHeroes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

  async loadTicketmasterDataForGermanyAsync(): Promise<EventElement[]> {
    return await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=DE&apikey=${this.ticketApiKey}`)
    .then(res=>res.clone().json())
  }
}
 