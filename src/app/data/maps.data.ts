export class MapsData{
    name: string;
    latitude: number;
    longitude: number;

    constructor(name: string, latitude: number, longitude: number){
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}