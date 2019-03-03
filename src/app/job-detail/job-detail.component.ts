import { Component, OnInit } from '@angular/core';
import { jobData, assignData } from '../interfaces';
import { GetjobService } from '../getjob.service';
import { GetappliedService } from '../getapplied.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  constructor(
    private getAllJobService: GetjobService,
    private route: ActivatedRoute,
    private getAllAppliedService: GetappliedService,
    private auth: AuthService
  ) {}
  jobId: string;
  job: jobData;

  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('id');
    console.log(this.jobId);
    this.getAllJobService.getDetailOfJob(this.jobId).subscribe(data => {
      this.job = data;
      console.log(this.job);
    });
  }
  onSubmit() {
    const candidateId = this.auth.userInfo();

    const assignInfo = new assignData(candidateId.userId, this.jobId);
    this.getAllAppliedService.applyForJob(assignInfo).subscribe(data => {
      console.log(data);
    });
  }
}