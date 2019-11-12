import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserauthGuard} from "./guards/userauth.guard"

import {PagesRoutesModule} from "./pages/pagesroutes.module"


import {  AppComponent } from './app.component';
import {  MainComponent } from './pages/main/main.component';
import {  DetalleComponent } from './pages/detalle/detalle.component';
import {  RegistroComponent } from './components/registro/registro.component';
import {  RegistroLoginComponent } from './components/registro-login/registro-login.component';

const routes: Routes = [
	{path: '', component: MainComponent},
	{path: 'detalles/:id', component: DetalleComponent, canActivate: [UserauthGuard]},
	{path: 'eliminar/:id', component: MainComponent},
	{path: 'registros', component: RegistroComponent},
	{path: 'login_registro', component: RegistroLoginComponent},
	{path: '**', redirectTo: '/'}
]
@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		PagesRoutesModule
	],
	exports: [RouterModule]
})

export class RootRoutingModule{}