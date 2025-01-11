import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StoreComponent } from './store/store.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    },
    {
        path: 'schedule',
        component: ScheduleComponent,
        title: 'Schedule Page'
    },
    {
        path: 'videos',
        component: VideoPlayerComponent,
        title: 'Video Page'
    },
    {
        path: 'gallery',
        component: GalleryComponent,
        title: 'Gallery Page'
    },
    {
        path: 'store',
        component: StoreComponent,
        title: 'Store Page'
    }
];

export default routeConfig;