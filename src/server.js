const porta = 2022

const bodyParser = require('body-parser')
const express = require('express')
const { resourceUsage } = require('process')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/produtos', (req, res, next)=> {
    res.send(bancoDeDados.getProdutos()) //Escreve em formato JSON
    
})

app.get('/produtos/:id', (req, res, next)=> {
    res.send(bancoDeDados.getProduto(req.params.id)) //Escreve em formato JSON
})

app.post('/produtos', (req, res, next)=> {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})


app.listen(porta, () => {
    console.log(`Esta rodando na porta ${porta}!`)
})