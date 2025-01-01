// coloquei RESPOSTA, mas o nome padrão é RESOLVE 

const pausarProgramaPorDoisSegundos = () => {
    return new Promise(resposta => setTimeout(resposta, 2000));
};

module.exports = pausarProgramaPorDoisSegundos;