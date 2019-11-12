//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule} from "./../components/components.module"
import {PagesRoutesModule} from "./../pages/pagesroutes.module";

//Pages
import { DetalleComponent } from './detalle/detalle.component';
import { MainComponent } from './main/main.component';
import { NotfoundpagesComponent } from './notfoundpages/notfoundpages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [
      DetalleComponent,
      MainComponent,
      NotfoundpagesComponent,
      DashboardComponent,
      CarritoComponent,
      PagesComponent
    ],
    imports: [
      CommonModule,
      ComponentsModule,
      PagesRoutesModule
    ],
    exports: [
        DetalleComponent,
        MainComponent,
        NotfoundpagesComponent,
        DashboardComponent,
        CarritoComponent 
    ],
    providers: [],
  })
  export class PagesModule {}