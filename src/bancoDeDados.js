const sequence = {
    _id: 1,
    get id() {return this._id++ }
}

const produtos = {}

salvarProduto = (produto) => {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

getProduto = (id) => {
    return produtos[id] || {}
}

excluirProdutos = (id) => {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

getProdutos = () =>{
    return Object.values(produtos)
}


module.exports = {salvarProduto, getProduto, getProdutos, excluirProdutos}