/*Cree un programa que tome el radio de un círculo e imprima su área y perímetro.*/

const pi = 3.1416
let radio = parseFloat(prompt("Digite el valor del radio de su circulo para saber su area y perimetro"));
let area = pi*radio*radio;
let perimetro = 2*pi*radio;
console.log("El area de su circulo es",area,"y su perimetro es",perimetro);