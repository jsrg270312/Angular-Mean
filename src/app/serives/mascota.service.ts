import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Mascota } from "./../interface/Mascota"
import  {map}  from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private baseUrl: string =`https://cursos-mean-2.herokuapp.com/v1/mascota/`

  constructor(private _http: HttpClient) { }

  
  addMascota(mascota: Mascota) {
   // console.log(mascota,"mascota Form")
    return this._http.post(this.baseUrl, mascota)
    
   // const id = (this.mascotas) ? this.mascotas.length + 1 : 1;
   // mascota.id = id
   // console.log(mascota)
   // this.mascotas.push(mascota)
  }
  getMascota(id: string) {
    return this._http.get(this.baseUrl + id)
      .pipe(map((data: any )=> data))

  }

  listMascotas() {
    return this._http.get(this.baseUrl)
      .pipe(map(data => data))
         //   .pipe(map(mascota => mascota))
    //return this.mascotas
  }
  updateMascota() {

  }
  deleteMascota(id: string) {
    //this.mascotas = this.mascotas.filter(mascota=> mascota.id !== id )
    //console.log(this.mascotas)
    //return this.mascotas
    return this._http.delete(this.baseUrl + id)
  }
}
