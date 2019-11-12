//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'


//Componentes
import { UsuarioComponent } from './../components/usuario/usuario.component';
import { FormComponent } from './../components/form/form.component';
import { ModalComponent } from './../components/modal/modal.component';
import { RegistroComponent } from './../components/registro/registro.component';
import { RegistroLoginComponent } from './../components/registro-login/registro-login.component';
import { ControlesComponent } from './../components/controles/controles.component';
import { ListaComponent } from './../components/lista/lista.component';


@NgModule({
    declarations: [
        UsuarioComponent,
        FormComponent,
        ModalComponent,
        RegistroComponent,
        RegistroLoginComponent,
        ControlesComponent,
        ListaComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[
        UsuarioComponent,
        FormComponent,
        ModalComponent,
        RegistroComponent,
        RegistroLoginComponent,
        ControlesComponent,
        ListaComponent
    ],
    providers: [],
  })

  export class ComponentsModule {}