
//Modulos, (Se importan en Imports:{})
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import {HttpClientModule} from "@angular/common/http"
import { RootRoutingModule } from './routes.module';

//Components (Se importan en Declarations:{})
import { AppComponent } from './app.component';
import { HeaderComponent } from './shred/header/header.component';
import { FooterComponent } from './shred/footer/footer.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormComponent } from './components/form/form.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { MainComponent } from './components/main/main.component';
import { ModalComponent } from './components/modal/modal.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsuarioComponent,
    FormComponent,
    DetalleComponent,
    MainComponent,
    ModalComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RootRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
