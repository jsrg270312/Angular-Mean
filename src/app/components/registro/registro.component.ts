import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms"

import { InputUsuario } from "./../../interface/input-usuario";
import { UsuarioService } from "./../../serives/usuario.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})

export class RegistroComponent implements OnInit {
  
  private checkoutFor
  constructor(private formBuilder: FormBuilder,private usuarioService: UsuarioService) { 
    this.checkoutFor = this.formBuilder.group({
      email: '',
      password: '',
    })
  }

  ngOnInit() {
  }
  addUsuario(m) {
    const usuario : InputUsuario = {
      email: this.checkoutFor.value.email,
      password: this.checkoutFor.value.password
    }
    this.usuarioService.addUsuario(usuario)
      .subscribe(
        (success : any) => { console.log(success.message)  },
        (err: any) => {console.log(err)},
        () => {} 
      )
  }

}
