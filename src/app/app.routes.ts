import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'change-password',
        component: ChangePasswordComponent
    },
];
