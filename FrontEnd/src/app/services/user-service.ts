import { Injectable } from "@angular/core";
import { IRegisterUser } from "../interfaces/interface";

@Injectable({
  providedIn: "root",
})
export class UserService {
  addUser(user: IRegisterUser) {
    let users: IRegisterUser[] = [];
    const localStorageUsers = localStorage.getItem("Users");
    if (localStorageUsers) {
      users = JSON.parse(localStorageUsers);
    }
    users.push(user);
    localStorage.setItem("Users", JSON.stringify(users));
  }
}
