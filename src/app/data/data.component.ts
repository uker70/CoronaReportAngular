import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Country } from './country';
import { MapsData } from "./maps.data";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  zoom = 12
  options: google.maps.MapOptions = {
    center: {lat: 56.2310271, lng: 10.1870639},
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  coronaData: Country[] = [];
  mapsData: MapsData[] = [];

  constructor(private http: HttpService) { }
  
  ngOnInit() {
    this.http.GetCoronaData().subscribe(data => {
      data.forEach(c => {
          //console.log(c.country);

          this.coronaData.push(new Country(c.country, c.cases, c.todayCases, c.deaths, c.todayDeaths,
            c.recovered, c.active, c.critical, c.totalTests, c.casesPerOneMillion, c.deathsPerOneMillion, c.testsPerOneMillion));
      });
    });

    this.http.GetCountryData().subscribe(data => {
      data.forEach(m => {
        console.log(m.name);

        this.coronaData.forEach(cd => {
          if (cd.country == m.name){
            this.mapsData.push(new MapsData(m.name, m.latitude, m.longitude));
          }
        })
      });
    });

  }
}
