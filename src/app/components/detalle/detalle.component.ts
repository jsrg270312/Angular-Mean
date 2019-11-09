import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Mascota } from './../../interface/Mascota';
import { MascotaService } from './../../serives/mascota.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  private mascota: Mascota
  constructor(private route: ActivatedRoute, private mascotaServiece: MascotaService) { 
    this.getDetalles()

  }

  ngOnInit() {
    console.log("params", this.route.snapshot.paramMap.get('id'))

  }

  getDetalles() {
    this.mascotaServiece
      .getMascota(this.route.snapshot.paramMap.get('id'))
        .subscribe((mascota: any) => {
        if(!mascota.error) this.mascota = mascota.data
      }, () => console.log("error:v")
    )
  }

}
