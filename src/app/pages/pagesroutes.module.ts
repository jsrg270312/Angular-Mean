import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserauthGuard} from "./../guards/userauth.guard"


import {  MainComponent } from './main/main.component';
import {  DetalleComponent } from './detalle/detalle.component';
import {  RegistroComponent } from './../components/registro/registro.component';
import {  RegistroLoginComponent } from './../components/registro-login/registro-login.component';


const pagesRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'detalles/:id', component: DetalleComponent, canActivate: [UserauthGuard]},
    {path: 'login_registro', component: RegistroLoginComponent},
    {path: 'registros', component: RegistroComponent},
]

@NgModule({
	imports: [RouterModule.forChild(pagesRoutes)],
	exports: [RouterModule]
})

export class PagesRoutesModule {}