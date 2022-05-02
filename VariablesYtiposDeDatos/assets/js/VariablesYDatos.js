//Esto es un comentario
/* Que es un variable?

Una variable es un espacio que guardamos en memoria. Imaginemos un vaso de agua que para poder convertirlo en una variable, tengo que agregarle cualquier dato. Si en este caso vemos al agua como información, al momento de agregar agua al vaso se convierte en una variable. Se llama variable porque se puede cambiar su valor.
*/

recipiente= "agua";
recipiente= "cafe";
recipiente= "leche";
//Java es Case Sensitive, escribir corectamente en mayusculas y minisculas. 
console.log("Hola, whats happen?"); //Esto nos sirve para mostrar en consola nuestra informacion. 

/*Tipos de variables.
    - var (Variable global)
    - Let (Variable local)
    - const (Variale constante)

Declarar, inicializar y modificar variables. 

Declarar una variable es cuando la comienzo a escribir y aun no le doy valores. 
Inicializar una variable es cuando le doy valores a la variable.
Modificar una variable es cuando 
*/


/*Tipos de datos

-string 
-number
-boolean
-undefined
-null
-NaN*/

//Programa para calcular el sueldo de un empleado. 

let CostoHora= 82.76;
let HorasTrabajadas= 40;
let PrimaDominical= 0.05;
let Vacaciones;
let Aguinaldo=  null;
let NombreEmpleado1="Juan";
let Nombreempleado2= "Adriana";
let BonoExtra= 1000; //Bono extra si el trabajador trabaja mas de 45 horas a la semana.

let SueldoBase= CostoHora * HorasTrabajadas;
let PrimaDominicalTotal= SueldoBase * PrimaDominical;

console.log("El nombre de nuestro primer trabajador es" , NombreEmpleado1);
console.log("El sueldo base de nuestro primer trabajador es" , SueldoBase);
console.log("La prima dominical de nuestro trabajador es" , PrimaDominicalTotal);
console.log("Anuestro primer trabajador le corresponder dias de aguinaldo" , Aguinaldo);

//Ejercicios 5 dde todo. 

//Variables en una sola linea.

let info8 = 150;
let info9 = 300;
let SumaTotal = info8 * info9;

console.log("Multiplicacion de info8 más info9 igual a", SumaTotal);


let info1;
let info2;
let info3;

let valor11;
let valor22;
let valor33;

info1 = "Comida1";
info2 = "Comida2";
info3 = "Comida3";


valor11 = 100;
valor22 = 200;
valor33 = 300;

let info5, info6, valor44, valor55, valor66;

(valor44 = 400),
(info5 = "Comida5"),
(valor55 = 500),
(info6 = "Comida6"),
(valor66 = 600);

console.log(info1, valor11);
console.log(info2, valor22);
console.log(info3, valor33);
console.log(info5, valor55);
console.log(info6, valor66);

//String

let string = "Dos comillas";
let string2 = 'Una comilla' ;
let string3 = `Comilla invertida` ;
console.log(string);
console.log(string2);
console.log(string3);

//CONVERSION DE DATOS.

//CADENAS DE TEXTO A NUMEROS.

console.log(Number("50"));
console.log(Number("50.5"));
console.log(Number("Felipe"));
console.log(Number("   "));

Number("Loquevamosacambiar");

//NUMEROS A CADENAS DE TEXTO

console.log(String(50));
console.log(String(true));

//METODOS NUMERICOS
//PARA CORTAR NUMEROS DECIMALES
console.log(parseInt(50.57));
console.log(parseInt(3.141618));

//PARA REDONDEAR DESPUES DEL .5
console.log(Math.round(50.55));
console.log(Math.round(6.66));













