import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LOCAL_STORAGE_KEYS } from 'src/const-objects/local-storage-key-constants';
import { LocalStorageService } from 'src/services/local-storage.service';
import { MenuComponent } from './menu/menu.component';
import { LanguageRegionComponent } from './language-region/language-region.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, CommonModule, HttpClientModule, TranslateModule, LanguageRegionComponent, MenuComponent]
})
export class AppComponent {
  title = 'homes';
  constructor(private router: Router, private localStorage: LocalStorageService){    
  }

  ngOnInit(){
    this.localStorage.loadTranslateFromAnywhere(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE, 'App');
  }
  
  handleClick(event: Event) {    
    // const target = event.target as HTMLElement;
    // if (target.classList.contains('brand-logo')) {
    //   this.router.navigate(['home']);
    // }
    // console.log(event.defaultPrevented);
    // console.log(event.defaultPrevented);
    event.preventDefault();
    this.router.navigate(['home']);
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}