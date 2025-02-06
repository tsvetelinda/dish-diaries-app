import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', 
        loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'login', 
        loadComponent: () => import('./user/login/login.component').then((c) => c.LoginComponent),
        canActivate: [GuestGuard]
    },
    {
        path: 'register',
        loadComponent: () => import('./user/register/register.component').then((c) => c.RegisterComponent),
        canActivate: [GuestGuard]
    },
    {
        path: 'list', 
        loadComponent: () => import('./dish/list/list.component').then((c) => c.ListComponent),
    },
    {
        path: 'list/:id', 
        loadComponent: () => import('./dish/details/details.component').then((c) => c.DetailsComponent)
    },
    {
        path: 'add', 
        loadComponent: () => import('./dish/add/add.component').then((c) => c.AddComponent), 
        canActivate: [AuthGuard]
    },
    {
        path: 'surprise', 
        loadComponent: () => import('./dish/surprise/surprise.component').then((c) => c.SurpriseComponent)
    },
    {
        path: 'tried', 
        loadComponent: () => import('./dish/tried/tried.component').then((c) => c.TriedComponent), 
        canActivate: [AuthGuard]
    },
    {
        path: 'search', 
        loadComponent: () => import('./dish/search/search.component').then((c) => c.SearchComponent)
    },
    {
        path: '404', 
        loadComponent: () => import('./error/error.component').then((c) => c.ErrorComponent)
    },
    {path: '**', redirectTo: '/404', pathMatch: 'full'},
];
