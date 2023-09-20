var lista_de_produto = []

while (true) {
    var opcao = prompt(`bem vindo ao cadastro dos produtos :)

    1.cadastrar novo produto 
    2.editar produto
    3. remover produto
    4. visualizar todos os produtos
`)


    if (opcao == 1) {
        adicionar()
        //codigo para adicionar um produto
    } else if (opcao == 2) {
        editar()
        //codigo para editar um produto 
    } else if (opcao == 3) {
        remover()
        //codigo para remover
    } else if (opcao == 4) {
        ver()
        //codigo para visualizar
    } else {
        alert("nenhuma das opçoes foram selecionadas!")
    }
}

function adicionar() {
    var objeto = {
        nome: ``,
        marca: ``,
        preco: ``,
    }
    objeto.name = prompt("name")
    objeto.marca = prompt("marca")
    objeto.preco = prompt("preço")
    lista_de_produto.push(objeto)
}

function editar() {
    var indice = prompt("Qual item voce deseja editar ?")

    lista_de_produto[indice].name = prompt("Edite o nome")

    lista_de_produto[indice].preco = prompt("edite o preço")

    lista_de_produto[indice].marca = prompt("edite a marca")


}

function ver() {
    var produto =""
    for (let i = 0; i < 1; i++) {
        produto += `name: ${lista_de_produto[i].name} produto: ${lista_de_produto[i].marca} preço ${lista_de_produto[i].preco}`
    }
    alert(produto)
}
function remover() {
var remover = 
lista_de_produto[i].splice(indice,1) = prompt("qualvocê deseja remover?")


}