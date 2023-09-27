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
        exit()
    }
}

function adicionar() {
    var objeto = {
        nome: ``,
        marca: ``,
        preco: ``,
    }
    objeto.nome = prompt("nome")
    objeto.marca = prompt("marca")
    objeto.preco = prompt("preço")
    lista_de_produto.push(objeto)
}

function editar() {
    var indice = prompt("Qual item voce deseja editar ?")

    lista_de_produto[indice].nome = prompt("editar o nome");

    lista_de_produto[indice].preco = prompt("editar o preco");

    lista_de_produto[indice].marca = prompt("editar a marca");

  var produto = lista_de_produto[indice]

    alert(produto)  
}
function remover() {
    var produto_a_remover = prompt("Selecione o produto a ser removido:\n\n" + listarProdutosParaRemocao());

    for (let i = 0; i < lista_de_produto.length; i++) {
        if (lista_de_produto[i].nome === produto_a_remover) {
            lista_de_produto.splice(i, 1);
            alert("Produto removido com sucesso!");
            return;
        }
    }

    alert("Produto não encontrado.");
}

function listarProdutosParaRemocao() {
    var lista = "Produtos disponíveis para remoção:\n\n";
    for (let i = 0; i < lista_de_produto.length; i++) {
        lista += lista_de_produto[i].nome + "\n";
    }
    return lista;
}

function ver() {
    var produto = ""
    for (let i = 0; i < 1; i++) {
        produto += `nome: ${lista_de_produto[i].nome} produto: ${lista_de_produto[i].marca} preço ${lista_de_produto[i].preco}`
    }
    alert(produto)
}

