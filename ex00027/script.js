var nomes = []
var resultado = document.getElementById("resultado")
var nomeInput = document.getElementById("nome")

function cadastrar() {
    var nome = nomeInput.value.trim()

    if (nome === "") {
        resultado.innerHTML = "Você precisa digitar seu nome completo"
        return
    }

    if (nomes.indexOf(nome) !== -1) {
        resultado.innerHTML = `O nome ${nome} já foi cadastrado.`
        return
    }

    nomes.push(nome)

    var conteudo = `<p>${nome} foi cadastrado no sistema.</p>`
    conteudo += "<h2>Lista de Cadastros</h2>"

    for (var i = 0; i < nomes.length; i++) {
        conteudo += `<p>${i + 1} - ${nomes[i]}</p>`
    }

    resultado.innerHTML = conteudo
    nomeInput.value = ""
    nomeInput.focus()
}