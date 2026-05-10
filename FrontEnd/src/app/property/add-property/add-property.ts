import { Component, ViewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: "app-add-property",
  imports: [FormsModule],
  templateUrl: "./add-property.html",
  styleUrl: "./add-property.scss",
})
export class AddProperty {
  @ViewChild("addPropertyForm") addPropertyForm!: NgForm;

  onSubmit() {
    console.log("submitted");
    console.log(this.addPropertyForm);
  }
}
