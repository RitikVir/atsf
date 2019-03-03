import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { categoryData, jobData } from "src/app/interfaces";
import { GetCategoryService } from "../../get-category.service";
import { GetjobService } from "../../getjob.service";

@Component({
  selector: "app-add-job",
  templateUrl: "./add-job.component.html",
  styleUrls: ["./add-job.component.css"]
})
export class AddJobComponent implements OnInit {
  formgroup = new FormGroup({
    category: new FormControl(),
    designation: new FormControl(),
    description: new FormControl(),
    blockJobId: new FormControl(),
    lastDate: new FormControl(),
    paySalary: new FormControl(),
    location: new FormControl(),
    bondDetail: new FormControl(),
    experienceMonth: new FormControl(),
    experienceYear: new FormControl()
  });
  skillform = new FormGroup({
    skillName: new FormControl(),
    skillLevel: new FormControl()
  });
  category: categoryData[];
  designation: String[];
  profile: categoryData[];
  jobs: jobData[];
  skills: [
    {
      skillName: String;
      skillLevel: String;
    }
  ];
  constructor(
    private getAllCategoryService: GetCategoryService,
    private getAllJobService: GetjobService
  ) {}

  ngOnInit() {
    this.getAllCategoryService.getAllCategory().subscribe(data => {
      this.category = data;
    });
    this.getAllJobService.getAllJob().subscribe(data => {
      this.jobs = data;
    });
    this.skills;
  }
  categorySelected(event) {
    this.profile = this.category.filter(ele => {
      return ele.category === event.target.value;
    });
    this.designation = this.profile[0].designation;
  }
  onSkillSubmit() {
    const skillObject = this.skillform.value;
    if (this.skills) {
      this.skills.push(skillObject);
    } else {
      this.skills = [skillObject];
    }

    console.log(this.skills);
  }

  onSubmit() {
    console.log("Just adding");
    let jobProfile = this.formgroup.value;
    jobProfile.skillRequired = this.skills;
    jobProfile.jobId = 100;
    this.getAllJobService
      .createNewJob(jobProfile)
      .subscribe(data => console.log(data));
  }
}
