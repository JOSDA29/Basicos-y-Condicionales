/* Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de
19%.*/

let precioProduco = Number(parseFloat(prompt("Digite el precio de su producto")));
let precioFinal = precioProduco*0.19+precioProduco;
console.log("El precio de su producto con el aumento de IVA es de $",precioFinal);
