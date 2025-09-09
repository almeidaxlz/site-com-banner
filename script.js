// ano no rodapé
document.querySelectorAll("#ano").forEach(el => el.textContent = new Date().getFullYear());

// --- Carrinho com localStorage ---
function adicionarCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(produto + " foi adicionado ao carrinho!");
}

function carregarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  if (!lista) return;

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  if (carrinho.length === 0) {
    lista.innerHTML = "<li>Seu carrinho está vazio.</li>";
  } else {
    lista.innerHTML = carrinho.map(item => `<li>${item}</li>`).join("");
  }
}

function limparCarrinho() {
  localStorage.removeItem("carrinho");
  carregarCarrinho();
}

// chamar no carrinho
window.onload = carregarCarrinho;
