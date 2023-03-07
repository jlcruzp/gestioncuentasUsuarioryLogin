//clase base para gestion de empleados

//Polimorfismo es la gestión de métodos de diferentes formas.

export class empleado{
    #nombre;
    #dni;
    #salario;
    #clave;


    constructor(nombre, dni, salario, clave){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = ""; //al crear al nuevo empleado/gerente o director no tendrá clave, esa quedará asignada por un método que definiremos abajo

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

        verBonificacion(){
            return this.#salario;
    }

    _verBonificacion(bono){
        return this.#salario + (this.#salario * (bono/100));
    }



}