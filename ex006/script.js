var hora = new Date().getHours();
console.log(hora);

if (hora === 12) {
    console.log("boa tarde");
}

var numero_1 = 11;
var numero_2 = 11;
var numero_3 = 11;

if (numero_1 === numero_2 && numero_1 === numero_3) {
    console.log("Os números são iguais.");
} else if (numero_1 === numero_2 || numero_1 === numero_3 || numero_2 === numero_3) {
    console.log("Dois números são iguais.");
} else {
    console.log("Nenhum número é igual.");
}







