import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { scheduleData, scheduleInterviewerPopulateData } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetScheduleService {
  constructor(private http: HttpClient) {}

  assignInterviewer(data: scheduleData) {
    return this.http.post<scheduleData>(
      `http://localhost:8000/api/admin/assigninterviewer`,
      data
    );
  }
  getCandidateHistory(data: string) {
    return this.http.get<scheduleInterviewerPopulateData[]>(data);
  }
  getInterviewerSchedule(data: string) {
    return this.http.get<scheduleData[]>(data);
  }
  rejectSchedule(data: string) {
    return this.http.get<scheduleData>(data);
  }
  submitResponse(data: scheduleData) {
    return this.http.post<scheduleData>(
      `http://localhost:8000/api/schedule/submitresponse`,
      data
    );
  }
}
