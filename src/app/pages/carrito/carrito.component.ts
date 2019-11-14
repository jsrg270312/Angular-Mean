import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Mascota } from '../../interface/Mascota';
import { MascotaService } from '../../serives/mascota.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: []
})
export class CarritoComponent implements OnInit {
  @Input() datas: any
  private elements
  constructor(private route: ActivatedRoute, private mascotaService: MascotaService) { }

  ngOnInit() {
    this.crearLista()
  }

  crearLista(){
    this.elements = this.mascotaService.getStorageShop()
    console.log("valores para tabla", this.elements)
  }
  deleteElement(id: string){
    this.elements = this.mascotaService.deleteElementStorageShop(id)
    
    console.log("nuevos elementos", this.elements)
  }
}