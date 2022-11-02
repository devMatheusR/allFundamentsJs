const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

const veiculo = {
    nome: 'Carro',
    preco: 50000,
    desconto: 0
}


fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})


fs.writeFile(__dirname + '/arquivoGerado2.json', JSON.stringify(veiculo), err => {
    console.log(err || 'Arquivo salvo!')
})

