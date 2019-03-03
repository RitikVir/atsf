import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { categoryData, genreData } from "../../interfaces";
import { GetCategoryService } from "../../get-category.service";
import { GetjobService } from "../../getjob.service";
@Component({
  selector: "app-add-designation",
  templateUrl: "./add-designation.component.html",
  styleUrls: ["./add-designation.component.css"]
})
export class AddDesignationComponent implements OnInit {
  formgroup = new FormGroup({
    category: new FormControl(),
    designation: new FormControl()
  });
  category: categoryData[];

  constructor(
    private getAllCategoryService: GetCategoryService,
    private getAllJobService: GetjobService
  ) {}

  ngOnInit() {
    this.getAllCategoryService.getAllCategory().subscribe(data => {
      this.category = data;
    });
  }
  onSubmit() {
    this.getAllJobService
      .createNewDesignation(this.formgroup.value)
      .subscribe();
  }
}
