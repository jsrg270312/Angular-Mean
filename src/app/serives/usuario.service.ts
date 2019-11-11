import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Usuario } from "./../interface/Usuario"
import { InputUsuario } from "./../interface/input-usuario"
import  {map}  from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private baseUrl: string =`https://cursos-mean.herokuapp.com/v1/user/`

  constructor(private _http: HttpClient) { }
  addUsuario(user: InputUsuario) {
  console.log(user);
    return this._http.post(this.baseUrl,user)
  }
}
