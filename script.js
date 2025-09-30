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
