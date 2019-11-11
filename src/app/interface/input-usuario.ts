import {Usuario} from "./usuario"

export interface InputUsuario {
  email: Usuario["email"],
  password: Usuario["password"]
}
