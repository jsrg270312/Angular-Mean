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
  constructor(private route: ActivatedRoute, private mascotaServiece: MascotaService) { }

  ngOnInit() {
    console.log("params", this.route.snapshot.paramMap.get('id'))
    this.mascota = this.mascotaServiece
                  .getMascota(Number(this.route.snapshot.paramMap.get('id')))
  }

}
