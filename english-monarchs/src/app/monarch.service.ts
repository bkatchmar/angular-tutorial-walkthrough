import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Monarch } from './Monarch';
import { MONARCHS } from './Mock-Monarchs';

@Injectable({
  providedIn: 'root'
})
export class MonarchService {
  constructor() { }

  // Get all Heroes in one dump
  getAllMonarchs(): Observable<Monarch[]> {
    return of(MONARCHS);
  }
  
  // Get a single hero based on an ID
  getMonarch(id: number): Observable<Monarch> {
    return of(MONARCHS.find(m => m.id === id));
  }
}