import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'homepage',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/homepage/homepage.module').then( m => m.HomepagePageModule)
          }
        ]
      },
      {
        path:'profile',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
      {
        path:'appointments',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/appointments/appointments.module').then( m => m.AppointmentsPageModule)
          }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
