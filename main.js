const prompt = require('prompt-sync')();

/* 
    - cadastrar, 
    - consultar,
    - atualizar e remover itens do estoque,
    - bem como calcular valor total do estoque 
    - listar ferramentas por categorias.
*/



var resp = 7
var ferramentas = []

var idContador = 0


const numeroInvalido = 'ERRO: o número digitado é menor ou maior que o número permitido, tente novamente'

function validarNumeroDigitado(number) {
    if (number < 0 || number > ferramentas.length - 1) return true
    else return false
}

function cadastrarFerramenta() {
    console.clear()

    nome = prompt('Qual o nome da ferramenta que deseja cadastrar? ')
    categoria = prompt('Qual o a categoria da ferramenta que deseja cadastrar? ')
    p_unidade = Number(prompt('Preço de uma unidade: '))
    qtd_total = Number(prompt('Qual a quantidade que deseja cadastrar? '))

    var obj = new Object()
    obj.id = idContador++
    obj.nome = nome
    obj.categoria = categoria
    obj.p_unidade = p_unidade
    obj.qtd_total = qtd_total

    ferramentas.push(obj)

    console.log("Ferramenta cadastrada com sucesso!")


}

function consultarFerramenta() {
    for (let i = 0; i < ferramentas.length; i++) {
        console.log(ferramentas[i].nome + ". código: " + i)
    }

    console.log()
    let consulta = Number(prompt('Qual o código da ferramenta que deseja consultar? '))
    console.log()

    if (validarNumeroDigitado(consulta) == true) {
        console.log(numeroInvalido)
    } else {
        for (let i = consulta; i < ferramentas.length; i++) {
            console.log(ferramentas[i])
            break
        }
    }
}

function atualizarQuantidadeFerramenta() {
    console.log("É sempre bom ter mais ferramentas em estoque!\nEssas são as quantidades atuais")
    console.log()

    for (let i = 0; i < ferramentas.length; i++) {
        console.log(ferramentas[i].nome + " --- quantidade: " + ferramentas[i].qtd_total + " --- código: " + i)
    }

    console.log()
    let codigo = Number(prompt('Insira o código da ferramenta que fez a compra  '))
    let novaQtdd = Number(prompt('Quantas unidades dessa ferramenta você comprou? '))

    ferramentas[codigo].qtd_total = ferramentas[codigo].qtd_total + novaQtdd

    console.log()
    console.log("Quantidade atualizada!!")
    console.log("Quantidade atual: " + ferramentas[codigo].qtd_total)
}

function removerFerramenta() {
    for (let i = 0; i < ferramentas.length; i++) {
        console.log(ferramentas[i].nome + " \t\t código: " + i)
    }

    let cod = Number(prompt("qual o código da ferramenta que deseja excluir? "))

    ferramentas.splice(cod, 1)

    console.log()
    console.log("Lista atualizada!")
    console.log()

    for (let i = 0; i < ferramentas.length; i++) {
        console.log(ferramentas[i].nome + " \t\t código: " + i)
    }

    console.log(ferramentas)
}

function exibirFerramentasPorCategoria() {
    console.clear()

    var ObjetoTodasAsCategorias = {}

    for (let i = 0; i < ferramentas.length; i++) {

        if (!ObjetoTodasAsCategorias[ferramentas[i].categoria]) {
            ObjetoTodasAsCategorias[ferramentas[i].categoria] = []
        }

        ObjetoTodasAsCategorias[ferramentas[i].categoria].push(ferramentas[i])
    }

    for (const key in ObjetoTodasAsCategorias) {
        console.log()
        console.log()
        console.log(`Categoria: ${key}`);
        console.log()

        ObjetoTodasAsCategorias[key].forEach(ferramenta => {
            const { nome, id } = ferramenta;
            console.log(`id: ${id} \t nome: ${nome}`);
        });
    }

}

const usuario = prompt("qual o seu nome? ")


while (resp > 0) {
    console.log()
    console.log("---------------------------------")
    console.log("Seja bem-vindo(a) " + usuario + " !!")
    console.log("1. Cadastrar ferramenta")
    console.log("2. Consultar ferramenta")
    console.log("3. Atualizar quantidade em estoque")
    console.log("4. Remover ferramenta do estoque")
    console.log("5. Exibir o total do valor em estoque")
    console.log("6. Listar ferramentas por categoria")
    console.log("0. Encerrar o sistema")
    console.log("---------------------------------")
    console.log()

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