import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms"
import { Router } from '@angular/router';

import { InputUsuario } from "./../../interface/input-usuario";
import { UsuarioService } from "./../../serives/usuario.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})

export class RegistroComponent implements OnInit {
  
  private registroLogin
  @Input() register: boolean = false
  @Input('class') classImput: []
  private valid : boolean = true
  private errors = []
  private validateEmail : boolean
  constructor(private router : Router,private formBuilder: FormBuilder,private usuarioService: UsuarioService) { 
    this.registroLogin = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
      repeatPassword: new FormControl("", Validators.required),
      check: new FormControl(false)
    })
    
   // console.log(this.registroLogin.valid,"esto es valid")
  }

  ngOnInit() {
  }
  addUsuario(m) {
    const usuario : InputUsuario = {
      email: this.registroLogin.value.email,
      password: this.registroLogin.value.password
    }
    this.usuarioService.addUsuario(usuario)
      .subscribe(
        (success : any) => { console.log(success.message)  },
        (err: any) => {console.log(err)},
        () => {} 
      )
  }

  setUsuario(data){

    const {controls} = this.registroLogin
    this.errors = Object.keys(controls).map(obj => controls[obj])
                        .filter(err => err["status"]==="INVALID")
    console.log(this.classImput,"el class input")
    const newUser= {
      email: data.email,
      password: data.password
    }
    if(this.register) {
      this.usuarioService.addUsuario(newUser)
      .subscribe(
        (success : any) => { console.log(success.message)  },
        (err: any) => {console.log(err)},
        () => {} 
      )
    }
    else{
      this.usuarioService.loginUser(newUser)
      .subscribe(
        (success : any) => { console.log(success)},
        (err: any) => {console.log(err)},
        () => {} 
      )
    }

    console.log(this.registroLogin.controls.email.pristine,"esto es pristine de emaildespues de submit")
    this.registroLogin.reset()
    this.router.navigate(['dashboard','user'])
    
    //console.log(this.registroLogin.valid,"solo devuelve truo o false")
  }

  checkValid(argument) {
    const element = this.registroLogin.get(argument)
    return (!element.pristine && !element.valid)
  }

}
