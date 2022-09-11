// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

const mathOperations = ((num1, num2) => {
    return console.log(
`   Soma ${num1 + num2}\n
    Subtração ${num1 - num2}\n
    Divisão ${num1/num2}\n
    Multiplicação ${num1*num2}`)
})

mathOperations(5, 8)

