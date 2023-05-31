    var data = new Date();
    var hora = data.getHours();
    var saudacao = document.createElement("h2");
    var pai = document.querySelector("article");
    
    if(hora >= 1 && hora < 12){
        saudacao.textContent = "Hello, Good morning!";
    } else if(hora >= 12 && hora < 18){
        saudacao.textContent = "Hello, Good afternoon!"
    } else {
        saudacao.textContent = "Hello, Good evening!"
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

// MY AGE