import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { HistoryComponent } from './page/history/history.component';
import { LiveComponent } from './page/live/live.component';
import { PointsComponent } from './page/points/points.component';

export const routes: Routes = [
    // to communicate url given the page header 
    
    {
        path: "",
        redirectTo: '/live',
        pathMatch: 'full'
    },

    {
        path: "home",
        component: HomeComponent,
        title: "Home | CricketPlush"
    },
    {
        path: "history",
        component: HistoryComponent,
        title: "History | CricketPlush"
    },
    {
        path: "live",
        component: LiveComponent,
        title: "Live | CricketPlush"
    },
    {
        path: "points",
        component: PointsComponent,
        title: "Points Tables | CricketPlush"
    }

];
