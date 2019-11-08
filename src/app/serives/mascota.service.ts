import { Injectable } from '@angular/core';

import { Mascota } from "./../interface/Mascota";


@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor() { }

  private mascotas:Mascota[] = [
    {
      id:1,
      mascota:"El gato Caminante",
      descripcion: "El único gato que cammina en dos  patas   UuUr",
      url: "/assets/img/gato.gif"
    },
    {
      id:2,
      mascota:"El perro ",
      descripcion: "El perro caminante",
      url: "/assets/img/perro.jpg"
    },
    {
      id: 3,
      mascota:"El pajaro",
      descripcion: "El pajaro volador",
      url: "/assets/img/pajaro.gif"
    }
  ];

  addMascota(mascota: Mascota) {
    const id = (this.mascotas) ? this.mascotas.length + 1 : 1;
    mascota.id = id
    console.log(mascota)
    this.mascotas.push(mascota)
  }
  getMascota(id: Mascota["id"]) {
    return this.mascotas.filter(mascota=> mascota.id === id )[0]

  }
  listMascotas() {
    return this.mascotas;
  }
  updateMascota() {

  }
  deleteMascota(id: Mascota["id"]) {
    this.mascotas = this.mascotas.filter(mascota=> mascota.id !== id )
    console.log(this.mascotas)
    return this.mascotas
  }
}
