import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Mascota } from '../../interface/Mascota';
import { Response } from '../../interface/response';
import { MascotaService } from '../../serives/mascota.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  private mascota: Mascota
  private response: Response
  private nombre : Mascota["nombre"]
  private descripcion : Mascota["descripcion"]
  private foto : Mascota["foto"]
  private error: boolean = false
  constructor(private route: ActivatedRoute, private mascotaServiece: MascotaService) { 

  }

  ngOnInit() {
//    console.log("params", this.route.snapshot.paramMap.get('id'))
    this.getDetalles()
  }

  getDetalles() {
    this.mascotaServiece
      .getMascota(this.route.snapshot.paramMap.get('id'))
        .subscribe(
         (mascota :any) => {
            if(mascota.error) this.error = mascota.error
            
            else{
              const {nombre, descripcion, foto} = mascota.data
              this.nombre = nombre
              this.descripcion = descripcion
              this.foto = foto
            } 
          },
          error => {
            this.error = error.error
            this.response = error.error
          }
        ),
        () => {}
  }

}
