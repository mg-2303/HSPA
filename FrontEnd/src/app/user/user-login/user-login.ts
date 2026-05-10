import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: "app-user-login",
  imports: [FormsModule],
  templateUrl: "./user-login.html",
  styleUrl: "./user-login.scss",
})
export class UserLogin {
  constructor() {}

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
  }
}
