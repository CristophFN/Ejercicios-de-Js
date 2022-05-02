/*

Scope: (alcance) es el alcance de una variable que esta definida al momento de declararla.
var son globales
let son locales

Hoisting: es la flexibilidad que tenemos para llamar funciones y variabales antes de que sean definidas. 

/*

Funciones
Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan. 

*/

//Estructura basica de una funcion que ya esta siendo llamada o invocada. 

function nombreFuncion(parametros){
    //instrucciones
}

nombreFuncion(); //Invocamos a nuestra funcion

/*
Formas de crear e invocar funciones

1. Crear una funcion tradicional, crearla y darle un nombre y parametros.

*/

//Funcion Tradicional creada y con un nombre asigando

var valor1 = 22; //Estos no funcionan aunque sean globales pq estan afuera de las funciones.
var valor2 = 33;

function SumaDeDosValores(){
    let valor1 = 34; //Estos funcionan de manera independiente aunque sean el mismo nombre y valor pq estan funciones diferentes cada uno.
    let valor2 = 10;
    let suma = valor1 + valor2;

    console.log("Esta es mi primer funcion", suma);
}
SumaDeDosValores(); //invocamos a nuestra funcion

function SumaDeTresValores(){
    let valor1 = 34;
    let valor2 = 13;
    let valor3 = 12
    let suma = valor1 + valor2 + valor3;

    console.log("Esta es mi segunda funcion", suma);
}
SumaDeTresValores(); //invocamos a nuestra funcion

function SumaDeCuatroValores(){
    let valor1 = 34;
    let valor2 = 13;
    let valor3 = 12
    let valor4 = 22
    let suma = valor1 + valor2 + valor3 + valor4;

    console.log("Esta es mi tercera funcion", suma);
}
SumaDeCuatroValores(); //invocamos a nuestra funcion

//Funcion con parametros asigandos en la llamada

function areaTriangulo(base, altura){
    let area = base * altura / 2;
    console.log("El area del triangulo es:", area);
}

areaTriangulo(5, 32); //Invocamos a nuestra funcion
areaTriangulo(10, 20);
areaTriangulo(2); // Aqui sale NaN pq no estan todos los valores marcados dentro de la function del inicio

function SumaDeTresValores(valor1, valor2, valor3){
    let suma = valor1 + valor2 + valor3;

    console.log("Esta es una nueva funcion", suma);
}
SumaDeTresValores(10, 10, 10); //invocamos a nuestra funcion

/*

Return

La snetencia return finaliza la ejecucion de la funcion, y especifica un valor para ser devuelto a quien llama a la funcion. O lo que es lo mismo, usamos return para finalizar y tambien para poder asignar el resultado a una variable.

*/

function areaCuadrado(){
    let lado =6;
    let areaCuadrado = lado * lado;
    return areaCuadrado;
}

let resultadoQueUsareMasTarde = areaCuadrado(); //Guardando el resultado de areaCuadrado en una variable para usarlo despues

areaCuadrado(); //invocamos a nuestra funcion

console.log("Usare mi resultado que guarde anteriormente para mostrate el area del cuadrado", resultadoQueUsareMasTarde);

function volumenCubo(){
    let volumen = resultadoQueUsareMasTarde * resultadoQueUsareMasTarde *resultadoQueUsareMasTarde;

    console.log("El volumen del cubo es:", volumen);
}

volumenCubo(); //Invocamos a nuestra funcion

//Funcion que calcule el area de un circulo y otra que calcule el volumen de un cilindro.

function areaCirculo(){
    const pi=3.1416;
    let radio = 7;
    let areaCirculo = pi * radio * radio;
    return areaCirculo;
}
areaCirculo(); //Invocamos nuestra funcion

let AreaDelCirculo = areaCirculo(); //Voy a guardar TODO EL RESULTADO DE LA FUNCION en nueva variable. Ya sabemos que dentro de esta nueva funcion hay un valor guardado en la memoria (Limbo de las variables)

function volumenCilindro(){
    let longitud = 19;
    let volumenCilindro = AreaDelCirculo * longitud;
    console.log("El volumen del cilindro es", volumenCilindro);
}

volumenCilindro(); //Invocamos a nuestra variable

/*

//Funciones flecha

//Funcion tradicional

function sumita (numero1, numero2){
    return numero1 + numero2;
}

//convirtiendo a sumita en una funcion flecha

function sumita(numero1, numero2) {
  return numero1 + numero2;
}

//Paso 1. Quitamos la palabra reservada function
sumita = (numero1, numero2) {
  return numero1 + numero2;
}

//Paso2. Quitamos las llaves que delimitan la funcion y en su lugar, abrimos este bloque de texto con una flecha =>
sumita = (numero1, numero2) => return numero1 + numero2;

//Paso 3. Quitamos el return pq ya esta implicito.

sumita = (numero1, numero2) => numero1 + numero2;

//Las funciones flehca son siempre anonimas, estamos usando una estructura declarativa donde asignamos la funcion a una variable.

//A pesar de que de principio es complicado 

*/

//Otra forma de crear funciones

//2. Asignando nuestra funciona una variable.
function sumita (numero1, numero2){
    return numero1 + numero2;
}

//Esto es una funcion anonima

let x = function(){
    let numero1 =5;
    let numero2 = 10;
    let suma = numero1 + numero2;
    console.log("La suma de mi funcion anonima es:", suma);
}

x() //Invocamos a nuestra funcion

var y = (numero1, numero2) => numero1 + numero2;

//Otra funcion anonima convertida a una funcion flecha

function saludar(nombre){
    let saludo = "Hola " + nombre;
    console.log (saludo);
}
saludar ("Felipe");
saludar ("Alonso");
saludar("Juan");

//convertir mi saludo a una funcion flecha 

let saludoFlecha = nombre => console.log("Hola " + nombre);
saludoFlecha("Jesus");
saludoFlecha("Cesar");
saludoFlecha("Fernando");




