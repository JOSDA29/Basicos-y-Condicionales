/*Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario dentro
de tantos años como éste indique.*/

let edadActual = parseInt(prompt("¿Cuál es su edad actual?"));
let anos = parseInt(prompt("¿Dentro de cuantos años desea saber su edad?"));
let edadFutura = edadActual+anos;
console.log("Actualmente su edad es",edadActual,",dentro de",anos,"años, su edad sera",edadFutura);