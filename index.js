/*Importación de clases*/

/*cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());

cuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(70);
console.log(cuentaAhorroLeonardo.verSaldo());*/

/* ***crenado e interactuando con las cuentas bancarias***

//creando nuevas instancias de cuentas conrrientes
const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');
//Nueva instancia de Cuenta de ahorro
const cuentaAhorroLeonardo = new cuentaAhorro(cliente, "9985", "001", 0);
// Nueva instancia de cuenta de nómina
const cuentaNominaLeonardo= new cuentaNomina(cliente, "9854", "001", 100);
//deposito en cuenta de nómina + ver saldo

cuentaNominaLeonardo.depositoEnCuenta(150);

console.log(cuentaNominaLeonardo.verSaldo());

cuentaNominaLeonardo.retirarDeCuenta(50);

console.log(cuentaNominaLeonardo.verSaldo());

*/

/* para verificar las bonificaciones de los empleados
console.log(empleado1.verBonificacion());
console.log(gerente1.verBonificacion());
console.log(director1.verBonificacion());
*/

//verificar operadores instanceof y in

import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import { cuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { cuenta } from './Cuentas/cuenta.js';
import { cuentaNomina } from './Cuentas/cuentaNomina.js';
import { empleado } from './Empleados/empleados.js';
import { gerente } from './Empleados/gerentes.js';
import { director } from './Empleados/director.js';
import { sistemaAutenticacion } from './sistemaAutenticación.js';

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave(111);
console.log(sistemaAutenticacion.login(cliente, 1111));

const cliente2 = new Cliente('María','16979808','8989');


const empleado1 = new empleado("Leonardo", "001", 10000);
empleado1.asignarClave(12345);
console.log(sistemaAutenticacion.login(empleado1,12345));
const gerente1 = new gerente("Juan", "010", 12000);
gerente1.asignarClave(6556);
console.log(sistemaAutenticacion.login(gerente1,6556));
const director1 = new director("Luis", "100", 15000);
director1.asignarClave(12345);
console.log(sistemaAutenticacion.login(director1,12345));


