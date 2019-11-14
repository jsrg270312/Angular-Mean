import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from "./../../serives/usuario.service"

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styles: []
})
export class UserDashboardComponent implements OnInit {
  @Input() data: any
  constructor(private usuarioService : UsuarioService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers (){
    this.usuarioService.getUsers()
    .subscribe(
      (success : any) => { 
        console.log(success.data)
        this.data = {
          keys: ["ID","email", "Tipo de Usuario", "Status", "Operaciones"],
          datos: success.data}
        },
      (err: any) => {console.log(err)},
      () => {} 
    )
  }
deleteListaUser(id: string) {
  console.log("ya llego el ID", id)
}
}
