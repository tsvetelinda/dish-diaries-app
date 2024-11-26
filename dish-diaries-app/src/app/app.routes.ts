import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ListComponent } from './dish/list/list.component';
import { DetailsComponent } from './dish/details/details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'list', component: ListComponent},
    {path: 'list/:id', component: DetailsComponent}
];
