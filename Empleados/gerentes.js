import { empleado } from "./empleados.js";


export class gerente extends empleado{

        #bonificacion;

        constructor(nombre, dni, salario){

            super(nombre, dni, salario);
    }


    verBonificacion(){
       
        return super._verBonificacion(5);
    }


}