const prompt = require('prompt-sync')();
const {
    verificarSeTemNumeros,
    verificarQuantidadeCaracteres,
    verificarCampoNulo
} = require('../utils/validacoes');

const obterNomeDoUsuario = () => {
    const usuario = prompt("qual o seu nome? ")
    return usuario
}

const obterCodigoMenuOpcoes = () => {
    return Number(prompt('Digite a opção desejada: '));
}

const entradasDeCadastrarFerramenta = () => {
    const nome = prompt('Qual o nome da ferramenta que deseja cadastrar? ');

    if (verificarCampoNulo(nome) === null) return null;
    if (verificarSeTemNumeros(nome) === null) return null;
    if (verificarQuantidadeCaracteres(nome, 2, 50) === null) return null;
    
    const categoria = prompt('Qual o a categoria da ferramenta que deseja cadastrar? ');
    
    if (verificarCampoNulo(categoria) === null) return null;
    if (verificarSeTemNumeros(categoria) === null) return null;
    if (verificarQuantidadeCaracteres(categoria, 5, 50) === null) return null;
    
    
    let p_unidade = Number(prompt('Preço de uma unidade: '));

    if (verificarCampoNulo(categoria) === null) return null;

    let qtd_total = Number(prompt('Qual a quantidade que deseja cadastrar? '));

    if (verificarCampoNulo(categoria) === null) return null;

    return { nome, categoria, p_unidade, qtd_total }
}

module.exports = {
    obterNomeDoUsuario,
    obterCodigoMenuOpcoes,
    entradasDeCadastrarFerramenta
}
