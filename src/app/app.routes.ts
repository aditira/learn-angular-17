import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    {
        path: 'home',
        title: 'App Home Page',
        component: HomeComponent,
    },
    {
        path: 'user',
        title: 'App User Page',
        component: UserComponent
    }
];
