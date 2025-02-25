const prompt = require('prompt-sync')();
const { ferramentas } = require('../data/ferramentas');
const {
    verificarSeTemNumeros,
    verificarQuantidadeCaracteres,
    verificarCampoNulo,
    verificarSeTemLetras,
    verificarValorPositivo,
    verificarCaractereEspecialGeral,
    verificarCaractereEspecialPreco,
    verificarEspacoComecoFinalString,
    verificarSeFerramentaJaTemCadastro
} = require('../utils/validacoes');

const obterNomeDoUsuario = () => {
    const usuario = prompt("qual o seu nome? ")
    return usuario
}

const obterCodigoMenuOpcoes = () => {
    return Number(prompt('Digite a opção desejada: '));
}

const entradasDeCadastrarFerramenta = () => {
    const nome = prompt('Qual o nome da ferramenta que deseja cadastrar? ').toLowerCase();
    console.log('NOME => ' + nome);

    if (verificarCampoNulo(nome) === null) return null;
    if (verificarSeTemNumeros(nome) === null) return null;
    if (verificarQuantidadeCaracteres(nome, 2, 50) === null) return null;
    if (verificarCaractereEspecialGeral(nome) === null) return null;
    if (verificarEspacoComecoFinalString(nome) === null) return null;

    if (verificarSeFerramentaJaTemCadastro(nome) === false) return null
    
    const categoria = prompt('Qual o a categoria da ferramenta que deseja cadastrar? ');

    if (verificarCampoNulo(categoria) === null) return null;
    if (verificarSeTemNumeros(categoria) === null) return null;
    if (verificarQuantidadeCaracteres(categoria, 5, 50) === null) return null;
    if (verificarCaractereEspecialGeral(categoria) === null) return null;
    if (verificarEspacoComecoFinalString(categoria) === null) return null;


    let p_unidade = prompt('Preço de uma unidade: ').replace(',', '.');

    if (verificarCampoNulo(p_unidade) === null) return null;
    if (verificarSeTemLetras(p_unidade) === null) return null;
    if (verificarCaractereEspecialPreco(p_unidade) === null) return null;
    if (verificarValorPositivo(p_unidade) === null) return null;
    if (verificarEspacoComecoFinalString(p_unidade) === null) return null;

    let qtd_total = prompt('Qual a quantidade que deseja cadastrar? ');

    if (verificarCampoNulo(qtd_total) === null) return null;
    if (verificarSeTemLetras(qtd_total) === null) return null;
    if (verificarCaractereEspecialGeral(qtd_total) === null) return null;
    if (verificarValorPositivo(qtd_total) === null) return null;
    if (verificarEspacoComecoFinalString(qtd_total) === null) return null;

    p_unidade = Number(p_unidade);
    qtd_total = Number(qtd_total);

    return { nome, categoria, p_unidade, qtd_total }
}

module.exports = {
    obterNomeDoUsuario,
    obterCodigoMenuOpcoes,
    entradasDeCadastrarFerramenta
}
