// script.js

let carrinho = [];
let total = 0;

function adicionar(nome, preco){

let item = carrinho.find(produto => produto.nome === nome);

if(item){
item.quantidade++;
}else{
carrinho.push({
nome:nome,
preco:preco,
quantidade:1
});
}

atualizarCarrinho();
}

function remover(nome){

carrinho = carrinho.filter(produto => produto.nome !== nome);

atualizarCarrinho();
}

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
<span>${produto.nome} x${produto.quantidade}</span>
<button onclick="remover('${produto.nome}')">Remover</button>
`;

lista.appendChild(li);

});

totalSpan.innerText = total.toLocaleString("pt-BR",{
style:"currency",
currency:"BRL"
});

topo.innerText = "🛒 Carrinho: " + total.toLocaleString("pt-BR",{
style:"currency",
currency:"BRL"
});
}

function finalizarCompra(){

if(carrinho.length === 0){
alert("Seu carrinho está vazio.");
return;
}

let mensagem = "Olá! Quero comprar:%0A%0A";

carrinho.forEach(produto => {
mensagem += `• ${produto.nome} x${produto.quantidade}%0A`;
});

mensagem += `%0A💰 Total: ${total.toLocaleString("pt-BR",{
style:"currency",
currency:"BRL"
})}`;

let numero = "5551986110242";

let url = `https://wa.me/${numero}?text=${mensagem}`;

window.open(url,"_blank");
}
