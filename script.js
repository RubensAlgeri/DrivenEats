// var selecionouComida = 0;
// var selecionouBebida = 0;
// var selecionouSobremesa = 0;


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
}
// var pedidoAberto = document.getElementById("2");
// var fecharPedido = document.getElementById("3");

// if(selecionouComida === true && selecionouBebida === true && selecionouSobremesa === true){
//     pedidoAberto.classList.add("icon-none");
//     fecharPedido.classList.remove("icon-none");
// }
// function confirmarPedido(){
//     var confirmar = document.getElementById("1");
//     confirmar.classList.remove("icon-none");
//     document.getElementById("7").classList.add("fundo-apagado");
// }