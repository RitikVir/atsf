import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { candidateData } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class GetCandidateService {
  private url: String = ' http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  createNewCandidate(data: candidateData): Observable<candidateData> {
    return this.http.post<candidateData>(this.url + '/candidate/signup', data);
  }
  addUploadsToCandidate(uploads) {
    return this.http.post(this.url + `/candidate/add/uploads`, uploads);
  }
}
