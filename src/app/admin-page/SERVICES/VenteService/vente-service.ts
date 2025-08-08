import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class VenteService {
  private apiUrl = environment.apiBaseUrl;
}