export class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente, clave) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = "";
    }

    asignarClave(clave){ //esta sería la función set, ahora falta hacer la funcion get
        this.#clave = clave;
    }

    autenticable(clave){
        return clave == this.#clave;
    }
  /*  get clave(){ //nuestra función get para obtener el password si usaramos en sistema de autenticación return usuario.clave == clave;
        return this.#clave;
    }*/
}