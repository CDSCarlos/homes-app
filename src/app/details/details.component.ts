import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LOCAL_STORAGE_KEYS } from 'src/const-objects/local-storage-key-constants';
import { LocalStorageService } from 'src/services/local-storage.service';
import { HousingLocation } from '../housing-location/interfaces/housing-location';
import { HousingService } from '../housing-location/services/housing.service';
import { Detail } from './interfaces/details';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  housingLocation: HousingLocation | undefined | null;
  detail: Detail = {};
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  otherForm = new FormGroup({
    firstNameLabel: new FormControl(''),
    surnameLabel: new FormControl(''),
    emailLabel: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private housingService: HousingService, private localStorage: LocalStorageService) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId)
      .then(housingLocation => {
        this.housingLocation = housingLocation;
      });
  }

  ngOnInit() {    
    this.localStorage.loadTranslateFromAnywhere(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE, 'Details');
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
  }

  updateDetail(field: 'firstName' | 'surname' | 'email', value: string) {
    this.detail[field] = value;
    this.otherForm.setValue({
      firstNameLabel: this.detail.firstName ?? '',
      surnameLabel: this.detail.surname ?? '',
      emailLabel: this.detail.email ?? '',
    });
  }

  handleInputChange(event: Event, field: 'firstName' | 'surname' | 'email') {
    const inputElement = event.target as HTMLInputElement;
    this.updateDetail(field, inputElement.value);
  }
}
