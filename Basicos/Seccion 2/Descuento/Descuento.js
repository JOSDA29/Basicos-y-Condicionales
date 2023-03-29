/*Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un
descuento del 10%.*/

let precioProducto = Number(parseFloat(prompt("Digite el precio de su producto")))
let precioFinal = precioProducto-precioProducto*0.10;
console.log("El precio de su producto con un descuento del 10% es de $",precioFinal);