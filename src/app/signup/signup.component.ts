import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GetCandidateService } from '../get-candidate.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formgroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    phoneNumber: new FormControl(),
    experienceMonth: new FormControl(),
    experienceYear: new FormControl(),
    defaultResumeLink: new FormControl(),
    video: new FormControl()
  });
  employeerForm = new FormGroup({
    prevEmployeer: new FormControl(),
    joiningDate: new FormControl(),
    leavingDate: new FormControl(),
    role: new FormControl()
  });
  educationalForm = new FormGroup({
    degree: new FormControl(),
    completionDate: new FormControl(),
    college: new FormControl()
  });
  employeer: [
    {
      prevEmployeer: String;
      joiningDate: Date;
      leavingdate: Date;
      role: String;
    }
  ];
  educational: [
    {
      degree: String;
      completionDate: Date;
      college: String;
    }
  ];
  constructor(
    private getAllCandidateService: GetCandidateService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.employeer;
    this.educational;
  }
  onEmployeerUpdate() {
    if (this.employeer) {
      this.employeer.push(this.employeerForm.value);
    } else {
      this.employeer = [this.employeerForm.value];
    }
  }
  onEducationalUpdate() {
    if (this.educational) {
      this.educational.push(this.educationalForm.value);
    } else {
      this.educational = [this.educationalForm.value];
    }
  }
  onSubmit() {
    let candidateProfile = this.formgroup.value;

    candidateProfile.employeer = this.employeer;
    candidateProfile.educational = this.educational;
    this.getAllCandidateService
      .createNewCandidate(candidateProfile)
      .subscribe(data => {
        const formData = new FormData();
        formData.append(
          'defaultresumelink',
          this.formgroup.get('defaultResumeLink').value
        );
        formData.append('video', this.formgroup.get('video').value);
        formData.append('userId', data._id);
        this.getAllCandidateService
          .addUploadsToCandidate(formData)
          .subscribe(response => {
            console.log(response);
            this.toastr.success('Candidate Added');
          });
      });
  }
}
