import { empleado } from "./empleados.js";


export class director extends empleado{


        constructor(nombre, dni, salario){

            super(nombre, dni, salario);

        }

        verBonificacion(){
           
            return super._verBonificacion(10);
        }



}