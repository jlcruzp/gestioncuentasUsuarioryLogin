import { empleado } from "./Empleados/empleados.js";



export class sistemaAutenticacion extends empleado{


    //El polimosfirsmo en la autenticacion de usuarios (usar la autenticanción para unir clases que no están unidas por herencia, la unións e da a través de un método en común o un atributo en comun como en este enjmplo, cliente y empleados tienen el atrbuto clave y el método auntentucable)


    static login(usuario, clave){ //la función de login debe ser estatica ya que será la misma función independientemente de la clase
            if ("autenticable" in usuario && usuario.autenticable instanceof Function)       //usando el operador in (dentro de) verificamos si autenticable está dentro de el usuario, si es true, hace la verificacion de la clave, de lo contrario se va a aelse y da false en lugar de desplegar error en caso de querer usar autenticable en usuario en los que no definimos el atributo clave ni los metodos set y get para clave (el get de claves es el metodo autenticable). y verificamos con el operador instanceof que autenticable sea una funcion por que si dejamos solo la primer condicion, daria true si autenticable fuera un atributo y lo que necesitamos es que autenticable exista dentro de usuario y que sea una funcion     
                return usuario.autenticable(clave);//returnara true si la clave coincide y false si no.
               // otra forma de escribir lo de arriba es return usuario.clave == clave; pero el metodo autenticable en empleados y clietes cambia a un geter 
            else
                return false;
    
    
     }



}