//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule} from "./../components/components.module"
import {PagesRoutesModule} from "./../pages/pagesroutes.module";
import { ShredModule  } from "./../shred/shred.module"


//Pages
import { DetalleComponent } from './detalle/detalle.component';
import { MainComponent } from './main/main.component';
import { NotfoundpagesComponent } from './notfoundpages/notfoundpages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PagesComponent } from './pages.component';
import { from } from 'rxjs';


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
      PagesRoutesModule,
      ShredModule
    ],
    exports: [
        DetalleComponent,
        MainComponent,
        NotfoundpagesComponent,
        DashboardComponent,
        CarritoComponent,
        
    ],
    providers: [],
  })
  export class PagesModule {}