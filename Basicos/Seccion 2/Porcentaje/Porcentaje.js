/*Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.*/

let valor = Number(parseFloat(prompt("Digite el valor numerico al cual le sacara un porcentaje")));
let porcentaje = Number(parseFloat(prompt("Digite el pocentaje a sacar")));
let valorPorcentaje = porcentaje/100;
let valorFinal= valor*valorPorcentaje;
console.log("El",porcentaje,"% de",valor,"es",valorFinal);
