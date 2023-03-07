import { cuenta } from "./cuenta.js";

export class CuentaCorriente extends cuenta { //extends es una forma de importar todo el contenido del objeto cuenta (operacionesCuentas) de tal forma que cuenta corriente ya tiene todo el funcionamiento de cuenta
   
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia ) { //siempre que usemos extends debemos asegurar importar también el constructor del padre que en este caso es cuenta
        super (cliente, numero, agencia, 0);// con la palabra super, hacemos referencia inmediatamente a la clase padre que en este caso al poner el cursor sobre la palabra super javascript sabe que la clase padre es cuenta y debemos definir dentro de los parentesis las variables que se necesitarán, en este caso en saldo pusimos cero por lo que de ahora en adelante cada vez que incialicemos una nueva instancia de cuentacorriente no se´ra necesario declarar el 0 en saldo, automaticamente lo hará ya que en el padre en el super ua lo pusimos
        CuentaCorriente.cantidadCuentas++;
    }

      prueba (){// en el padre (cuenta) hicimos un método nombrado también prueba, cuentacorriente es hijo de cuenta por lo tanto cuando nombramos un método hijo igual al del padre hacemos sobreescritura del metodo, en el ejemplo de abajo hacemos referencia al super.prueba y luiego abajo ejecutamos el consolelog del hijo, si no llamamos al super.prueba, estaremos sobreescribiendo el metodo prueba y spolo aparecerá el console.log de método hijo, pero si lo llamamos aqui, ejecutará primero el padre y luiego el hijo.

        super.prueba ();//se manda llamar al metodo padre y en caso de que no lo necesitemos podremos no llamar a super y el metodo con el mismo nombre se sobreescribe. con esto podemos usar todo el codigo del padre que necesitemos pero lo que no necesitemos,o rrequiramos cambiar se puede sobreescribir.

        console.log("método hijo");// tenemos las tres opciones:1.- usar el metodo del padre, 2.- sobreescribir el metodo del padre y cambiarlo a lo que necesitemos o 3.- tomar y ampliar el metodo del padre para hacerlo más robusto.

      }

      retirarDeCuenta(valor) {//En este ejemplo sobreescribimos el metodo del padre en el que primero asignamos el valor del "valor" que es la cantidad deseada a retirar más el 5% de comisión para cuentas corrientes, en cuentas de ahorro es del 2% y una vez definido el el monto a retirar, mandamos llamar al metodo del padre ya que si no lo hacemos así, el padre tiene una propiedad #saldo que sabemos que es privada por lo que si quisieramos copiar toda la operacion acá no podríamos ya que recordemos que #saldo pertenece al padre y cuentacorriente solo lo hereda pero no puede verlo ni modificarlo por que es privado.

        // valor = valor *1.05;//se le agrega la comisión al valor deseado para retiro

       super._retirarDeCuenta(valor,5);//con el valor definido arriba, se llama al metodo del padre para él lo ejecute y si pueda trabajar con las propiedades #saldo que son privadas.

    }
}