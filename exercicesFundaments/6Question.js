// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function simpleInterest(initialCapital, interestRate, timeOfApplication){
    return initialCapital * interestRate * timeOfApplication
}

function compostInterest(initialCapital, interestRate, timeOfApplication){
    return (initialCapital * Math.pow( 1 + interestRate, timeOfApplication)).toFixed(2).replace('.',',')
}

console.log(compostInterest(1400, 0.07, 2))
