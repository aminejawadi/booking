import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { authInterceptorProviders } from './helpers/auth.interceptor' ;
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/search/search.component';

import { ContactComponent } from './components/contact/contact.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { RegisterComponent } from './components/register/register.component';
import { HomelayoutComponent } from './components/homelayout/homelayout.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { FlightsComponent } from './components/flights/flights.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { CarsComponent } from './components/cars/cars.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    LoginComponent,
    ContactComponent,
    CopyrightComponent,
    RegisterComponent,
    HomelayoutComponent,
    FlightsComponent,
    HotelsComponent,
    CarsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
