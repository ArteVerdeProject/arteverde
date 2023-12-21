class Produto {
    constructor(nome, tags) {
        this.nome = nome
        this.tags = tags
    }
}


// Adcionar os produtos no array
produtos = []
produtos.push(new Produto('monitor',['50p', '144hz']))
produtos.push(new Produto('monitor',['50p', '60hz']))
produtos.push(new Produto('teclado',['preto', 'rgb', 'redragon']))
produtos.push(new Produto('mouse',['preto', 'rgb', 'redragon']))
produtos.push(new Produto('teclado',['preto', 'rgb', 'razer']))
produtos.push(new Produto('mouse',['preto', 'rgb', 'razer']))


function pesquisar() {
    pesquisa = document.getElementById('pesquisa').value
    encontrou = false
    produtos.forEach(function(produto){
        if(produto.nome == pesquisa) {
            console.log(produto)
            encontrou = true
        } else {
            produto.tags.forEach(function(tag) {
                if (pesquisa == tag) {
                    console.log(produto)
                    encontrou = true
                }
            })
        }
    })

    if (!encontrou) {console.log('nenhum item encontrado')}
    pesquisa.innerText = ''
}