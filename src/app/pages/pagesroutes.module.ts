
import { Routes, RouterModule } from '@angular/router';
import {UserauthGuard} from "./../guards/userauth.guard"


import {  MainComponent } from './main/main.component';
import {  DetalleComponent } from './detalle/detalle.component';
import {  RegistroComponent } from './../components/registro/registro.component';
import {  RegistroLoginComponent } from './../components/registro-login/registro-login.component';
import { PagesComponent } from "./pages.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { ListaComponent } from "./../components/lista/lista.component"



const pagesRoutes: Routes = [{
    path: '',
    component: PagesComponent,
    children:[
        {path: '', component: MainComponent},
        {path: 'detalles/:id', component: DetalleComponent, canActivate: [UserauthGuard]},
        {path: 'dashboard', component: DashboardComponent,  canActivate: [UserauthGuard]},
        {path: 'login_registro', component: RegistroLoginComponent},
        {path: 'registros', component: RegistroComponent},
        {path: 'dashboard', component: DashboardComponent},
        {path: '**', redirectTo: "/"}
    ]
}]

export const PagesRoutesModule = RouterModule.forChild(pagesRoutes)