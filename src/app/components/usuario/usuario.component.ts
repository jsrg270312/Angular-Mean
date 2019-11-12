import { Component, OnInit, OnChanges} from '@angular/core';
import {Router} from "@angular/router"

import { Mascota } from "./../../interface/Mascota";
import { MascotaService } from './../../serives/mascota.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit, OnChanges {

//private gato:Gato = {
//  mascota:"El gato Caminante",
//  descripcion: "El único gato que cammina en dos  patas   UuUr",
//  url: "/assets/img/gato.gif"
//}

 // private mascota: string = "gatito";
 // private mensaje: string = "gatito perrón";
  //private url: string = "/assets/img/gato.gif";
  private mascotas: Mascota[]
  constructor(private mascotaService: MascotaService) {
    mascotaService.listMascotas()
      .subscribe((mascotas: any) =>{

        if(!mascotas.error) this.mascotas = mascotas.data

      })
   }

  ngOnInit() {
  }

  borrar(id: string){
    this.mascotaService.deleteMascota(id)
    .subscribe((mascotas : any) =>{
      console.log("res: ", mascotas)
      if(!mascotas.error) {
        this.mascotaService.listMascotas()
          .subscribe((m:any) => {
            
            this.mascotas = (!m.error) ? m.data : this.mascotas
          })
      }
    })
  }
  ngOnChanges(){
    //this.mascotaService.listMascotas()
  }

}
