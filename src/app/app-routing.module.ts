import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card.component';
import { HomeComponent } from './home/home.component';
import { ForgotPswdComponent } from './forgot-pswd/forgot-pswd.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component:HomeComponent },
  { path: 'home/add-list', component: ListComponent },
  { path: 'home/add-card', component: CardComponent },
  { path: 'forgot-password', component: ForgotPswdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
