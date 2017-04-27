'use strict'

var valorInteiro = 42;
var valorString ="42";
// Tem valor igual e tipos diferentes

console.log(typeof valorInteiro); // Number
console.log(typeof valorString); // String

var comparacao = valorInteiro == valorString;
console.log(comparacao);

var compara2 = valorInteiro === valorString;
console.log(compara2);

var valorA = "24"; // String
var valorB = 11; //Number

var valorDaSoma = valorA  + valorB;
console.log("Valor da Soma:",valorDaSoma); //2411
console.log("Tipo do valor:", typeof valorDaSoma); //String

var multiplica = valorB * valorA; // 35
console.log("Valor da multiplicação:", multiplica);

var valorInt = 16;
var ValorStr = "a";

console.log("Resultado:", ValorStr * valorInt);
// NaN = Not a Number - Não é um número

/*
== -> Permite que o JS faca a coerção (coercion) dos valores
=== -> Não permite a coerção (coercion), "verifica também os tipos"
!= -> mostra adiferença dos valores
!== -> Compara e diferencia os valores

*/

// Thuthy = qualquer valor booleano que o js consegue transformar em verdadeiro (true)
var valorBoleano = true; //boolean
var Compara = valorInt === ValorStr; //booleano

var valorObjeto = { attr: "atributo string"};

if(valorObjeto){ //coercion
  console.log("passou no if");
}else{
  console.log("passou no else");
}
var ValorStrDeNovo = "";
if (ValorStrDeNovo) {
  console.log("Esta no if");
}else{
  console.log("Esta no else");
}

var ValorIntDeNovo = 0;
if (ValorIntDeNovo) {
  console.log("Esta no if do int");
}else{
  console.log("Esta no else do int");
}

var numeroDoLucas = 24;
if (numeroDoLucas) {
  console.log("O Lucas é ...");
}else{
  console.log("O Lucas não é ...");
}

/* Valores que terão coercion para true (Truthy):

- string com Valores
- numero diferente de 0 (zero)
- objeto
- Array
- Function

Valores que terão coercion para false (Falsy):

- String vazia
- 0, zero
- NaN
- null
- undefined

*/
