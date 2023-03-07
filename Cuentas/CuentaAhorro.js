import { cuenta } from "./cuenta.js";

export class cuentaAhorro extends cuenta{ //al usar el comando extends con el nombre de la clase, automaticamente se agrega el import en la linea 1 
    
    constructor(cliente, numero, agencia, saldo ) { //siempre que usemos extends debemos asegurar importar también el constructor del padre que en este caso es cuenta
        super (cliente, numero, agencia, saldo);// con la palabra super, hacemos referencia inmediatamente a la clase padre que en este caso al poner el cursor sobre la palabra super javascript sabe que la clase padre es cuenta y debemos definir dentro de los parentesis las variables que se necesitarán, en este caso en saldo pusimos saldo ya que en las cuentas de ahorro si pueden inicializarse con un saldo a diferencia de las cuentas corrientes.       

    }

    retirarDeCuenta(valor) {
    //    valor = valor *1.02; se agrega desde el metodo del padre
        
      super._retirarDeCuenta(valor,2);

    }
   
}

/*El extends nos sirve cuando algunas clases tienen en general muchas funciones similares, como en este ejemplo
cuentaAhorros y cuentaCorriente tienen muchas operaciones similares como deposito en cuenta, retiro de cuenta y ver saldo
pero en el caso de cuenta corriente un cliente puede tener más de una cuentas corriente, pero no más de una cuenta de ahorros entonces 
si es necesario diferenciar las clases cuando creemos una nueva cuenta de ahorros y una cuenta corriente, ambas hará uso de las funciones basicas de cuenta pero las funcionalidades especificas las tendrá cada una además
de que podremos crearlas con el diferenciador de clase*/