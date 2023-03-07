
//Las clases abstractas son esas clases bases en las que no deben hacerse instancias, sólo deben tomarse cómo base para generarle extensiones y las extensiones serán las especializadas.
//Tambien existen métodos abstractos


export class cuenta{//La clase cuenta la convertiremos en una clase abstracta quiere decir que es una clasee que no se debe instanciar (generar nuevas instancias de ella) sólo se debe extender (generarle hijos que hereden sus propiedades.)
    #cliente;
    #saldo;
   
    constructor(cliente, numero, agencia, saldo){//la clase se hace abstracta poniendo la propiedad constructor == cuenta evitANDO QUE sea instanciada
       if (this.constructor == cuenta){//con el comando throw new Error podemos generar una alerta y evitar que se instancie esta clase, que solo debe extender y no instanciar.
        
        throw new Error("No Generar instancias de la clase cuenta!!!!!!!");
       };
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente= cliente;
        this.#saldo= saldo;

    }

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }


    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor){//métodos abstractos, se realiza el esqueleto pero se protege para no ser usado en la clase base si no en las clases extensibles

        throw new Error("No es posible generar retiros sin comisión! Debe implementar el método retirarDeCuenta en su clase!!")

    }

    _retirarDeCuenta(valor, comision) {
        valor = valor * (1 + (comision /100)); //dejamos más generico el codigo agregando la variable comisión y definiendo desde el padre el valor con la comisión 

        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }

    prueba(){
        console.log("método Padre")
    }

}    
