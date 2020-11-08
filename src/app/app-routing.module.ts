import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HomelayoutComponent} from './components/homelayout/homelayout.component';
import {ContactComponent} from './components/contact/contact.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [

  {
    path: '',
    component: HomelayoutComponent,
    children: [
      {
        path: '', component: HomeComponent
      },

      {
        path: 'contact', component: ContactComponent
      },
      {
        path: 'login', component: LoginComponent

      },
      {
        path: 'search', component: SearchComponent
      },
      {
        path: 'aboutus', component: AboutComponent
      },
      {
        path: 'news', component: SearchComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
    ]
  },
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
