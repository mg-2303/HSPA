import { CommonModule, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { IRegisterUser } from "../../interfaces/interface";
import { UserService } from "../../services/user-service";
import { AlertifyService } from "../../services/alertify-service";

@Component({
  selector: "app-user-register",
  imports: [FormsModule, ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: "./user-register.html",
  styleUrl: "./user-register.scss",
})
export class UserRegister {
  registrationForm!: FormGroup;
  user: IRegisterUser = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  };

  isFormSubmitted: boolean = false;
  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private alertify: AlertifyService,
  ) {
    // this.registrationForm = new FormGroup(
    //   {
    //     userName: new FormControl("Mahesh", Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //     password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //     confirmPassword: new FormControl(null, [Validators.required]),
    //     mobile: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    //   },
    //   {
    //     validators: this.passwordMatchingValidators,
    //   },
    // );
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, [Validators.required]],
        mobile: [null, [Validators.required, Validators.minLength(10)]],
      },
      {
        validators: this.passwordMatchingValidators,
      },
    );
  }

  get userName(): FormControl {
    return this.registrationForm.get("userName") as FormControl;
  }
  get email(): FormControl {
    return this.registrationForm.get("email") as FormControl;
  }
  get password(): FormControl {
    return this.registrationForm.get("password") as FormControl;
  }
  get confirmPassword(): FormControl {
    return this.registrationForm.get("confirmPassword") as FormControl;
  }
  get mobile(): FormControl {
    return this.registrationForm.get("mobile") as FormControl;
  }

  passwordMatchingValidators(fg: AbstractControl): ValidationErrors | null {
    const password = fg.get("password")?.value;
    const confirmPassword = fg.get("confirmPassword")?.value;

    return password === confirmPassword ? null : { notMatched: true };
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.registrationForm.valid) {
      this.user = this.registrationForm.value;
      this.userService.addUser(this.user);
      this.alertify.success("Successfully registerd");
      this.registrationForm.reset();
      this.isFormSubmitted = false;
    }
  }
}
