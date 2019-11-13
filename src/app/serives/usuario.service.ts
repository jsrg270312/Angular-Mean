import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

import { InputUsuario } from "./../interface/input-usuario"
import  {map}  from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private baseUrl: string =`http://localhost:8080/v1/user/`

  constructor(private _http: HttpClient) { }

  getUsers(){
    return this._http.get(this.baseUrl)
  }

  addUsuario(user: InputUsuario) {
  console.log(user);
    return this._http.post(this.baseUrl,user)
  }
  loginUser(user: InputUsuario) {
    console.log("url", `${this.baseUrl}${user.email}/login`, "el user", user)
    return this._http.post(`${this.baseUrl}${user.email}/login`,user)
                      .pipe(map((data: any) => {
                        if(data && !data.error) {
                          localStorage.setItem("userData",JSON.stringify(data.data))
                          console.log("info LOCAL STORAGE",JSON.parse(localStorage.getItem("userData")))
                          return data
                        }
                        else return data
                      }))
  }
  deleteStorage(){
    console.log("esto es lo que tiene guardado storage",JSON.parse(localStorage.getItem("userData")))
    if (JSON.parse(localStorage.getItem("userData")) != null){
        localStorage.removeItem("userData")
    }
  }

}
