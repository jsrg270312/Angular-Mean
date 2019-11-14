import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario  } from "./../../interface/usuario"
import { UsuarioService } from "./../../serives/usuario.service";
import { MascotaService } from './../../serives/mascota.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})


export class ListaComponent implements OnInit {
  @Input() data: any
  @Output("eliminarLista") sendId: EventEmitter<string> = new EventEmitter
  private keys
  private elements
  private usuarios : Usuario [] = []
  constructor( private usuarioService: UsuarioService, private mascotaService: MascotaService) {}

  ngOnInit() {
    this.setData()
  }

  setData() {
    console.log(this.data)
    this.keys = this.data.keys
    this.elements = this.data.datos
    console.log(this.data,"datos de la lista")
  }
  eliminarLista(id: string){
    this.sendId.emit(id)
  }
  
}
