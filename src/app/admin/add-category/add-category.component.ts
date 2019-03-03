import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { GetjobService } from "../../getjob.service";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.css"]
})
export class AddCategoryComponent implements OnInit {
  formgroup = new FormGroup({
    category: new FormControl()
  });
  constructor(private getAllJobService: GetjobService) {}

  ngOnInit() {}
  onSubmit() {
    this.getAllJobService
      .createNewCategory(this.formgroup.value)
      .subscribe(data => console.log(data));
  }
}
