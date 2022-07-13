//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(5, 3)
imprimirSoma(2) // Somando inteiro com Undefined, pois, não tem o segundo número no parâmetro
imprimirSoma(5, 5, 9, 1, 2, 3, 5, 7) // Pega apenas os dois primeiros e ignora o resto


//Funcao com retorno
function soma(a = 0, b = 0){
    return a+b
}

console.log(soma(5, 7))
console.log(soma())