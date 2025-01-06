const menu = (nome) => {

    console.log("---------------------------------");
    console.log("Seja bem-vindo(a) " + nome + " !!");
    console.log("1. Cadastrar ferramenta");
    console.log("2. Consultar ferramenta");
    console.log("3. Atualizar quantidade em estoque");
    console.log("4. Remover ferramenta do estoque");
    console.log("5. Exibir o total do valor em estoque");
    console.log("6. Listar ferramentas por categoria");
    console.log("0. Encerrar o sistema");
    console.log("---------------------------------");
    console.log();
};

module.exports = menu;