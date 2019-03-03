import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AddInterviewerComponent } from './admin/add-interviewer/add-interviewer.component';
import { AddJobComponent } from './admin/add-job/add-job.component';
import { GetCategoryService } from './get-category.service';
import { AppRouterModule } from './app-router/app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { GetInterviewerService } from './get-interviewer.service';
import { GetjobService } from './getjob.service';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddDesignationComponent } from './admin/add-designation/add-designation.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobAllComponent } from './job-all/job-all.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { LoginComponent } from './login/login.component';
import { ScheduleInterviewComponent } from './admin/schedule-interview/schedule-interview.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { MyjobsComponent } from './myjobs/myjobs.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AdminComponent,
    AddInterviewerComponent,
    AddJobComponent,
    AddCategoryComponent,
    AddDesignationComponent,
    JobCardComponent,
    JobAllComponent,
    JobDetailComponent,
    LoginComponent,
    ScheduleInterviewComponent,
    InterviewerComponent,
    MyjobsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [GetCategoryService, GetInterviewerService, GetjobService],
  bootstrap: [AppComponent]
})
export class AppModule {}
