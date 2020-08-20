import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from './data/country';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  GetCoronaData() {
    return this.http.get<Country[]>("https://coronavirus-19-api.herokuapp.com/countries");
  }
  //https://github.com/javieraviles/covidAPI
}