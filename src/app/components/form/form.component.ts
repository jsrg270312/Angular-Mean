import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms"

import { Mascota } from "./../../interface/Mascota";
import { MascotaService } from "./../../serives/mascota.service";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  //private mascota: Mascota['mascota']
  //private descripcion: Mascota["descripcion"]
  private checkoutForm
  constructor(private mascotaService: MascotaService, private formBuilder: FormBuilder) { 
  this.checkoutForm = this.formBuilder.group({
    nombre: '',
    descripcion: '',
    foto: ''
  })
  }

  ngOnInit() {
  }
  addMascota(m) {
    const mascota: Mascota = {
      nombre: this.checkoutForm.value.nombre,
      descripcion: this.checkoutForm.value.descripcion,
      foto: this.checkoutForm.value.foto,
    }
    this.mascotaService.addMascota(mascota)
      .subscribe(
        (success : any) => { console.log(success.message)  },
        () => {},
        () => {} 
      )
  }
  triggerModal() {
   // this.modal = true
  }

}
