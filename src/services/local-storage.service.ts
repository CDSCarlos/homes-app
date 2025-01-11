import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private translate: TranslateService) { }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string | null {
    const value = localStorage.getItem(key);
    return value;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();    
  }

  length(): number {
    return localStorage.length;
  }

  loadTranslateFromAnywhere(key: string, fromWhere: string){
    const selectedLanguageFromLocalStorage = localStorage.getItem(key);
    if (selectedLanguageFromLocalStorage) {
      this.translate.use(selectedLanguageFromLocalStorage).subscribe(() => {
        console.log('Language initialized from ' + fromWhere);
      })
    }
  }
  
  hasItem(key: string): boolean {
    const value = localStorage.getItem(key);
    return !!value;
  }
}
