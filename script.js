let menuHamburguer = document.querySelector(".menu-hamburguer");
let nav = document.querySelector("nav");
let input = document.querySelector("input");
let botao = document.querySelector("button");
let h2 = document.querySelector("h2");

function mostrarMenu() {
    // nav.style.display = "block";
    /*nav.classList.add("visivel");
    if(nav.classList.contains("visivel")){
        nav.classList.remove("visivel")
    }else{
        nav.classList.add("visivel");
    }*/
    /*
    if (!nav.classList.contains("visivel")) {
        nav.classList.add("visivel")
    } else {
        nav.classList.remove("visivel");
    } */


    nav.classList.toggle("visivel");
    menuHamburguer.classList.toggle("ativo");
}

function pegarNome(){
    let nome = input.value;
    h2.innterHTML = `Seja bem vind@ ${nome}`;
    input.value = "";
}
menuHamburguer.onclick = mostrarMenu;
botao.onclick = pegarNome;