const prompt = require('prompt-sync')();

const obterCodigoMenuOpcoes = () => {
    return Number(prompt('Digite a opção desejada: '));
}

module.exports = {
    obterCodigoMenuOpcoes
}
