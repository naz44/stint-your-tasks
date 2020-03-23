import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxCardModule,
  IgxRippleModule
} from 'igniteui-angular';
import { CardComponent } from './card.component';
import { HomeComponent } from './home/home.component';
import { ForgotPswdComponent } from './forgot-pswd/forgot-pswd.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ListComponent,
    CardComponent,
    HomeComponent,
    ForgotPswdComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IgxCardModule,
    IgxButtonModule,
    IgxIconModule,
    IgxRippleModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
