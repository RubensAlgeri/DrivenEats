let selecionouComida = false;
let selecionouBebida = false;
let selecionouSobremesa = false;
let comida = '';
let bebida = '';
let sobremesa = '';
let precoComida = 0;
let precoBebida = 0;
let precoSobremesa = 0;


function selef1(){
    selecionouComida = true;
    comida = document.querySelector("p.nome-opcao");
    precoComida = document.querySelector("span");

    document.getElementById("f1").classList.add("borda-verde");
    document.getElementById("f2").classList.remove("borda-verde");
    document.getElementById("f3").classList.remove("borda-verde");
    document.getElementById("f4").classList.remove("borda-verde");

    document.getElementById("icon-f1").classList.remove("icon-none");
    document.getElementById("icon-f2").classList.add("icon-none");
    document.getElementById("icon-f3").classList.add("icon-none");
    document.getElementById("icon-f4").classList.add("icon-none");

    finalizarPedido();
}
function selef2(){
    selecionouComida = true;
    comida = document.querySelector("p.nome-opcao");
    precoComida = document.querySelector("span");

    document.getElementById("f1").classList.remove("borda-verde");
    document.getElementById("f2").classList.add("borda-verde");
    document.getElementById("f3").classList.remove("borda-verde");
    document.getElementById("f4").classList.remove("borda-verde");

    document.getElementById("icon-f1").classList.add("icon-none");
    document.getElementById("icon-f2").classList.remove("icon-none");
    document.getElementById("icon-f3").classList.add("icon-none");
    document.getElementById("icon-f4").classList.add("icon-none");

    finalizarPedido();
}
function selef3(){
    selecionouComida = true;
    comida = document.querySelector("p.nome-opcao");
    precoComida = document.querySelector("span");

    document.getElementById("f1").classList.remove("borda-verde");
    document.getElementById("f2").classList.remove("borda-verde");
    document.getElementById("f3").classList.add("borda-verde");
    document.getElementById("f4").classList.remove("borda-verde");

    document.getElementById("icon-f1").classList.add("icon-none");
    document.getElementById("icon-f2").classList.add("icon-none");
    document.getElementById("icon-f3").classList.remove("icon-none");
    document.getElementById("icon-f4").classList.add("icon-none");
    
    finalizarPedido();
}
function selef4(){
    selecionouComida = true;
    comida = document.querySelector("p.nome-opcao");
    precoComida = document.querySelector("span");

    document.getElementById("f1").classList.remove("borda-verde");
    document.getElementById("f2").classList.remove("borda-verde");
    document.getElementById("f3").classList.remove("borda-verde");
    document.getElementById("f4").classList.add("borda-verde");

    document.getElementById("icon-f1").classList.add("icon-none");
    document.getElementById("icon-f2").classList.add("icon-none");
    document.getElementById("icon-f3").classList.add("icon-none");
    document.getElementById("icon-f4").classList.remove("icon-none");
    
    finalizarPedido();
}
function seleb1(){
    selecionouBebida = true;
    bebida = document.querySelector("p.nome-opcao");
    precoBebida = document.querySelector("span");

    document.getElementById("b1").classList.add("borda-verde");
    document.getElementById("b2").classList.remove("borda-verde");
    document.getElementById("b3").classList.remove("borda-verde");
    document.getElementById("b4").classList.remove("borda-verde");

    document.getElementById("icon-b1").classList.remove("icon-none");
    document.getElementById("icon-b2").classList.add("icon-none");
    document.getElementById("icon-b3").classList.add("icon-none");
    document.getElementById("icon-b4").classList.add("icon-none");
    
    finalizarPedido();
}
function seleb2(){
    selecionouBebida = true;
    bebida = document.querySelector("p.nome-opcao");
    precoBebida = document.querySelector("span");

    document.getElementById("b1").classList.remove("borda-verde");
    document.getElementById("b2").classList.add("borda-verde");
    document.getElementById("b3").classList.remove("borda-verde");
    document.getElementById("b4").classList.remove("borda-verde");

    document.getElementById("icon-b1").classList.add("icon-none");
    document.getElementById("icon-b2").classList.remove("icon-none");
    document.getElementById("icon-b3").classList.add("icon-none");
    document.getElementById("icon-b4").classList.add("icon-none");
    
    finalizarPedido();
}
function seleb3(){
    selecionouBebida = true;
    bebida = document.querySelector("p.nome-opcao");
    precoBebida = document.querySelector("span");

    document.getElementById("b1").classList.remove("borda-verde");
    document.getElementById("b2").classList.remove("borda-verde");
    document.getElementById("b3").classList.add("borda-verde");
    document.getElementById("b4").classList.remove("borda-verde");

    document.getElementById("icon-b1").classList.add("icon-none");
    document.getElementById("icon-b2").classList.add("icon-none");
    document.getElementById("icon-b3").classList.remove("icon-none");
    document.getElementById("icon-b4").classList.add("icon-none");
    
    finalizarPedido();
}
function seleb4(){
    selecionouBebida = true;
    bebida = document.querySelector("p.nome-opcao");
    precoBebida = document.querySelector("span");

    document.getElementById("b1").classList.remove("borda-verde");
    document.getElementById("b2").classList.remove("borda-verde");
    document.getElementById("b3").classList.remove("borda-verde");
    document.getElementById("b4").classList.add("borda-verde");

    document.getElementById("icon-b1").classList.add("icon-none");
    document.getElementById("icon-b2").classList.add("icon-none");
    document.getElementById("icon-b3").classList.add("icon-none");
    document.getElementById("icon-b4").classList.remove("icon-none");
    
    finalizarPedido();
}
function seles1(){
    selecionouSobremesa = true;
    sobremesa = document.querySelector("p.nome-opcao");
    precoSobremesa = document.querySelector("span");

    document.getElementById("s1").classList.add("borda-verde");
    document.getElementById("s2").classList.remove("borda-verde");
    document.getElementById("s3").classList.remove("borda-verde");
    document.getElementById("s4").classList.remove("borda-verde");

    document.getElementById("icon-s1").classList.remove("icon-none");
    document.getElementById("icon-s2").classList.add("icon-none");
    document.getElementById("icon-s3").classList.add("icon-none");
    document.getElementById("icon-s4").classList.add("icon-none");
    
    finalizarPedido();
}
function seles2(){
    selecionouSobremesa = true;
    sobremesa = document.querySelector("p.nome-opcao");
    precoSobremesa = document.querySelector("span");

    document.getElementById("s1").classList.remove("borda-verde");
    document.getElementById("s2").classList.add("borda-verde");
    document.getElementById("s3").classList.remove("borda-verde");
    document.getElementById("s4").classList.remove("borda-verde");

    document.getElementById("icon-s1").classList.add("icon-none");
    document.getElementById("icon-s2").classList.remove("icon-none");
    document.getElementById("icon-s3").classList.add("icon-none");
    document.getElementById("icon-s4").classList.add("icon-none");
    
    finalizarPedido();
}
function seles3(){
    selecionouSobremesa = true;
    sobremesa = document.querySelector("p.nome-opcao");
    precoSobremesa = document.querySelector("span");

    document.getElementById("s1").classList.remove("borda-verde");
    document.getElementById("s2").classList.remove("borda-verde");
    document.getElementById("s3").classList.add("borda-verde");
    document.getElementById("s4").classList.remove("borda-verde");

    document.getElementById("icon-s1").classList.add("icon-none");
    document.getElementById("icon-s2").classList.add("icon-none");
    document.getElementById("icon-s3").classList.remove("icon-none");
    document.getElementById("icon-s4").classList.add("icon-none");
    
    finalizarPedido();
}
function seles4(){
    selecionouSobremesa = true;
    sobremesa = document.querySelector("p.nome-opcao");
    precoSobremesa = document.querySelector("span");

    document.getElementById("s1").classList.remove("borda-verde");
    document.getElementById("s2").classList.remove("borda-verde");
    document.getElementById("s3").classList.remove("borda-verde");
    document.getElementById("s4").classList.add("borda-verde");

    document.getElementById("icon-s1").classList.add("icon-none");
    document.getElementById("icon-s2").classList.add("icon-none");
    document.getElementById("icon-s3").classList.add("icon-none");
    document.getElementById("icon-s4").classList.remove("icon-none");

    finalizarPedido();
}

function finalizarPedido() {
    if (selecionouComida === true && selecionouBebida === true && selecionouSobremesa === true) {
        document.getElementById("pedido-aberto").classList.add("icon-none");
        document.getElementById("pedido-fechado").classList.remove("icon-none");
    }
}
function confirmarPedido(){
    document.getElementById("pagina").classList.remove("icon-none");
    document.querySelector("strong").innerHTML = "comida + precoComida";
    document.querySelector("em").innerHTML = "bebida + precoBebida";
    document.querySelector("h4").innerHTML = "sobremesa + precoSobremesa";
    document.querySelector("h5").innerHTML = "Total" + "(precoComida + precoSobremesa + precoBebida)";
}