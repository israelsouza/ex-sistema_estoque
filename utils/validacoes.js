// validações
/* 
    se tiver espaço antes e no final, retirar de NOME, CATEGORIA

 */

const verificarCampoNulo = (string) => {
    if (string === '') {
        console.log('Campo vazio');
        return null;
    }
}

const verificarEspacoComecoFinalString = (string) => {
    if (string.match(/( )/d)) {
        console.log("Não pode ter espaço no começo ou fim desse campo");
        return null
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
        console.log('Esse campo não pode ter número');
        return null;
    }
}

const verificarSeTemLetras = (numero) => {
    if (/[a-zA-Z]/.test(numero)) {
        console.log('Esse campo não pode ter letras');
        return null;
    }
}

const verificarCaractereEspecial = (valor, regex) => { 
    if (regex.test(valor)) {
        console.log('Esse campo não pode ter caracter especial');
        return null;
    }
}

const verificarCaractereEspecialGeral = (valor) => {
    const regex = /[!@;:#\$%\^\&*\)\(+=.,_]/;
    return verificarCaractereEspecial(valor, regex)
}

const verificarCaractereEspecialPreco = (valor) => { 
    const regex = /[!@;:#\$%\^\&*\)\(+=_,]/;
    return verificarCaractereEspecial(valor, regex)
}

const verificarValorPositivo = (valor) => { 
    if ( valor <= 0 ) {
        console.log("Esse campo não pode ter numero menor que 0");
        return null;
    }
 }

module.exports = {
    verificarSeTemNumeros,
    verificarQuantidadeCaracteres,
    verificarCampoNulo,
    verificarSeTemLetras,
    verificarValorPositivo,
    verificarCaractereEspecialGeral,
    verificarCaractereEspecialPreco,
    verificarEspacoComecoFinalString
}