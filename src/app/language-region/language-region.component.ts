import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from 'src/const-objects/local-storage-key-constants';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'language-region',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-region.component.html',
  styleUrls: ['./language-region.component.css']
})

export class LanguageRegionComponent {
  dropdownOpen = false;

  languages = [
    { text: 'Brazil', img: 'assets/img/language-region/brazil.png', langs: 'pt-BR'},
    { text: 'Spain', img: 'assets/img/language-region/spain.png', langs: 'es-ES' },
    { text: 'English (US)', img: 'assets/img/language-region/usa.png', langs: 'en-US' },
    { text: 'English (UK)', img: 'assets/img/language-region/uk.png', langs: 'en-GB'},
  ]; 
  selectedLanguage!: any;
  constructor(private localStorage: LocalStorageService){}

  ngOnInit(){
    
    if(this.localStorage.hasItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE)){
      this.selectedLanguage = this.findSelectedLanguage();
    }
    else {
      this.selectedLanguage = this.languages[0];
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLanguage(option: any) {
    this.selectedLanguage = option;
    const languageCode = this.selectedLanguage.langs;
    this.localStorage.setItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE, languageCode);
    this.localStorage.loadTranslateFromAnywhere(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE, 'Dropdown');
    this.dropdownOpen = false;
  }

  private findSelectedLanguage() : any {
    const verifyLocalStorageSelectedLanguage = this.localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE);
    if(verifyLocalStorageSelectedLanguage){
      return this.languages.find(language => language.langs === verifyLocalStorageSelectedLanguage);
    }

    return {} as any;
  }
}
