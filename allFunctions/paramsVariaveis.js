function soma() {  //Toda função tem array de arguments, quando nenhum param é passado, o array é vazio
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))

console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "teste"))
console.log(soma('a', 'b', 'c'))