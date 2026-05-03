import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { IPropertyCard } from "../interfaces/interface";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  constructor(private readonly http: HttpClient) {}

  getAllProperties(): Observable<IPropertyCard[]> {
    return this.http.get("data/properties.json").pipe(
      map((data) => {
        return Object.values(data);
      }),
    );
  }
}
