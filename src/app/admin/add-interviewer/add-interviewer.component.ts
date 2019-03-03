import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { GetCategoryService } from "../../get-category.service";
import { categoryData } from "src/app/interfaces";
import { Router } from "@angular/router";
import { GetInterviewerService } from "../../get-interviewer.service";

@Component({
  selector: "app-add-interviewer",
  templateUrl: "./add-interviewer.component.html",
  styleUrls: ["./add-interviewer.component.css"]
})
export class AddInterviewerComponent implements OnInit {
  formgroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    category: new FormControl(),
    designation: new FormControl()
  });
  category: categoryData[];
  designation: String[];
  profile: categoryData[];
  constructor(
    private getAllCategoryService: GetCategoryService,
    private getAllInterviewerService: GetInterviewerService
  ) {}

  ngOnInit() {
    this.getAllCategoryService.getAllCategory().subscribe(data => {
      this.category = data;
    });
  }
  categorySelected(event) {
    this.profile = this.category.filter(ele => {
      return ele.category === event.target.value;
    });
    this.designation = this.profile[0].designation;
  }
  onSubmit() {
    const interviewerProfile = this.formgroup.value;
    console.log(interviewerProfile);
    this.getAllInterviewerService
      .createNewInterviewer(interviewerProfile)
      .subscribe(data => {
        console.log("Hi" + data);
      });
  }
}
