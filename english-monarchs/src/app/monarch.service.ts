import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Monarch } from './Monarch';
import { MONARCHS } from './Mock-Monarchs';

@Injectable({
  providedIn: 'root'
})
export class MonarchService {
  constructor() { }
  getAllMonarchs(): Observable<Monarch[]> {
    return of(MONARCHS);
  }
}