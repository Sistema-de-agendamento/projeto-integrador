
let menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}


menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

let btnExp = document.querySelector('#btn-exp')
let menu = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', () =>{
    menu.classList.toggle('expandir')
})


//Sessão Home
let btnHome = document.querySelector('#selectHome')
btnHome.addEventListener('click', () => {
    let displayHome = document.getElementById("home").style.display;
    if(displayHome === "none"){
        document.getElementById("home").style.display = 'flex';
    }

    console.log("clicou")

    let variHome = document.getElementById("home").style.display
    if(variHome === 'flex'){
        document.getElementById("perfil").style.display = 'none'
        document.getElementById("agenda").style.display = 'none'
        document.getElementById("grafico").style.display = 'none'
    }
})


//Sessão Perfil
let btnPerfil = document.querySelector('#selectPerfil')
btnPerfil.addEventListener('click', () => {
    let displayPerfil = document.getElementById("perfil").style.display;
    if(displayPerfil === "none"){
        document.getElementById("perfil").style.display = 'flex';
    } else{
        document.getElementById("perfil").style.display = 'none';
    }

    console.log("clicou")

    let variPerfil = document.getElementById("perfil").style.display
    if(variPerfil === 'flex'){
        document.getElementById("home").style.display = 'none'
        document.getElementById("agenda").style.display = 'none'
        document.getElementById("grafico").style.display = 'none'
    }
})


//Sessão Agenda
let btnAgenda = document.querySelector('#selectAgenda')
btnAgenda.addEventListener('click', () => {
    let displayAgenda = document.getElementById("agenda").style.display;
    if(displayAgenda === "none"){
        document.getElementById("agenda").style.display = 'flex';
    } else {
        document.getElementById("agenda").style.display = 'none';
    }

    console.log("clicou")

    let variAgenda = document.getElementById("agenda").style.display
    if(variAgenda === 'flex'){
        document.getElementById("home").style.display = 'none'
        document.getElementById("perfil").style.display = 'none'
        document.getElementById("grafico").style.display = 'none'
    }
})


//Sessão de gráfico
let btnGrafico = document.querySelector('#selectGrafico')

btnGrafico.addEventListener('click', () => {
    let displayGrafico = document.getElementById("grafico").style.display;
    if(displayGrafico === "none"){
        document.getElementById("grafico").style.display = 'flex';
    } else {
        document.getElementById("grafico").style.display = 'none';
    }

    console.log("clicou")

    let variGrafico = document.getElementById("grafico").style.display
    if(variGrafico === 'flex'){
        document.getElementById("home").style.display = 'none'
        document.getElementById("perfil").style.display = 'none'
        document.getElementById("agenda").style.display = 'none'
    }
})

function logout(){
    window.location.href = "../Landing-page/landing-page.html"
}
