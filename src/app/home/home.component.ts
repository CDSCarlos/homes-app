import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from '../housing-location/interfaces/housing-location';
import { HousingService } from '../housing-location/services/housing.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/services/local-storage.service';
import { LOCAL_STORAGE_KEYS } from 'src/const-objects/local-storage-key-constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {  
  housingLocationList: HousingLocation[] = [];  
  filteredLocationList: HousingLocation[] = [];
  constructor(private housingService: HousingService, private localStorage: LocalStorageService) {
    this.housingService.getAllHousingLocations()
    .then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  ngOnInit(){
    this.localStorage.loadTranslateFromAnywhere(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE, 'Home');
  }

  filterResults(text: string)
  {
    if (!text){
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city?.toLowerCase().includes(text.toLowerCase())
    );
    
  }

  afterViewInit(){
    
  }
}
