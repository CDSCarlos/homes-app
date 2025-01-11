import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from './interfaces/housing-location';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LOCAL_STORAGE_KEYS } from 'src/const-objects/local-storage-key-constants';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
  
  constructor(private localStorage: LocalStorageService){}

  ngOnInit(){
    this.localStorage.loadTranslateFromAnywhere(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE, 'Housing Location');
  }
}
