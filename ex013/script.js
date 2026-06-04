function somar() {
    let num1 = Number(document.getElementById("aNum1").value);
    let num2 = Number(document.getElementById("aNum2").value);
    const resultado = num1 + num2;
    document.getElementById("sResultado").innerText = `Resultado da soma: ${resultado}`;
    console.log("SOMAR");
    console.log(num1);
    console.log(num2);
    console.log(typeof num1);
    console.log(typeof num2);
}

function subtrair() {
    let num1 = Number(document.getElementById("sNum1").value);
    let num2 = Number(document.getElementById("sNum2").value);
    const resultado = num1 - num2;
    document.getElementById("sResultado").innerText = `Resultado da subtração: ${resultado}`;
    console.log("SUBTRAIR");
    console.log(num1);
    console.log(num2);
    console.log(typeof num1);
    console.log(typeof num2);
}








