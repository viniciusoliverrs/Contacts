import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { EditNameComponent } from './pages/edit-name/edit-name.component';
import { EditPhoneComponent } from './pages/edit-phone/edit-phone.component';
import { PhoneListComponent } from './pages/phone-list/phone-list.component';

const routes: Routes = [
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
    path: 'phone-list',
    component: PhoneListComponent
  },
  {
    path: 'edit-phone',
    component: EditPhoneComponent
  },
  {
    path: 'edit-name',
    component: EditNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
