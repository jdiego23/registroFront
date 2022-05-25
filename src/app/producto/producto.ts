import { Driver } from "../driver/driver";
import { Modulo } from "../modulo/modulo";


export interface Producto {
    codigo: number;
    nombre: string;
    descripcion: String;
    modulo: Modulo ;
    driver: Driver;
}