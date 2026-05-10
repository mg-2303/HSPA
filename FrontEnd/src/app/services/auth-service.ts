import { Injectable } from "@angular/core";
import { ILoginUser, IRegisterUser } from "../interfaces/interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  authUser(user: ILoginUser) {
    const userFromLocalStorage = localStorage.getItem("Users");
    let userArray: IRegisterUser[] = [];
    if (userFromLocalStorage) {
      userArray = JSON.parse(userFromLocalStorage);
    }
    return userArray.find((p) => user.password === p.password && user.userName === p.userName);
  }
}
