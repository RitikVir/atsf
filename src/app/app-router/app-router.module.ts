import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AddInterviewerComponent } from '../admin/add-interviewer/add-interviewer.component';
import { AddJobComponent } from '../admin/add-job/add-job.component';
import { AddCategoryComponent } from '../admin/add-category/add-category.component';
import { AddDesignationComponent } from '../admin/add-designation/add-designation.component';
import { SignupComponent } from '../signup/signup.component';
import { JobAllComponent } from '../job-all/job-all.component';
import { JobDetailComponent } from '../job-detail/job-detail.component';
import { LoginComponent } from '../login/login.component';
import { ScheduleInterviewComponent } from '../admin/schedule-interview/schedule-interview.component';
import { RoleGuardService } from '../role-guard.service';
import { InterviewerComponent } from '../interviewer/interviewer.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'admin' },
    children: [
      { path: 'addinterviewer', component: AddInterviewerComponent },
      { path: 'addjob', component: AddJobComponent },
      { path: 'addcategory', component: AddCategoryComponent },
      { path: 'adddesignation', component: AddDesignationComponent },
      { path: 'scheduleinterview', component: ScheduleInterviewComponent }
    ]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'job',
    component: JobAllComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'candidate' }
  },
  {
    path: 'job/:id',
    component: JobDetailComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'candidate' }
  },
  {
    path: 'interviewer',
    component: InterviewerComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'interviewer' }
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}