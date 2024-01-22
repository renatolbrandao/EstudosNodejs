// Variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

let xAttempts = 1
let randomNumber = Math.round(Math.random() * 10)

// função callback
function handleTryClick(){
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
        btnTry.addEventListener('keydown', pressEnter(e))
    }
    inputNumber.value = ""
    xAttempts++
    
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnter(e){
    if (e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
}