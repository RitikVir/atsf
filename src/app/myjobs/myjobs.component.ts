import { Component, OnInit } from '@angular/core';
import { closeData } from '../interfaces';
import { GetappliedService } from '../getapplied.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {
  appliedJobs: closeData[];
  constructor(
    private getAllAppliedService: GetappliedService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.getAllAppliedService
      .getAppliedJob(this.auth.userInfo().userId)
      .subscribe(data => {
        this.appliedJobs = data;
      });
  }
}
