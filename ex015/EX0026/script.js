console.log("LOOP COM WHILE")
let senha = "";
while (senha !== "12345"){
    senha = prompt('Digite sua senha')
}
 
console.log('LOOP COM WHILE')

let i = 7;
do{
    console.log('Passo ${i}')
    i++;
} while (i<=5)

let opc;

do{
    opc = prompt('1 - ver saldo \n 2 - Fazer deposito \n 3 - Sair \n');
                console.log('Você escolheu a opção')
}while (opc !=="3")
    console.log('Programa Encerrado')