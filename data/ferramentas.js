let idContador = 0
const ferramentas = [];

const incrementarIdFerramentas = () => {
    return idContador++
}

module.exports = {
    incrementarIdFerramentas,
    ferramentas
}
