
//Modulos, (Se importan en Imports:{})
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRoutingModule } from './routes.module';
import {HttpClientModule} from "@angular/common/http"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardModule} from "./dashboard/dashboard.module"
import { ShredModule  } from "./shred/shred.module"

import {PagesModule} from "./pages/pages.module";

//Components (Se importan en Declarations:{})
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    HttpClientModule,
    NgbModule,
    PagesModule,
    DashboardModule,
    ShredModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
