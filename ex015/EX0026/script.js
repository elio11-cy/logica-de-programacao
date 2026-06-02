console.log("LOOP COM WHILE")
let senha = "";
while (senha !== "12345") {
    senha = prompt('Digite sua senha');
}

console.log('LOOP COM DO...WHILE');

let i = 1;
do {
    console.log(`Passo ${i}`);
    i++;
} while (i <= 5);

let opc;
do {
    opc = prompt('1 - Ver saldo\n2 - Fazer depósito\n3 - Sair\n');
    console.log('Você escolheu a opção ' + opc);
} while (opc !== "3");

console.log('Programa Encerrado');
