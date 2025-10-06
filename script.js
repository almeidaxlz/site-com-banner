// Controle de navegação entre as páginas
function mostrarPagina(id) {
  document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
}

// Carrinho
let carrinho = [];

function adicionarCarrinho(produto) {
  carrinho.push(produto);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  lista.innerHTML = '';

  if (carrinho.length === 0) {
    lista.innerHTML = "<li>Seu carrinho está vazio.</li>";
  } else {
    carrinho.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      lista.appendChild(li);
    });
  }
}

function esvaziarCarrinho() {
  carrinho = [];
  atualizarCarrinho();
}

// Chama a função ao carregar a página
window.onload = atualizarCarrinho;
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
