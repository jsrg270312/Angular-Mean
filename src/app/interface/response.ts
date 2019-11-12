import {Mascota} from "./Mascota"
export interface Response {
    code: number,
    error: boolean,
    data: Mascota | Mascota [],
    message ?: any 
}
