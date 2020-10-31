import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/search/search.component';
import { IntroComponent } from './components/intro/intro.component';
import { CtaComponent } from './components/cta/cta.component';
import { OffersComponent } from './components/offers/offers.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TrendingComponent } from './components/trending/trending.component';
import { ContactComponent } from './components/contact/contact.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { RegisterComponent } from './components/register/register.component';
import { HomelayoutComponent } from './components/homelayout/homelayout.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    IntroComponent,
    CtaComponent,
    LoginComponent,
    OffersComponent,
    TestimonialsComponent,
    TrendingComponent,
    ContactComponent,
    CopyrightComponent,
    RegisterComponent,
    HomelayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
