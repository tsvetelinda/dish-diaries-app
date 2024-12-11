import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ListComponent } from './dish/list/list.component';
import { DetailsComponent } from './dish/details/details.component';
import { AddComponent } from './dish/add/add.component';
import { SurpriseComponent } from './dish/surprise/surprise.component';
import { TriedComponent } from './dish/tried/tried.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'list', component: ListComponent},
    {path: 'list/:id', component: DetailsComponent},
    {path: 'add', component: AddComponent},
    {path: 'surprise', component: SurpriseComponent},
    {path: 'tried', component: TriedComponent},
    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '/404', pathMatch: 'full'},
];
