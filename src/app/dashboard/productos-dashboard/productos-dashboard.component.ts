import { Component, OnInit, Input } from '@angular/core';
import { MascotaService } from "./../../serives/mascota.service"


@Component({
  selector: 'app-productos-dashboard',
  templateUrl: './productos-dashboard.component.html',
  styles: []
})
export class ProductosDashboardComponent implements OnInit {
  @Input() data: any
  constructor(private mascotaService : MascotaService) {

   }

  ngOnInit() {
    console.log("data ",this.data)
  }

  getProductos (){
    this.mascotaService.listMascotas()
    .subscribe(
      (success : any) => { 
        this.data = {
          keys: ["nombre", "precio", "foto", "tipo"],
          datos: success.data}
        },
      (err: any) => {console.log(err)},
      () => {} 
    )
  }

}
