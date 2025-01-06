// validações
/* 
    se o NOME digitado ja existe no array FERRAMENTAS 
    se tiver espaço antes e no final, retirar de NOME, CATEGORIA
    trocar , por .
    só numero inteiro em QTDD
 */

const verificarCampoNulo = (string) => { 
    if (string === '') {
        console.log('Campo vazio');
        return null;
    }
 }



const verificarQuantidadeCaracteres = (string, min, max) => {
    if (string.length < min) {
        console.log('Quantidade de caracteres insuficiente')
        return null
    }

    if (string.length > max) {
        console.log('Quantidade de caracteres excede o limite')
        return null
    }
}

const verificarSeTemNumeros = (string) => {
    if (/\d/.test(string)) {
        console.log('Esse campo não pode ter número')
        return null
    }
}
const verificarSeTemLetras = (p_unidade, qtd_total) => { }
const verificarSeTemCaractereEspecial = (em_todos_atributos) => { }
const verificarValorPositivo = () => { }

module.exports = {
    verificarSeTemNumeros,
    verificarQuantidadeCaracteres,
    verificarCampoNulo
}