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
    mascota: '',
    descripcion: ''
  })
  }

  ngOnInit() {
  }
  addMascota(m) {
    const mascota: Mascota = {
      mascota: this.checkoutForm.value.mascota,
      descripcion: this.checkoutForm.value.descripcion,
    }
    this.mascotaService.addMascota(mascota)
  }
  triggerModal() {
    this.modal = true
  }

}
