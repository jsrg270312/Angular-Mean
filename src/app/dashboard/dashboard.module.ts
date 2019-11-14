
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "./../components/components.module"
import { DashboardRoutesModule } from "./dashboardroutes.module"
import { ShredModule } from "./../shred/shred.module"
import {CommonModule} from "@angular/common"


import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DashboardComponent } from "./dashboard.component";
import { ProductosDashboardComponent } from './productos-dashboard/productos-dashboard.component'


@NgModule({
  declarations: [
     UserDashboardComponent,
     DashboardComponent,
     ProductosDashboardComponent
  ],
  imports: [
   RouterModule,
   ComponentsModule,
   DashboardRoutesModule,
   ShredModule,
   CommonModule
  ],
  exports: [
      UserDashboardComponent,
      ProductosDashboardComponent
  ],
  providers: []
})
export class DashboardModule { }