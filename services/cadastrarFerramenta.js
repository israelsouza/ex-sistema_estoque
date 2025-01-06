const mostrarMensagemDeSucesso = require('../utils/mensagemDeSucesso');
const congelarELimparConsole = require('../utils/congelarELimparConsole')
const { entradasDeCadastrarFerramenta } = require('../utils/prompt');
const { ferramentas, incrementarIdFerramentas } = require('../data/ferramentas');


async function cadastrarFerramenta() {
    console.clear();

    const entradas = entradasDeCadastrarFerramenta()

    if ( entradas === null ) {
        await congelarELimparConsole(1000);
        console.log('EERO: voltando ao menu inicial.');
        await congelarELimparConsole(1500);
        return;
    }

    const { nome, categoria, p_unidade, qtd_total } = entradasDeCadastrarFerramenta;

    const obj = new Object();
    obj.id = incrementarIdFerramentas();
    obj.nome = nome;
    obj.categoria = categoria;
    obj.p_unidade = p_unidade;
    obj.qtd_total = qtd_total;

    ferramentas.push(obj);

    console.log();
    console.log("Processando...");

    await mostrarMensagemDeSucesso('Ferramenta cadastrada com sucesso'); 
    await congelarELimparConsole(1000);
}

module.exports = cadastrarFerramenta;
