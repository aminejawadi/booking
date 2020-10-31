import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HomelayoutComponent} from './components/homelayout/homelayout.component';
import {ContactComponent} from './components/contact/contact.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

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
        path: 'register', component: RegisterComponent
      },
    ]
  },


  // Wildcard Route if no route is found == 404 NOTFOUND page
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
