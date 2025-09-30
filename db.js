const formCliente = document.getElementById("form-cliente");

formCliente.addEventListener("submit", async (event) => {
    event.preventDefault();

    const dados = pegarDadosCliente();
    console.log(dados)
})

function pegarDadosCliente(){
    let cliente = new Object();
    cliente.nome = document.getElementById("nome").value
    cliente.cpf = document.getElementById("cpf").value
    cliente.email = document.getElementById("email").value
    cliente.telefone = document.getElementById("telefone").value
    cliente.cep = document.getElementById("cep").value
    cliente.rua = document.getElementById("rua").value
    cliente.n_casa = document.getElementById("numero").value
    cliente.bairro = document.getElementById("bairro").value
    cliente.cidade = document.getElementById("cidade").value
    cliente.uf = document.getElementById("uf").value
    cliente.senha = document.getElementById("senha").value
    return cliente
}