import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './general-site-home/dashboard/dashboard.component';
import { GeneralSiteHomeComponent } from './general-site-home/general-site-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: GeneralSiteHomeComponent,
    children: [
      {
        path: 'dash',
        component: DashboardComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
