    var data = new Date();
    var hora = data.getHours();
    var saudacao = document.createElement("h2");
    var pai = document.querySelector("article");
    if(hora >= 1 && hora < 12){
        saudacao.textContent = "Olá, Bom dia!";
    } else if(hora >= 12 && hora < 18){
        saudacao.textContent = "Olá, Boa tarde!"
    } else {
        saudacao.textContent = "Olá, Boa Noite!"
    }

    pai.insertBefore(saudacao, bem);

let botao = document.querySelector('#portugues')
let texto = document.querySelector('#desc')

botao.addEventListener('mouseover', function (){
    texto.textContent = 'teste'
})

botao.addEventListener('mouseout', function (){
    texto.textContent = ''
})