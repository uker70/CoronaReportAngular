export class Country{
    country: string;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    active: number;
    critical: number;
    totalTests: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    testsPerOneMillion: number;

    constructor(country: string, cases: number, todayCases: number, deaths: number, todayDeaths: number, recovered: number,
        active: number, critical: number, totalTests: number, casesPerOneMillion: number, deathsPerOneMillion: number, testsPerOneMillion: number)
        {
        this.country = country;
        this.cases = cases;
        this.todayCases = todayCases;
        this.deaths = deaths;
        this.todayDeaths = todayDeaths;
        this.recovered = recovered;
        this.active = active;
        this.critical = critical;
        this.totalTests = totalTests;
        this.casesPerOneMillion = casesPerOneMillion;
        this.deathsPerOneMillion = deathsPerOneMillion;
        this.testsPerOneMillion = testsPerOneMillion;
    }
}