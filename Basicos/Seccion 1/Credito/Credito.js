/*En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente compra a crédito, el
valor global del electrodoméstico aumenta en un 25%. Cree un programa que lea del usuario el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre al usuario el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.*/

let precioElectrodomestico = parseFloat(prompt("Digite el precio del electrodomestico"));
let plazo = parseFloat(prompt("Digite el plazo en meses para pagar el electrodomestico"));
let precioCredito = precioElectrodomestico*0.25+precioElectrodomestico;
let cuotaMensual = precioCredito/plazo
if (plazo==0) {
    console.log("El electrodomestico se pagara de contado");
}
else {
    console.log("El valor fijo de las cuotas a pagar mensualmente por el electodomestico son de $",cuotaMensual);
};