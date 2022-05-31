import { Driver } from "../driver/driver";
import { Modulo } from "../modulo/modulo";


export class Producto {
    codigo: number = 0;
    nombre: string = "";
    descripcion: String = "";
    modulo: Modulo = new Modulo();
    driver: Driver = new Driver();

    constructor(){}
}