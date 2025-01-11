import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from 'src/services/local-storage.service';
import { LOCAL_STORAGE_KEYS } from 'src/const-objects/local-storage-key-constants';
import { FormsModule } from '@angular/forms';
import { Schedule } from './interfaces/schedule';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'schedule',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TranslateModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  schedule: Schedule[] = [];
  newEvent = {    
    eventName: '',
    date: '',
    time: ''
  };
  constructor(private localStorage: LocalStorageService) {    
  }
  ngOnInit(){    
    this.localStorage.loadTranslateFromAnywhere(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE, 'Schedule');
    this.schedule.push({eventName: 'Event', date: '01/01/2025', time: '08:32'}, {eventName: 'Event2', date: '01/01/2025', time: '08:33'});
  }

  addEvent() {
    if (this.newEvent.eventName && this.newEvent.date && this.newEvent.time) {      
      this.schedule.push({ ...this.newEvent });
      this.newEvent = { eventName: '', date: '', time: '' };
    }
  }
}
