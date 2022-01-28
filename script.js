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

function selef1(){
    selecionouComida = true;
    comida = "Frango Yin Yang";
    precoComida = " 14,90";
    valorComida = 14.90;


    document.getElementById("f1").classList.add("borda-verde");
    document.getElementById("f2").classList.remove("borda-verde");
    document.getElementById("f3").classList.remove("borda-verde");
    document.getElementById("f4").classList.remove("borda-verde");

    document.getElementById("icon-f1").classList.remove("icon-none");
    document.getElementById("icon-f2").classList.add("icon-none");
    document.getElementById("icon-f3").classList.add("icon-none");
    document.getElementById("icon-f4").classList.add("icon-none");

    revisarPedido();
}
function selef2(){
    selecionouComida = true;
    comida = "Frango Yin Yang";
    precoComida = " 15,90";
    valorComida = 15.90;

    document.getElementById("f1").classList.remove("borda-verde");
    document.getElementById("f2").classList.add("borda-verde");
    document.getElementById("f3").classList.remove("borda-verde");
    document.getElementById("f4").classList.remove("borda-verde");

    document.getElementById("icon-f1").classList.add("icon-none");
    document.getElementById("icon-f2").classList.remove("icon-none");
    document.getElementById("icon-f3").classList.add("icon-none");
    document.getElementById("icon-f4").classList.add("icon-none");

    revisarPedido();
}
function selef3(){
    selecionouComida = true;
    comida = "Frango Yin Yang";
    precoComida = " 16,90";
    valorComida = 16.90;

    document.getElementById("f1").classList.remove("borda-verde");
    document.getElementById("f2").classList.remove("borda-verde");
    document.getElementById("f3").classList.add("borda-verde");
    document.getElementById("f4").classList.remove("borda-verde");

    document.getElementById("icon-f1").classList.add("icon-none");
    document.getElementById("icon-f2").classList.add("icon-none");
    document.getElementById("icon-f3").classList.remove("icon-none");
    document.getElementById("icon-f4").classList.add("icon-none");
    
    revisarPedido();
}
function selef4(){
    selecionouComida = true;
    comida = "Frango Yin Yang";
    precoComida = " 17,90";
    valorComida = 17.90;

    document.getElementById("f1").classList.remove("borda-verde");
    document.getElementById("f2").classList.remove("borda-verde");
    document.getElementById("f3").classList.remove("borda-verde");
    document.getElementById("f4").classList.add("borda-verde");

    document.getElementById("icon-f1").classList.add("icon-none");
    document.getElementById("icon-f2").classList.add("icon-none");
    document.getElementById("icon-f3").classList.add("icon-none");
    document.getElementById("icon-f4").classList.remove("icon-none");
    
    revisarPedido();
}
function seleb1(){
    selecionouBebida = true;
    bebida = "Coquinha Gelada";
    precoBebida = " 4,90";
    valorBebida = 4.90;

    document.getElementById("b1").classList.add("borda-verde");
    document.getElementById("b2").classList.remove("borda-verde");
    document.getElementById("b3").classList.remove("borda-verde");
    document.getElementById("b4").classList.remove("borda-verde");

    document.getElementById("icon-b1").classList.remove("icon-none");
    document.getElementById("icon-b2").classList.add("icon-none");
    document.getElementById("icon-b3").classList.add("icon-none");
    document.getElementById("icon-b4").classList.add("icon-none");
    
    revisarPedido();
}
function seleb2(){
    selecionouBebida = true;
    bebida = "Coquinha Gelada";
    precoBebida = " 3,90";
    valorBebida = 3.90;

    document.getElementById("b1").classList.remove("borda-verde");
    document.getElementById("b2").classList.add("borda-verde");
    document.getElementById("b3").classList.remove("borda-verde");
    document.getElementById("b4").classList.remove("borda-verde");

    document.getElementById("icon-b1").classList.add("icon-none");
    document.getElementById("icon-b2").classList.remove("icon-none");
    document.getElementById("icon-b3").classList.add("icon-none");
    document.getElementById("icon-b4").classList.add("icon-none");
    
    revisarPedido();
}
function seleb3(){
    selecionouBebida = true;
    bebida = "Coquinha Gelada";
    precoBebida = " 5,90";
    valorBebida = 5.90;

    document.getElementById("b1").classList.remove("borda-verde");
    document.getElementById("b2").classList.remove("borda-verde");
    document.getElementById("b3").classList.add("borda-verde");
    document.getElementById("b4").classList.remove("borda-verde");

    document.getElementById("icon-b1").classList.add("icon-none");
    document.getElementById("icon-b2").classList.add("icon-none");
    document.getElementById("icon-b3").classList.remove("icon-none");
    document.getElementById("icon-b4").classList.add("icon-none");
    
    revisarPedido();
}
function seleb4(){
    selecionouBebida = true;
    bebida = "Coquinha Gelada";
    precoBebida = " 2,90";
    valorBebida = 2.90;

    document.getElementById("b1").classList.remove("borda-verde");
    document.getElementById("b2").classList.remove("borda-verde");
    document.getElementById("b3").classList.remove("borda-verde");
    document.getElementById("b4").classList.add("borda-verde");

    document.getElementById("icon-b1").classList.add("icon-none");
    document.getElementById("icon-b2").classList.add("icon-none");
    document.getElementById("icon-b3").classList.add("icon-none");
    document.getElementById("icon-b4").classList.remove("icon-none");
    
    revisarPedido();
}
function seles1(){
    selecionouSobremesa = true;
    sobremesa = "Pudim";
    precoSobremesa = " 7,90";
    valorSobremesa = 7.90;

    document.getElementById("s1").classList.add("borda-verde");
    document.getElementById("s2").classList.remove("borda-verde");
    document.getElementById("s3").classList.remove("borda-verde");
    document.getElementById("s4").classList.remove("borda-verde");

    document.getElementById("icon-s1").classList.remove("icon-none");
    document.getElementById("icon-s2").classList.add("icon-none");
    document.getElementById("icon-s3").classList.add("icon-none");
    document.getElementById("icon-s4").classList.add("icon-none");
    
    revisarPedido();
}
function seles2(){
    selecionouSobremesa = true;
    sobremesa = "Pudim";
    precoSobremesa = " 8,90";
    valorSobremesa = 8.90;

    document.getElementById("s1").classList.remove("borda-verde");
    document.getElementById("s2").classList.add("borda-verde");
    document.getElementById("s3").classList.remove("borda-verde");
    document.getElementById("s4").classList.remove("borda-verde");

    document.getElementById("icon-s1").classList.add("icon-none");
    document.getElementById("icon-s2").classList.remove("icon-none");
    document.getElementById("icon-s3").classList.add("icon-none");
    document.getElementById("icon-s4").classList.add("icon-none");
    
    revisarPedido();
}
function seles3(){
    selecionouSobremesa = true;
    sobremesa = "Pudim";
    precoSobremesa = " 9,90";
    valorSobremesa = 9.90;

    document.getElementById("s1").classList.remove("borda-verde");
    document.getElementById("s2").classList.remove("borda-verde");
    document.getElementById("s3").classList.add("borda-verde");
    document.getElementById("s4").classList.remove("borda-verde");

    document.getElementById("icon-s1").classList.add("icon-none");
    document.getElementById("icon-s2").classList.add("icon-none");
    document.getElementById("icon-s3").classList.remove("icon-none");
    document.getElementById("icon-s4").classList.add("icon-none");
    
    revisarPedido();
}
function seles4(){
    selecionouSobremesa = true;
    sobremesa = "Pudim";
    precoSobremesa = " 10,90";
    valorSobremesa = 10.90;

    document.getElementById("s1").classList.remove("borda-verde");
    document.getElementById("s2").classList.remove("borda-verde");
    document.getElementById("s3").classList.remove("borda-verde");
    document.getElementById("s4").classList.add("borda-verde");

    document.getElementById("icon-s1").classList.add("icon-none");
    document.getElementById("icon-s2").classList.add("icon-none");
    document.getElementById("icon-s3").classList.add("icon-none");
    document.getElementById("icon-s4").classList.remove("icon-none");

    revisarPedido();
}

function revisarPedido() {
    if (selecionouComida === true && selecionouBebida === true && selecionouSobremesa === true) {
        document.getElementById("pedido-aberto").classList.add("icon-none");
        document.getElementById("pedido-fechado").classList.remove("icon-none");
    }
}
function confirmarPedido(){
    let resultado = `R$ ${(valorComida+valorBebida+valorSobremesa).toFixed(2)}`;
    resultado = resultado.replace("." , ",");
    document.getElementById("confirmar-pedido").classList.remove("icon-none");
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
    // let mensagem = "Olá, gostaria de fazer o pedido:\n- Prato: " + comida + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\nTotal: " + resultado + "\n \nNome: " + nomeCliente + "\nEndereço: " + enderecoCliente;
    // let mensage = encodeURIComponent(mensagem);
    let mensage = `Olá!`;

    const url = "https://wa.me/5521999999999?text=" + mensage;
    window.open(url);
}
function cancelar(){
    document.getElementById("confirmar-pedido").classList.add("icon-none");
}