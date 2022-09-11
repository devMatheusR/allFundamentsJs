//02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
//triângulo).

function compareSidesOfTriangle(s1, s2, s3){
    if(s1 == s2 && s2 == s3){
        return 'equilatero'
    } else if( s1 == s2 || s1 == s3 || s3 == s2 ) {
        return 'isosceles'
    } else {
        return 'escaleno'
    }
}

function typeOfTriangle(side1, side2, side3){
    console.log('O triângulo é: ',compareSidesOfTriangle(side1,side2,side3))
}

typeOfTriangle(2, 2, 2)
