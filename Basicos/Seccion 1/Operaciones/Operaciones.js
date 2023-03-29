/*Cree un programa que lea dos números y muestre su producto, su cociente, su suma y su resta.*/

let numeroUno = parseFloat(prompt("Ingrese el primer numero"));
let numeroDos = parseFloat(prompt("Ingrese el segundo numero"));
let producto = numeroUno*numeroDos;
let cociente = numeroUno/numeroDos;
let suma = numeroUno+numeroDos;
let resta = numeroUno-numeroDos;
console.log("El producto de",numeroUno,"y",numeroDos,"es",producto,", su cociente es",cociente,", su suma es",suma,"y su resta es",resta);