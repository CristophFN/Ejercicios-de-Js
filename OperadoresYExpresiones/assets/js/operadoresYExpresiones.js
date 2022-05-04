/*

Un operador realiza alguna operacion en uno o varios operandos (Valor de datos) y devuelve un valor. Por ejemplo 1 + 1 = 2.

Dentro de los operadores más utilizados en javascript se encuentran:

*/

//Operadores de asigancion (=)

numero1 = 10;
numero2 = 20;
numero3 = 30;

adicion = numero1 + numero2;
sustraccion = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
modulo = numero1 % numero2;

console.log("Operador de asigancion");
console.log(adicion);
console.log(sustraccion);
console.log(multiplicacion);
console.log(division);
console.log(modulo);

/*Operadores de cadena

Los operadores de cadena nos permiten concatenar cadenas de texto, conocer su Longitud, comparar cadenas de texto, buscar una cadena de texto dentro de otra cadena de tetxo, etc.

*/

//toLowerCase()

//sintaxis de lowerCase toLowerCase()

let texto1 = "HOLA GENERATION";
let texto2 = texto1.toLowerCase();
console.log(texto2);

//toUpperCase

//Sintaxis de toUpperCase

let texto3 = "hola generation";
let texto4 = texto3.toLocaleUpperCase();
console.log(texto4);

//trim

//sintaxis de trim()

let texto5 = "  hola generation   ";
let texto6 = texto5.trim();
console.log(texto6);

//concat

//Sintaxis de concat es concat()

let saludo1 = "Hola";
let saludo2 = "Generation";
let union = saludo1.concat(" ", saludo2);
console.log(union);

//Operadores Logicos (&&, ||, !)

/*

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion, su resultado es booleano y sus operaciones son valores logicos o asimilables a ellos

*/

//AND (&&)

/*Sirve para determinar si dos expresiones son verdaderas o falsas.
-Si alguna de las expresiones es falsa, el resultado es falso.
-Si alguna de las expresiones es verdadera, el resultado es falso.
*/

numero11 = 12;
numero22 = 24;

afirmacion1 = numero1 > numero2; //false
afirmacion2 = numero1 < numero2; //true

console.log(
  "El resultado de las dos afirmaciones usando AND es:",
  afirmacion1 && afirmacion2
);

numero11 = 12;
numero22 = 24;
numero33 = 36;

afirmacion1 = numero3 > numero2; //true
afirmacion2 = numero2 > numero1; //true

console.log(
  "El resultado de las dos afirmaciones usando AND es:",
  afirmacion1 && afirmacion2
);

//OR (||)

/*

Sirve para determinar si dos expresiones son falsas. 
-Si ambas expresiones son falsas, el resultado es falso.
-Si alguna de las expresiones es verdadero, el resultado es verfdadero

*/

num1 = 12;
num2 = 24;
afirm1 = num1 < num2; //true
afirm2 = num1 != num2; //true
console.log(
  "El resultado de las dos afirmaciones usando OR es:",
  afirm1 || afirm2
);

//NOT (!)

/*

Siempre devuelve lo contrarrio del resultado de la expresion
-Si la expresion es verdadera, el resultado es falso.
-Si la expresion es falsa, el resultado es verdadero.
*/

a = 12;
b = 24;

afirmacion11 = a < b; //(verdadero)
afirmacion22 = a != b; // (Verdadero)

console.log("El resultado de la afirmacion usando NOT es:", !afirmacion11);
console.log("El resultado de la afirmacion NOT es:", !afirmacion22);

//Operadores de comparacion (==, !=, >, >=, <=)
//Operadores aritmeticos (+, -, /, *, %)

//Operador DE IGUALDAD (==)

/*
Sirve para comparar si dos valores son iguales. 
*/

let d = 12;
let e = 13;
let f = 13;

console.log(
  "El resultado de la comparacion usando el operador == de d y e es:",
  d == e
);
console.log(
  "El resultado de la comparacion usando el operador ==  de e y f es:",
  e == f
);
console.log(
  "El resultado de la comparacion usando el operador ==  de d y f es:",
  d == f
);

//Operador diferente (!=)

m = 13;
n = 12;
o = 12;
console.log("OPERADOR DIFERENTE (!=)");
console.log(
  "El resultado de la comparacion usando el operadir != de m y n es",
  m != n
);
console.log(
  "El resultado de la comparacion usando el operadir != de m y n es",
  n != o
);
console.log(
  "El resultado de la comparacion usando el operadir != de m y n es",
  m != o
);

//OPERADOR DE IGUALDAD ESTRICTA (===)
/*
  Sirve para comparar si dos valores son iguales y de mismo tipo
  */
let ejemplo1 = 23;
let ejemplo2 = 13;
let textoejemplo = "23";
let textoejemplo2 = "texto 2";

console.log(
  "El numero 23 y el texto 23 son estrictamente diferentes",
  ejemplo1 !== textoejemplo
); //Imprime true porque tiene el mismo valor pero son distintos tipos de datos.

//Operador mayor que (>)
console.log("Operador mayor que (>)");
console.log("El numero 23 es mayor que el numero 13):", ejemplo1 > ejemplo2); //Imprime true pq el numero 23 es mayor que el numero 13

//Operador menor que (<)
console.log("Operador menor que (>)");
console.log("El numero 23 es menor que el numero 13):", ejemplo1 < ejemplo2); //Imprime true pq el numero 13 es mayor que el numero 23

//Operador mayor o igual que (>=)
console.log(
  "El numero 23 es mayor o igual que el numero 23",
  ejemplo1 >= ejemplo2
); //Imprime true porque el numero 23 es mayor o igual que el numero 13

//Operador menor o igual que (<=)
console.log(
  "El numero 13 es menor o igual que el numero 23",
  ejemplo2 <= ejemplo1
); //Imprime true pq el numero 13 es menor o igual que el numero 23

//COMBINACION DE OPERADORES1

//!Cambiando operaciones

numa = 12;
numb = 24;
numc = 25;
numd = 92;
nume = 91;

op = (numa < numb || numb < numc) /*true*/ && !(numa != num2) && num5 != numc;
console.log("El numa es menor que el numb", numa < numb);
console.log("El numb es menor que el numc", numb < numc);

numa = 12;
numb = 24;
afirma = numa < numb; //true
afirmb = numb < numc; //true
console.log(
  "El resultado de las dos afirmaciones usando OR es:",
  afirm1 || afirm2
);

//Operadores aritmeticos (+, -, /, *, %) Operaciones basicas pues

function operacionesMatematicas() {
  numero1 = 10;
  numero2 = 2;
  numero3 = "5";
  //Suma
  console.log("El resultado de la suma de 10 + 2 es:", numero1 + numero2);
  //Resta
  console.log("el resultado de la resta de 10 - 2 es:", numero1 - numero2);
  //multiplicacion
  console.log(
    "El resultado de la multiplicacion de 10 * 2 es:",
    numero1 * numero2
  );
  //Division
  console.log("El resultado de la division de 10 / 2 es:", numero1 / numero2);
  //Modulo
  console.log("El resultado de la modulo de 10 % 2 es:", numero1 % numero2);
  //Exponenciacion
  console.log("El resultado de la exponenciacion de 10 ** 2 es", numero1 ** 25);
  //Raiz Cuadrada
  console.log("El resultado de la raiz cuarads de 1o es:", Math.sqrt(numero1));
}
operacionesMatematicas();

//Incremento y Decremento
let primervalor = 10;
let segundovalor = 2;
let tercervalor = "23";
console.log("Incremento de 10", primervalor++);
console.log("Decremento de 2", --segundovalor);

//Positivos y negatios unarios

//Negativo Unario (-)
//Nos devuelve el valor en negativo de un numero.

console.log("Operador Negativo Unario de 10 es:", -5);

//Positivo Unario (+)
console.log("Operador positivo unario de la cadena 23 es:", +tercervalor);
