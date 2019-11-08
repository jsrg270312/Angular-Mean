import { Component, OnInit, OnChanges} from '@angular/core';

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
    this.mascotas = mascotaService.listMascotas();
   }

  ngOnInit() {
  }

  borrar(id: Mascota['id']){
    
    this.mascotas = this.mascotaService.deleteMascota(id)
  }
  ngOnChanges(){
    this.mascotas = this.mascotaService.listMascotas();
  }

}
