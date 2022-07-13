const soma = function (x, y) {
    return x + y
}

const sub = (x,y) => {return x - y}

const imprimirResultado = function (a, b, operacao = soma ) {
    console.log(operacao(a, b))
}

const somaMenosSub = ( a, b, operacao = soma ) => {
    const op1 = operacao(a, b)  
    const op2 = sub(a, b)
    console.log(op1 + op2)
}

imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x,y) {
    return x - y
})
