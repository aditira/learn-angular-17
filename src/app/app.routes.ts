import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutComponent } from './components/home/about/about.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        title: 'App Login Page',
        loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'home',
        title: 'App Home Page',
        loadComponent: () => import("./components/home/home.component").then(m => m.HomeComponent),
        canActivateChild: [authGuard],
        children: [
            {
              path: 'about', 
              title: 'App About Page',
              component: AboutComponent
            },
            {
              path: 'contact',
              title: 'App Contact Page',
              component: ContactComponent
            },
          ],
    },
    {
        path: 'time',
        title: 'Time Page',
        loadComponent: () => import("./shared/components/time/time.component").then(m => m.TimeComponent),
        // canDeactivate: [authGuard],
        canActivate: [authGuard]
    },
    {
        path: 'user',
        title: 'App User Page',
        loadComponent: () => import('./components/user/user.component').then(m => m.UserComponent),
        canActivate: [authGuard],
    },
    {
        path: 'directive',
        title: 'Directive Page',
        loadComponent: () => import('./components/directive/directive.component').then(m => m.DirectiveComponent),
    },
    {
        path: 'module',
        loadChildren: () => import('./modules/admin.module').then(m => m.AdminModule),
        canLoad: [authGuard]
      },
    {
        path: '**',
        title: 'Page Not Found',
        component: NotfoundComponent
    }
];
