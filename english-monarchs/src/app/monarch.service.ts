import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Monarch } from './Monarch';

@Injectable({
  providedIn: 'root'
})
export class MonarchService {
  private getUrl = 'http://mysafeinfo.com/api/data?list=englishmonarchs&format=json';  // URL to web api

  constructor(private http: HttpClient) { }

  // Get all Heroes in one dump
  getAllMonarchs(): Observable<Monarch[]> {
    return this.http.get<Monarch[]>(this.getUrl).pipe(
      catchError(this.handleError<Monarch[]>('getAllMonarchs', []))
    );
  }
  
  // Get a single hero based on an ID
  getMonarch(id: number): Observable<Monarch[]> {
    const url = this.getUrl + '&id=' + id;
    return this.http.get<Monarch[]>(url).pipe(
      catchError(this.handleError<Monarch[]>('getAllMonarchs', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}