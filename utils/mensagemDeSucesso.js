function mostrarMensagemDeSucesso(mensagem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log(mensagem);
        }, 2000)
    });

}

module.exports = mostrarMensagemDeSucesso;