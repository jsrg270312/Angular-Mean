import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Mascota } from "./../interface/Mascota"
import  {map}  from "rxjs/operators"
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private baseUrl: string =`http://localhost:9000/v1/mascota/`
  private lista = {arreglo:[]}
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

  addStorageShop(id: Object){    

    if(JSON.parse(localStorage.getItem("lista")) != null){
      const listaObj = JSON.parse(localStorage.getItem("lista"))
      this.lista.arreglo[listaObj.arreglo.length] = id
      localStorage.setItem("lista",JSON.stringify(this.lista))
    }else {
      this.lista.arreglo[0] = id
      localStorage.setItem("lista",JSON.stringify(this.lista))
    }
    return JSON.parse(localStorage.getItem("lista"))
  }

  getStorageShop() {
    return JSON.parse(localStorage.getItem("lista")).arreglo
  }

  deleteElementStorageShop(id: string) {
    const elements = JSON.parse(localStorage.getItem("lista")).arreglo
    if(elements != null){
      const newElement = elements.filter(element => element._id != id );
      //Eliminar lista actual
      localStorage.removeItem("lista")
      this.lista.arreglo = newElement
      localStorage.setItem("lista",JSON.stringify(this.lista))
      return newElement 
    }else{
      return []
    }
  }
}
