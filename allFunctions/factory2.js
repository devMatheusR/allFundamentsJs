function criarProduto(nome, valorPreco){
    return {
        nome,
        valorPreco,
        desconto: 0.1
    }
}

console.log(criarProduto('Chocolate', 45))
console.log(criarProduto('iPad', 1145.44))
