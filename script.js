
let carrinho = [];
let total = 0;

/* ===============================
   ADICIONAR PRODUTO
   =============================== */
function adicionar(nome, preco){

  let item = carrinho.find(produto => produto.nome === nome);

  if(item){
    item.quantidade++;
  }else{
    carrinho.push({
      nome: nome,
      preco: preco,
      quantidade: 1
    });
  }

  atualizarCarrinho();
}

/* ===============================
   REMOVER PRODUTO
   =============================== */
function remover(nome){
  carrinho = carrinho.filter(produto => produto.nome !== nome);
  atualizarCarrinho();
}

/* ===============================
   ATUALIZAR CARRINHO
   =============================== */
function atualizarCarrinho(){

  let lista = document.getElementById("lista-carrinho");
  let totalSpan = document.getElementById("total");
  let topo = document.getElementById("carrinho-total");

  lista.innerHTML = "";
  total = 0;

  carrinho.forEach(produto => {

    total += produto.preco * produto.quantidade;

    let li = document.createElement("li");

    li.innerHTML = `
      <div class="item-carrinho">
        <span>${produto.nome}</span>
        <span>R$ ${produto.preco.toFixed(2)} x ${produto.quantidade}</span>
        <button onclick="remover('${produto.nome}')">Remover</button>
      </div>
    `;

    lista.appendChild(li);

  });

  totalSpan.innerText = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  if(topo){
    topo.innerText = "Carrinho: " + total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }
}

/* ===============================
   FINALIZAR COMPRA WHATSAPP
   =============================== */
function finalizarCompra(){

  if(carrinho.length === 0){
    alert("Seu carrinho está vazio.");
    return;
  }

  let mensagem = "Olá! Quero comprar:%0A%0A";

  carrinho.forEach(produto => {
    mensagem += `• ${produto.nome} x${produto.quantidade}%0A`;
  });

  mensagem += `%0A💰 Total: ${total.toLocaleString("pt-BR", {
    style:"currency",
    currency:"BRL"
  })}`;

  let numero = "5551986110242";

  let url = `https://wa.me/${numero}?text=${mensagem}`;

  window.open(url, "_blank");
}

/* ===============================
   ANIMAÇÃO AVIÃO
   =============================== */
document.addEventListener("DOMContentLoaded", () => {

  const aviao = document.getElementById("aviao");
  const mensagem = document.getElementById("mensagem");

  if(aviao && mensagem){
    aviao.addEventListener("animationend", () => {
      aviao.style.display = "none";
      mensagem.style.display = "inline";
    });
  }

});

/* ===============================
   ANIMAÇÃO CORAÇÃO
   =============================== */
document.addEventListener("DOMContentLoaded", () => {

  const coracao = document.getElementById("coracao");
  const texto = document.getElementById("texto-marca");

  if(coracao && texto){
    coracao.addEventListener("animationend", () => {
      coracao.style.display = "none";
      texto.style.display = "block";
    });
  }

});

