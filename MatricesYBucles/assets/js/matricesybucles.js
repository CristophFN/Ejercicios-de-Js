/*

Arreglos, Arrays o Matrices (Es lo mismo xd)

Un array es un conjunto de datos que se pueden almacenar en una sola varible.

Cuando tenemos una variable, la usamos para guardar un dato. 

Cuando tenemos un array, guardamos esos datos en una lista.
Un array ya no es un tipo de dato primitivo, si no que es un objeto porque es considerado una estructura de datos. 

*/

let variable = 1; //Es una variable con un solo valor.

let array = [1, 2, 3, 4, 5]; //Es un array con varios valores.

/*
*Formas de crear un array o arreglo

1. Utilizando la palabra reservada "new" y el metodo "Array"

*/

var arcoiris = new Array();

//Declaramos un nombre para nuestro arreglo (Arcoiris)
//Y le asigamos el metodo "Array" usando la palabra reservada "new"

var arcoiris = new Array(7); //Este arreglo tendra 7 elementos

var arcoiris = new Array(
  "Rojo",
  "Verde",
  "Azul",
  "Amarillo",
  "Violeta",
  "Naranja",
  "Rosa"
); //Declaramos con 7 posiciones

/*
Segunda forma de crear un arreglo (Favorita del coronel)
*/
var arccoiris = [
  "Rojo",
  "Verde",
  "Azul",
  "Amarillo",
  "Violeta",
  "Naranja",
  "Rosa",
]; //DEclaramos un arreglo con 7 posiciones

var arccoiris = []; //Declaramos un arreglo vacio

//EJEMPLOS DE ARREGLOS

var listaSuper = new Array("Leche", "Pan", "Dulces"); //Primera forma
var listaSuper = ["Leche", "Pan", "Dulces"]; //Segunda Forma

var diasSemana = new Array(
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
); //Primer forma
var diasSemana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
]; //Segunda Forma

/*
*Acceder a elemntos de un Array

Antes de hablar de elemwntos de un Array, es importante definir 2 conceptos:

-Cantidad de elemntos
-Indices de esos elemntos (Posiciones del elemnto)

*/

var diasSemana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

//Elementos: 7 Elementos
//Indices : 0,1,2,3,4,5,6
/*
0 - Lunes
1 - Martes
2 - Miercoles
3 - jueves
4 -  Viernes
5- Sabado
6- Domingo 
*/

//Acceder a un elemnto de un Array
//Sintaxis general para imprimir un elemento de un array
//console.log(nombreDelArreglo[ValorDelIndice]);
console.log(diasSemana[4]); //Imprime el elemento de la posocion 4

//*Arrays asociativos

let micomputadora = {
  marca: "ASUS",
  modelo: "GL5522JX",
  procesador: "Intel Core i7",
  ram: "16 GB",
  almacenamiento: "1 TB",
};

/*

*Metodos de los arrays
En los arrays tenemois ciertos metodos que nos permiten manipular los elementos de un array. Estos nos permiten desde agregar elemntos, eliminar elemntos, hasta reordenarlos.

Podemos dividirr estos metodos en 3 grupos:
-Metodos transformaores: Son los que nos permiten manipoular los elementos de un array y cambiar su estructura.
-MEtodos accesores: Son los que nos permiten acceder a los elemntos de un array.
-Metodos iteradores o repetitivos: Son los que nos permiten iteras sobre los elementos de un array, recorriendolos

*/

console.log("");
console.log("-------------METODOS TRANSFORMADORES--------------");
console.log("");
var arrayEjemplo = [
  "Manzanas",
  "Peras",
  "Zanahorias",
  "Duraznos",
  "Melones",
  "Sandias",
  "Paltas",
  "Naranjas",
];
console.log("este es mi arreglo original", arrayEjemplo);

console.log("");
console.log("-------------METODO PUSH--------------");
console.log("");
//!Metodo Push (): Agregar un elemento al final del arreglo.
arrayEjemplo.push("Uvas");
console.log("Agregue uvas al arreglo original", arrayEjemplo);

console.log("");
console.log("-------------METODO POP--------------");
console.log("");
//!Metodo Pop(): Eliminar un elemento al final del arreglo.
arrayEjemplo.pop();
console.log(
  "Elimine el ultimo elemento agregado del arreglo que eras las uvas",
  arrayEjemplo
);

console.log("");
console.log("-------------METODO UNSHIFT--------------");
console.log("");
//!Metodo unshift(): Agregar uno o más elemntos al principio del arreglo.
arrayEjemplo.unshift("Fresas", "Platanos");
console.log(
  "Agregue dos elementos al principio del arreglo, que son fresas y platanos",
  arrayEjemplo
);

console.log("");
console.log("-------------METODO SHIFT--------------");
console.log("");
//!Metodo shift(): Eliminar un elemento del principio del arreglo.
arrayEjemplo.shift();
console.log(
  "Elimine el primer elemento del arreglo,, que era fresas",
  arrayEjemplo
);

console.log("");
console.log("-------------METODO SHORT--------------");
console.log("");
//!Metodo sort(): Ordenar los elementos del arreglo por orden alfabetico
arrayEjemplo.sort();
console.log(
  "Ordene los elementos del arreglo en orden alfabetico",
  arrayEjemplo
);

console.log("");
console.log("-------------REVERSE--------------");
console.log("");
//!Reverse(): Reversa los elementos del arreglo
arrayEjemplo.reverse();
console.log(
  "Ordene los elementos del arreglo del final al inicio",
  arrayEjemplo
);

console.log("");
console.log("-------------FOREACH--------------");
console.log("");
//!forEach(): Recorre el array y devuelve un nuevo array con los elementos que cumplan la condicion.
var frutas = ["Manzana", "Pera", "Uva", "Naranja", "Sandia"];
var forEach = frutas.forEach((fruta) =>
  console.log("La fruta " + fruta + " se encuentra en la posicion")
); //Imprimimos el array.

console.log("");
console.log("-------------METODO SLICE--------------");
console.log("");
//!Metodo slice(): Extrae una seccion de la cadena, devolvemos una cadena nueva copiando el array pq no lo modificamos.
var cadena1 = "Hola Genertion";
var cadena2 = cadena1.slice(3, -2);
console.log("Esta es la cadena1", cadena2);

var cadena3 = ["Hola", "Genertion", "de", "Javascript"];
console.log("Texto inicial", cadena3);

var cadena3 = ["Hola", "Genertion", "de", "Javascript"];
var cadena4 = cadena3.slice(2); //de Javascript
console.log("Aqui quite el Hola y Generation", cadena4);

// Indice 0 = de
//Indice 1 = Javascript

var cadena5 = cadena4[1].slice(4);
console.log("Selecciona Javascript y lo quiero cortar", cadena5);

var arraynumeracion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Este es mi array numeracion", arraynumeracion);

var nuevanumeracion = arraynumeracion.slice(2, 6);
console.log("Esta es la nueva numeracion", nuevanumeracion);

/*

!Metodo splice(): Nos permite modificar el contenido de un arrau. Podemos usarlo en tres formas:

-Para eliminar o suprimir elementos del array.
-Para agregar o insertar nuevos elementos al array.
-Para reemplazar elementos existentes del array.

Esta es la sintaxis general del metodo splice

splice(Indice de inicio, cantidadDeElementosAEliminar, nuevoElemento1, nuevoelemento2, ...., nuevoElementon);

!Parametros que usa el metodo splice

-Indicie dd inicio: Indica la posicion del inicio donde comenzara a a eliminar elementos. (Primer numero del parentesis)
-Cantidad de elementos a eliminar: Indica la cantidad de elementos a eliminar. (Segundo numero del parentesis)
-Nuevo elemento: Indica el nuevo elemento que se agregara al array. (Los numeros que estan despues del parentesis)

*/

console.log("");
console.log("-------------METODO SPLICE PRIMER ESCENARIO--------------");
console.log("");

//Crear un array de ejemplo llamado meses.

let meses = ["Enero", "Febrero", "Lunes", "Martes", "Marzo"];
console.log("Este es mi array original de meses y dias revueltos", meses);

/*
*1- Eliminar elemtos de un array usando splice

Para suprimir valores del array, debemos especificar dos arguemntos:
La posicion del primer elemnto que deseamos eliminar, y el numero de elementos a eliminar

!Sintaxis del splice para eliminar elementos: splice (posicionInicial, cantidadDeElementosAEliminar)

*/

meses.splice(2, 2); //Elimina los dos elementos de la posicion 2
console.log("Elimine los dos elementos que no son meses del arreglo", meses);

console.log("");
console.log("-------------EJERCICIO EXPRES--------------");
console.log("");

var todosLosMesesDelAnio = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
console.log("12 Meses", todosLosMesesDelAnio);

todosLosMesesDelAnio.splice(3, 1);
todosLosMesesDelAnio.splice(4, 1);
todosLosMesesDelAnio.splice(6, 1);
todosLosMesesDelAnio.splice(7, 1);
console.log(
  "Sin 4 Meses pq son tontos y tienen un dia de más",
  todosLosMesesDelAnio
);

//Usando splice quita todos los meses del anio que tengan 30 dias
//Abril, Junio, Septiembre, Noviembre

console.log("");
console.log("-------------SEGUNDO ESCENARIO SPLICE--------------");
console.log("");

/*
*2. Eliminar y agregar elementos al array usando splice

El metodo splice tambien permite agregar nuevos elementos justo despues de la operacion de borrado. Solo tenemos que pasar los elementos que queramos agregar despues de la operacion borrado.

!La sintaxis para eliminar y agregar elementos es: splice)PosicionIncial, CantidadDeElemntosAEliminar, NuevoElemento1, NuevoElemento2);

*/

let meses2 = ["Enero", "Febrero", "Lunes", "Martes", "Diciembre"];
console.log("Este es un nuevo array llamado meses2", meses2); //Imprimimos el array

let dias = meses2.splice(
  2,
  2,
  "Marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre"
); //Elimina los dos elementos de la posicion 2
console.log("Elimine los dos elementos que no son meses del arreglo", meses2);

console.log("");
console.log("-------------TERCER ESCENARIO SPLICE--------------");
console.log("");

/*
*Agregar nuevos elementos al arreglo sin eliminar ningun elemento 

En este ultimo ejemplo, podemos agregar nuevos elementos din eliminar ningun elementos de array, definiendo en 0 el parametro que indica la cantidad de ekementos a eliminar.

*/

let meses3 = ["Enero", "Febrero", "Lunes", "Martes", "Diciembre"];
console.log("Este es un nuevo array llamado meses3", meses3); //imprimimos el array.

meses3.splice(2, 0, "marzo", "abril");
console.log("Agregue nuevos elementos al array", meses3);

console.log("");
console.log("-------------Ejercicio carreritas.--------------");
console.log("");

let Carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];
console.log("Posiciones iniciales", Carreritas);
let posicion2 = Carreritas.splice(2, 4, "Andrea", "Maria", "Jesus", "Jose");
console.log("Andrea adelanto a Maria, Jesus y Jose", Carreritas);
Carreritas.splice(5, 1);
console.log("José quedo eliminado por tonto", Carreritas);
Carreritas.splice(2, 0, "Cristobal", "Fernanda", "Armando");
console.log(
  "Aparecen 3 nuevos corredores detras de Lucia y Roberto",
  Carreritas
);
Carreritas.splice(0, 0, "Federico");
console.log("Un random aparece y se pone primer lugar", Carreritas);
console.log("Y así termina la carrera, gracias.", Carreritas);
