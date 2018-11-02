import { environment } from './../../environments/environment';
import { Student } from './../interfaces/student';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentMarksService {

  constructor(private _http: HttpClient) { }

  /* to get student marks */
  public getData(): Observable<Student[]> {
    return this._http.get<Student[]>(`${environment.api}`);
  }
}
