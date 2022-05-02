/*

Cuando hablamos de control de flujo hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

Es un programa, a menos que el control de flujo se vea modificado por una instrccion de control (por ejemplo una condicional), el control de flujo se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha)

*/

/* Condicionales

Las condicionales nos permiten evaluar si una condicion cumple o no con lo que estamos evaluando. Su sintaxis es muy sencilla, tanto que podemos agregar condiciones intermedias en el caso de que no se cumpla la primera evaluacion y se deban evaluar más.

*/

/*

Sentencia if (si)

Sintaxis de un if
if (la camisa de felipe esta limpia){
    /felipe va a la fiesta
}

*/

//Felipe quiere ir a una fiesta, pero Felipe es menor de edad y esa fiesta daran alcohol. Ayuda a Felipe a decidir si puede o no ir a la fiesta.

//Primer codigo de la fiesta con if 

const edadFelipe = 17;

if (edadFelipe < 18){
    console.log("Lo siento Felipe no puedes ir a la fiesta");
}

/*

Sentencia else ("Si no " o "de otro modo")

*/

//Segundo codigo de la fiesta con if y else

const edadFelipe2 = 17; //Felipe es menor de edad 

if (edadFelipe2 < 18) { //Si la sentencia es verdadera
  console.log("Lo siento Felipe no puedes ir a la fiesta");
} else {
    console.log("Felipe puede ir a la fiesta"); //Si la sentencia es falsa se ejecuta esta otra linea de codigo
}

//PROMPT NOS SIRVE PARA SOLICITAR DATOS AL USUARIO Y ALMACENARLOS EN UNA VARIABLE.
/*
var hora = prompt ("Ingresa la hora actual - solo la hora por favor");

if (hora <18){
 console.log("Buenos tardes, hace mucho calor, toma agua");
} else {
    console.log("Buenas noches, hace mucho frio, por favor usa un sueter");
}
*/

/*
!VALORES QUE SE EVALUAN COMO FALSOS

los valores que se evaluan como falsos son:

-false
-0
-"" (Cadena vacia)
-null
-undefinded
NaN (Not a number)

*/

/*

else if ("de otro modo si")

Sintaxis de un else if

if (condicional){ //sies verdadero
/bloque de codigo que se ehjecuta si la condicion es verdadera
} else if (condicion2){
    /bloque de codigo que se ejecuta si la condicion es falsa y la condicion es 2 verdadera
} else {
    /bloque de codigo que se ejecuta si la condicion1 es falsa y la condicion2 es falsa
}

*/

//!if nos da un solo resultado
//!else nos da dos resultados
//!if else nos da los resultados que nosotros queramos. 

var hora = prompt("Ingresa solo la hora actual en formato de 24 horas");

if (hora <= 13){ //si la hora es menor a 13 
    console.log.apply("Es de mañana, desayuna rico");
} else if (hora <=19){ //de otro modo si la hora es menor o igual a 19
    console.log("Es de tarde, come rico")
} else { //si no
    console.log("Es de noche, cena rico");
}

/*

Operador ternario

Estructura de operador ternario

resultado = (condicion)?valor1:valor2;

*/
///Ayuda al profesor felipe a saber cuantos alumnos de su clase pasaron la materia. 


var cantidaddereprobados = 30;

if(cantidaddereprobados < 15){
    cantidaddereprobados = "Felipe tuvo pocos reprobados";
} else {
    cantidaddereprobados = "Felipe tuvo muchos reprobados";
}
console.log(cantidaddereprobados);

//Transformando a un operador ternario

var reprobados = cantidaddereprobados <15? "Felipe tuvo pocos reprobados" : "Felipe tuvo muchos reprobados"; 