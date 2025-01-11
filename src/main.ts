import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule } from '@angular/router';
import routeConfig from './app/routes';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from './factories/translate-loader.factory';
import { importProvidersFrom } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { LOCAL_STORAGE_KEYS } from './const-objects/local-storage-key-constants';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routeConfig),
    importProvidersFrom(
      TranslateModule.forRoot(
        {
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          }
        }
      ),      
    ),
  ],
}).then((appRef) => {

  const translate = appRef.injector.get(TranslateService);
  const localStorage = appRef.injector.get(LocalStorageService);
  const supportedLangs = ['en-GB', 'en-US', 'es-ES', 'pt-BR'];

  const browserLang = translate.getBrowserCultureLang();
  const matchedLang = supportedLangs.find(lang => lang === browserLang);
  translate.addLangs(supportedLangs);

  const selectedLanguageFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE);
  if (selectedLanguageFromLocalStorage) {
    translate.use(selectedLanguageFromLocalStorage).subscribe(() => {
      console.log('Language initialized');
    })
  }
  else {
    const defaultLang = 'en-GB';
    translate.setDefaultLang(defaultLang);

    if (matchedLang) {
      translate.use(matchedLang).subscribe(() => {
        console.log('Browser Language initialized');
      });
    }
    else {
      translate.use(defaultLang).subscribe(() => {
        console.log('Default Language initialized');
      });
    }
  }
  console.log('Application bootstrapped successfully');
}).catch(err => console.error(err));
