import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecommendationsService {

  constructor(private http: HttpClient) { }

  get(eventId: string): Observable<any> {
    return this.http.get('https://o1x35lxvq684r.educative.run:3000/api/recommendations/' + eventId);
  }
}
