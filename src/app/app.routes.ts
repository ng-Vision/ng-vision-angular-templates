import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-up', component: SignUpComponent},
];
