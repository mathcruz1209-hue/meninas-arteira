let carrinho = [];
let total = 0;

function adicionar(nome, preco) {
  let item = carrinho.find(p => p.nome === nome);
  if (item) {
    item.quantidade++;
  } else {
    carrinho.push({ nome, preco, quantidade: 1 });
  }
  
  atualizarCarrinho();
}

function remover(nome) {
  carrinho = carrinho.filter(p => p.nome !== nome);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  let lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";
  total = 0;

  carrinho.forEach(p => {
    total += p.preco * p.quantidade;
    let li = document.createElement("li");
    li.innerHTML = `${p.nome} - R$${p.preco} x ${p.quantidade} 
      <button onclick="remover('${p.nome}')">Remover</button>`;
    lista.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}
document.addEventListener("DOMContentLoaded", () => {
  const aviao = document.getElementById("aviao");
  const mensagem = document.getElementById("mensagem");

  // Quando a animação terminar, mostra a mensagem
  aviao.addEventListener("animationend", () => {
    aviao.style.display = "none";
    mensagem.style.display = "inline";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const coracao = document.getElementById("coracao");
  const texto = document.getElementById("texto-marca");

  coracao.addEventListener("animationend", () => {
    coracao.style.display = "none";
    texto.style.display = "block";
  });
});
total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })


function finalizarCompra() {
  let mensagem = "Olá! Quero compra:\n";
   
   carrinho.forEach(p => {
    mensagem += `-${p.nome} x${p.quantidade}\n`;
   });
   mensagem += `\nTotal: R${total.toFixed(2)}`;

   let url = `<a href="https://wa.me/qr/QC6KOVJTEZHFA1"target="_blank">?text=${encodeURIComponent(mensagem)}`;
}

