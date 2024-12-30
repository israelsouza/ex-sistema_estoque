const prompt = require('prompt-sync')();

/* 
    - cadastrar, 
    - consultar,
    - atualizar e remover itens do estoque,
    - bem como calcular valor total do estoque 
    - listar ferramentas por categorias.
*/

var resp = 7
var ferramentas = [{
    nome: 'martelo',
    categoria: 'manual',
    p_unidade: 7.45,
    qtd_total: 45
}, {
    nome: 'serrote',
    categoria: 'manual',
    p_unidade: 9.45,
    qtd_total: 52
}]

function cadastrarFerramenta() {
    nome = prompt('Qual o nome da ferramenta que deseja cadastrar? ')
    categoria = prompt('Qual o a categoria da ferramenta que deseja cadastrar? ')
    p_unidade = Number(prompt('Preço de uma unidade: '))
    qtd_total = Number(prompt('Qual a quantidade que deseja cadastrar? '))

    var obj = new Object()
    obj.nome = nome
    obj.categoria = categoria
    obj.p_unidade = p_unidade
    obj.qtd_total = qtd_total

    ferramentas.push(obj)
}

function consultarFerramenta() {
    for (let i = 0; i < ferramentas.length; i++) {
        console.log( ferramentas[i].nome )
    }

    let consulta = prompt('Qual ferramenta deseja consultar? ')

    for(let i = consulta; i < ferramentas.length; i++){
        console.log(ferramentas[i])
        break
    }
}

function atualizarQuantidadeFerramenta() {

}

function removerFerramenta() {

}

function exibirFerramentasPorCategoria() {

}




while (resp > 0) {
    console.log("Seja bem-vindo!!")
    console.log("Escolha a ação desejada")
    console.log("1. Cadastrar ferramenta")
    console.log("2. Consultar ferramenta (por código ou nome)")
    console.log("3. Atualizar quantidade em estoque")
    console.log("4. Remover ferramenta do estoque")
    console.log("5. Exibir o total do valor em estoque")
    console.log("6. Listar ferramentas por categoria (ex.: Elétricas, Manuais, etc.)")
    console.log("0. Encerrar o sistema")

    let cod = Number(prompt('Digite a opção desejada: '));

    switch (cod) {
        case 1:
            cadastrarFerramenta()
            break;

        case 2:
            consultarFerramenta()
            break;

        case 3:
            atualizarQuantidadeFerramenta()
            break;

        case 4:
            removerFerramenta()
            break;

        case 5:
            mostrarValorTotalEstoque()
            break;


        case 6:
            exibirFerramentasPorCategoria()
            break;

        case 0:
            resp = 0
            console.log(`saindo do programa`)
            break;
        default:
            console.log("ERRO: digite um valor valido")
            break;
    }

}

console.log('fim o programa')