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
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent, canActivate: [GuestGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [GuestGuard]},
    {path: 'list', component: ListComponent},
    {path: 'list/:id', component: DetailsComponent},
    {path: 'add', component: AddComponent, canActivate: [AuthGuard]},
    {path: 'surprise', component: SurpriseComponent},
    {path: 'tried', component: TriedComponent, canActivate: [AuthGuard]},
    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '/404', pathMatch: 'full'},
];
