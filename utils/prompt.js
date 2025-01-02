const prompt = require('prompt-sync')();

const obterNomeDoUsuario = () => {
    const usuario = prompt("qual o seu nome? ")
    return usuario
}

const obterCodigoMenuOpcoes = () => {
    return Number(prompt('Digite a opção desejada: '));
}

const entradasDeCadastrarFerramenta = () => {
    // validações
    /*  se tem numeros em NOME, CATEGORIA
        se tem caracter especial (!@#...) em NOME, CATEGORIA
        se o NOME digitado ja existe no array FERRAMENTAS 
        se tiver espaço antes e no final, retirar de NOME, CATEGORIA
        comprimento minimo e maximo de caracteres
        se campo é nulo, nao tem nada

        se tem letras em P_UNDD, QTDD
        se tem caracter especial (!@#...) em P_UNDD, QTDDD
        trocar , por .
        só numero inteiro em QTDD
        se são valores positivos (maior que 0) 
     */

    const nome = prompt('Qual o nome da ferramenta que deseja cadastrar? ')
    const categoria = prompt('Qual o a categoria da ferramenta que deseja cadastrar? ')
    let p_unidade = Number(prompt('Preço de uma unidade: '))
    let qtd_total = Number(prompt('Qual a quantidade que deseja cadastrar? '))

    return { nome, categoria, p_unidade, qtd_total }
}

module.exports = {
    obterNomeDoUsuario,
    obterCodigoMenuOpcoes,
    entradasDeCadastrarFerramenta
}
