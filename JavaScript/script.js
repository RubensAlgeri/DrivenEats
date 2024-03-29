let selecionouComida = false;
let selecionouBebida = false;
let selecionouSobremesa = false;
let comida = '';
let bebida = '';
let sobremesa = '';
let precoComida = '';
let precoBebida = '';
let precoSobremesa = '';
let valorComida = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let total = '';

function selecionarComida(botao, classeOpcao, classeIcone, classeNomeOpcao, classePreco){
    selecionouComida = true;
    comida = document.querySelector(`.${classeOpcao} .${classeNomeOpcao}`).innerText;
    precoComida = document.querySelector(`.${classeOpcao} .${classePreco}`).innerText.replace("R$","");
    let precoComida2 = precoComida.replace(",",".");
    valorComida = parseFloat(precoComida2);

    deselecionarOpcao(classeOpcao);

    document.querySelector('.' + classeIcone).classList.remove("icon-none");
    botao.classList.add("borda-verde");
    
    revisarPedido();
}

function selecionarBebida(botao, classeOpcao, classeIcone, classeNomeOpcao, classePreco){
    selecionouBebida = true;
    bebida = document.querySelector(`.${classeOpcao} .${classeNomeOpcao}`).innerText;
    precoBebida = document.querySelector(`.${classeOpcao} .${classePreco}`).innerText.replace("R$","");
    let precoBebida2 = precoBebida.replace(",",".");
    valorBebida = parseFloat(precoBebida2);

    deselecionarOpcao(classeOpcao);

    document.querySelector('.' + classeIcone).classList.remove("icon-none");
    botao.classList.add("borda-verde");

    revisarPedido();
}

function selecionarSobremesa(botao, classeOpcao, classeIcone, classeNomeOpcao, classePreco){
    selecionouSobremesa = true;
    sobremesa = document.querySelector(`.${classeOpcao} .${classeNomeOpcao}`).innerText;
    precoSobremesa = document.querySelector(`.${classeOpcao} .${classePreco}`).innerText.replace("R$","");
    let precoSobremesa2 = precoSobremesa.replace(",",".");
    valorSobremesa = parseFloat(precoSobremesa2);

    deselecionarOpcao(classeOpcao);
    
    document.querySelector('.' + classeIcone).classList.remove("icon-none");
    botao.classList.add("borda-verde");

    revisarPedido();
}
function deselecionarOpcao(classeOpcao){
    const selecionado = document.querySelector(`.${classeOpcao}.borda-verde`);
    if (selecionado !== null) {
        selecionado.classList.remove("borda-verde");
    }
    const selec = document.querySelector(`.${classeOpcao} .icone:not(.icon-none)`);
    if (selec !== null) {
        selec.classList.add("icon-none");
    }
}

function revisarPedido() {
    if (selecionouComida === true && selecionouBebida === true && selecionouSobremesa === true) {
        document.querySelector(".aberto").classList.add("icon-none");
        document.querySelector(".fechado").classList.remove("icon-none");
    }
}
function confirmarPedido(){
    total = `R$ ${(valorComida+valorBebida+valorSobremesa).toFixed(2)}`;
    let resultado = total.replace("." , ",");
    document.querySelector(".fundo-apagado").classList.remove("icon-none");
    document.querySelector("strong.nome-comida").innerHTML = comida;
    document.querySelector("strong.preco-comida").innerHTML = precoComida;
    document.querySelector("strong.nome-bebida").innerHTML = bebida;
    document.querySelector("strong.preco-bebida").innerHTML = precoBebida;
    document.querySelector("strong.nome-sobremesa").innerHTML = sobremesa;
    document.querySelector("strong.preco-sobremesa").innerHTML =precoSobremesa;
    document.querySelector("p.preco-total").innerHTML = resultado;
}
function finalizarPedido() {
    let nomeCliente = prompt("Seu Nome por favor.");
    let enderecoCliente = prompt("Seu endereço por favor.");

    let mensagem =
    `Olá, gostaria de fazer o pedido:
    - Prato: ${comida}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: ${total}
    
    Nome: ${nomeCliente}
    Endereço: ${enderecoCliente}`;

    let url = "https://wa.me/5521999999999?text=" + encodeURIComponent(mensagem);

    window.open(url);
}
function cancelar(){
    document.querySelector(".fundo-apagado").classList.add("icon-none");
}