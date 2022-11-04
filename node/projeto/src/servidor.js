const port = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // converter para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})
