let cadastro  = [
    ["Jhonata", 17, "91kg", 1.83, ['Iza', 'Preto']],
    ['Paulo', 18, '80', 1.75, ['Dozinha', 'Mingua']]
]

let objCadastro = {Nome:'Jhonata', idade:36}

console.log(objCadastro)
for(let i = 0; i<=cadastro.length-1;i++){
    for(let y = 0; y<= cadastro[0][4].length - 1; y++){
        console.log(cadastro[i][0] - cadastro[i][4][y])
    }
}
   