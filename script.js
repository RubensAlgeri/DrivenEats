let selecionouComida = false;
let selecionouBebida = false;
let selecionouSobremesa = false;


function selef1(){
    selecionouComida = true;

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
    document.getElementById("confirmar-pedido").classList.remove("icon-none");
    document.getElementById("main").classList.add("fundo-apagado");
}