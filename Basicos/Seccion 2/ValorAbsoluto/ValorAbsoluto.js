/*Cree un programa que tome un número real e imprima su valor absoluto.*/

let numero = Number(parseFloat(prompt("Digite cualquier numero para saber su valor absoluto")))
let valorAbsoluto = numero*-1;
if (numero<0) {
    console.log("El valor absoluto de",numero,"es",valorAbsoluto)
}
else {
    console.log("El valor absoluto de",numero,"es",numero)
}