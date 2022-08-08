import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register';
import { ProfileComponent } from './profile';


const routes: Routes = [
    { path: '', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);