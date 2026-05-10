import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth-service";
import { AlertifyService } from "../../services/alertify-service";

@Component({
  selector: "app-user-login",
  imports: [FormsModule],
  templateUrl: "./user-login.html",
  styleUrl: "./user-login.scss",
})
export class UserLogin {
  constructor(
    private readonly authService: AuthService,
    private readonly alertify: AlertifyService,
  ) {}

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem("token", token.userName);
      this.alertify.success("Logged in successfully");
    } else {
      this.alertify.error("Ooops!!!");
    }
  }
}
