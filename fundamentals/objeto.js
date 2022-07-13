const prod1 = {}
prod1.any = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 89.99,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}


'{"nome": "Camisa Polo", "preco": 79.90}'


console.log(prod2.obj.obj)