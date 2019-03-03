import { Component, OnInit } from '@angular/core';
import { appliedJobData } from '../../interfaces';
import { GetappliedService } from '../../getapplied.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {
  appliedJobs: appliedJobData[];
  constructor(
    private getAllAppliedService: GetappliedService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    console.log('aaya');
    this.getAllAppliedService
      .getAppliedJob(this.auth.userInfo().userId)
      .subscribe(data => {
        this.appliedJobs = data;
        console.log(this.appliedJobs);
      });
  }
}
