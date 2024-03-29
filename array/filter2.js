Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i=0; i<this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
}

const produtos = [ 
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]


console.log(produtos.filter2(p => p >= 500 ? true : false))
