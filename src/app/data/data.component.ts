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
  public searchWord = '';
  coronaData: Country[] = [];
  searchedCoronaData: Country[] = [];

  constructor(private http: HttpService) { }

  combineNumbers(a: number, b: number){
    return (a + b);
  }

  searchCountry(input: string) {
    this.searchedCoronaData = [];
    this.searchWord = input.toLowerCase();
    this.coronaData.forEach(c => {
      if(c.country.toLowerCase().includes(input))
      {
        this.searchedCoronaData.push(c);
      }
    });
  }

  clearSearch() {
    this.searchWord = "";
    this.searchedCoronaData = [];
  }
  
  ngOnInit() {
    this.http.GetCoronaData().subscribe(data => {
      data.forEach(c => {
          //console.log(c.country);

          if(c.country == "CAR")
          {
            this.coronaData.push(new Country("Central African Republic", c.cases, c.todayCases, c.deaths, c.todayDeaths,
              c.recovered, c.active, c.critical, c.totalTests, c.casesPerOneMillion, c.deathsPerOneMillion, c.testsPerOneMillion));
          }
          else if (c.country == "UAE")
          {
            this.coronaData.push(new Country("United Arab Emirates", c.cases, c.todayCases, c.deaths, c.todayDeaths,
              c.recovered, c.active, c.critical, c.totalTests, c.casesPerOneMillion, c.deathsPerOneMillion, c.testsPerOneMillion));
          }
          else if (c.country == "UK")
          {
            this.coronaData.push(new Country("United Kingdom", c.cases, c.todayCases, c.deaths, c.todayDeaths,
              c.recovered, c.active, c.critical, c.totalTests, c.casesPerOneMillion, c.deathsPerOneMillion, c.testsPerOneMillion));
          }
          else if (c.country == "DRC")
          {
            this.coronaData.push(new Country("Democratic Republic of the Congo", c.cases, c.todayCases, c.deaths, c.todayDeaths,
              c.recovered, c.active, c.critical, c.totalTests, c.casesPerOneMillion, c.deathsPerOneMillion, c.testsPerOneMillion));
          }
          else if (c.country == "S. Korea")
          {
            this.coronaData.push(new Country("South Korea", c.cases, c.todayCases, c.deaths, c.todayDeaths,
              c.recovered, c.active, c.critical, c.totalTests, c.casesPerOneMillion, c.deathsPerOneMillion, c.testsPerOneMillion));
          }
          else
          {
            this.coronaData.push(new Country(c.country, c.cases, c.todayCases, c.deaths, c.todayDeaths,
              c.recovered, c.active, c.critical, c.totalTests, c.casesPerOneMillion, c.deathsPerOneMillion, c.testsPerOneMillion));
          }
      });
    });

    /*this.http.GetCountryData().subscribe(data => {
      data.forEach(m => {
        console.log(m.name);

        this.coronaData.forEach(cd => {
          if (cd.country == m.name){
            this.mapsData.push(new MapsData(m.name, m.latitude, m.longitude));
          }
        })
      });
    });*/

  }
}
