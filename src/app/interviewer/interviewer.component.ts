import { Component, OnInit } from '@angular/core';
import { scheduleData, closeData } from '../interfaces';
import { GetScheduleService } from '../get-schedule.service';
import { GetappliedService } from '../getapplied.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-interviewer',
  templateUrl: './interviewer.component.html',
  styleUrls: ['./interviewer.component.css']
})
export class InterviewerComponent implements OnInit {
  allInterviewerSchedule: scheduleData[];

  constructor(
    private getAllScheduleService: GetScheduleService,
    private auth: AuthService,
    private getAllAppliedService: GetappliedService
  ) {}

  ngOnInit() {
    const interviewerInfo = this.auth.userInfo();
    this.getAllScheduleService
      .getInterviewerSchedule(
        'http://localhost:8000/api/schedule/' + interviewerInfo.userId
      )
      .subscribe(data => (this.allInterviewerSchedule = data));
    console.log(interviewerInfo);
  }
  rejectSchedule(event, schedule) {
    this.getAllScheduleService
      .rejectSchedule(
        'http://localhost:8000/api/schedule/reject/' + schedule._id
      )
      .subscribe(data => window.alert('rejected'));

    const closeInfo = new closeData(
      schedule.candidateId,
      schedule.jobId,
      'InterviewToBeScheduled'
    );
    this.getAllAppliedService.closeApplication(closeInfo).subscribe(data => {
      console.log('Application status Changed');
    });
  }
}
