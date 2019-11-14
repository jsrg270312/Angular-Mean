import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from "./../../serives/usuario.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() logout: boolean = false
  constructor(private usuarioService: UsuarioService,private route: ActivatedRoute) { 
    this.validate()
  }

  ngOnInit() {
  this.validate()
  }
validate(){
  if(localStorage.getItem("userData") != null) this.logout = true
}
  borrarLocalStorage(){
  this.usuarioService.deleteStorage()
    this.logout = false
  }

}
