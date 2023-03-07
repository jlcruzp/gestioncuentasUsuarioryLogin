import { cuenta } from "./cuenta.js";

export class cuentaNomina extends cuenta{

    constructor(cliente, numero, agencia, saldo) { 
        super (cliente, numero, agencia, saldo);

    }


    retirarDeCuenta(valor) {
        //    valor = valor *1.04; se agrega desde el metodo del padre
            
          super._retirarDeCuenta(valor,1);
    
        }

}