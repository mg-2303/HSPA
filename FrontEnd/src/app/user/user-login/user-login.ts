import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth-service";
import { AlertifyService } from "../../services/alertify-service";
import { Router } from "@angular/router";
import { ROOT_PATH } from "../../constants/routesConstants";

@Component({
  selector: "app-user-login",
  imports: [FormsModule],
  templateUrl: "./user-login.html",
  styleUrl: "./user-login.scss",
})
export class UserLogin {
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
  ) {}

  onLogin(loginForm: NgForm) {
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      this.router.navigate([ROOT_PATH]);
      localStorage.setItem("token", token.userName);
      this.alertify.success("Logged in successfully");
    } else {
      this.alertify.error("Ooops!!!");
    }
  }
}
