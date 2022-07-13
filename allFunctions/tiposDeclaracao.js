console.log(soma(3, 4))

// function declaration
function soma(x, y) { // Posso chamar no inicio do código
    return x + y
} 

// function expression 
const sub = function (x, y) { // Está sendo atribuida apenas nessa linha, logo não posso chamar antes
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}


