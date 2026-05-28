function verificar(){
let velocidade = Number
("document.getElementById"("velociade").value)

let resultado = document.getElementById("resultado")
resultado.innerHTML = `<p>Sua velocidade atual é ${velocidade} Km/h</p>`
resultado.innerHTML += `<p>Use sempre o sinto de segurança.</p>`

if(velocidade > 80){
    resultado.innerHTML += `<p> Você ultrapassou o limite de velocidade. vai receber uma multa. <p>`
}else{
    resultado.innerHTML += `<p> voê está dentro do limite de velocidade. Boa viagem!</p>`
}
resultado.innerHTML += `<p> use sempre o sinto de segurança. </p>`
}