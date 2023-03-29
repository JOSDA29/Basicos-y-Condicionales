/* Cree un programa que tome el lado de un cubo e imprima su volumen.*/

let lado = Number(parseFloat(prompt("Digite el valor de un lado de su cubo para saber su volumen")));
let area = 6*lado*lado
let volumen = area*area+area;
console.log("El volumen de su cubo",volumen);