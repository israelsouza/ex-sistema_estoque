const sleep = require('../utils/sleep')

async function cadastrarFerramenta() {
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

    await sleep();
}