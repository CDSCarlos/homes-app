import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  
  url = 'http://localhost:3001/locations';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined | null> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined){
    console.log(firstName, lastName, email);
  }
}
