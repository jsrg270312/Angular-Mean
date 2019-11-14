
import { Routes, RouterModule } from '@angular/router';
import {UserauthGuard} from "./../guards/userauth.guard"


import { DashboardComponent } from "./dashboard.component"
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component"
import { ProductosDashboardComponent } from "./productos-dashboard/productos-dashboard.component"

const dashboardRoutes: Routes = [{
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[UserauthGuard],
    children:[
        {path: 'user', component: UserDashboardComponent },
        {path: 'productos', component: ProductosDashboardComponent }
    ]
}]

export const DashboardRoutesModule = RouterModule.forChild(dashboardRoutes)