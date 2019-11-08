import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {  AppComponent } from './app.component';
import {  MainComponent } from './components/main/main.component';
import {  DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
	{path: '', component: MainComponent},
	{path: 'detalles/:id', component: DetalleComponent},
	{path: 'eliminar/:id', component: MainComponent},
	{path: '**', redirectTo: '/'}
]
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class RootRoutingModule{}