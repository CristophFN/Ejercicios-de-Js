//Conversion de datos
console.log("Conversion de cadenas a numeros usando Number()");
console.log(Number("50")); //50
console.log(Number("50.5")); //50.5
console.log(Number("Diez")); //NaN
console.log(Number("   ")); //0
console.log(Number("10 10 10")); //NaN

//El metodo parseInt analiza una cadena y devuelve un numero entero. Si permite espacios y solo devuelve el pprimer numero encontrado.
console.log("Conversion de cadenas en numeros usando parseInt()");
console.log(parseInt("-10")); //-10
console.log(parseInt("10.55")); //10
console.log(parseInt("10 10 10 10")); //10
console.log(parseInt("10 años")); //10
console.log(parseInt("")); //NaN

//El metodo parseFloat analiza la cadena y devuelve un numero decima. Si permite espacios y solo devuelve el primer numero enontrado.
console.log("Conversion de cadenas en numeros usando parseFloat()");
console.log(parseFloat("-10")); //-10
console.log(parseFloat("10.55")); //10.55
console.log(parseFloat("10 10.58 10 10")); //10

//Conversion de numeros a cadenas.
String(); //Convierte un numero a cadena
console.log("Conversion de numeros a cadenas usando String()");
console.log(String(10)); //"10"
console.log(String(10.5)); //"10.5"
console.log(String(true)); //"true"
console.log(String(false)); //"false"
console.log(String(100 + 23)); //"123"

//Conversion de booleanos a numeros
console.log("Conversion de booleanos a numeros usando Number()");
console.log(Number(false)); //0
console.log(Number(true)); //1

//Conversion de numeros a booleanos
console.log("Conversion de numeros a booleanos usando Boolean()");
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true

/*
typeof nos ayuda a saber el tipo de dato que es una variable. La sintaxois es la siguiente:

typeof variable;
*/
console.log("Uso de Typeof");
console.log(typeof "Hola"); //string
console.log(typeof 10); //number
console.log(typeof true); //boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof 3.1416); //number
console.log(typeof []); //object

//Value to be converted
//false
console.log(Number(false)); //0
console.log(String(false)); //"false"
console.log(Boolean(0)); //false
//true
console.log(Number(true)); //1
console.log(String(true)); //"false"
console.log(Boolean(1)); //true
//0
console.log(Number(0)); //0
console.log(String(0)); // "0"
console.log(Boolean(false)); //0
//1
console.log(Number(1)); //1
console.log(String("1")); // "1"
console.log(Boolean(true)); //1
//"0"
console.log(Number(0)); //0
console.log(String("0")); //"0"
console.log(Number(false)); //0
//"000"
console.log(Number(0), Number(0), Number(0)); //000
console.log(String("000")); //"0"
console.log(Number(false), Number(false), Number(false)); //000
//NaN
console.log(Number("NaN")); //NaN
console.log(String("NaN")); //NaN
console.log(Boolean());
//Undefined
console.log(Number(undefined)); //0
console.log(String(undefined)); //"Undefined"
console.log(Boolean(undefined)); //false
