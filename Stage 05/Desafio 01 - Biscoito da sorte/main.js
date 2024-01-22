let getSorte = document.querySelector("img")
let mainProperty = document.querySelector("main")
let luckyMessage = document.querySelector(".luckDay")
let abrirBiscoito = document.querySelector("#abrirBiscoito")
let alteraMensagem = document.querySelector("#msgFinal");
let index = 0

getSorte.addEventListener('click', handleTryClick)
abrirBiscoito.addEventListener('click', handleResetClick)

const luckMessagesArray = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Que seu dia seja repleto de bençãos",
    "Antes só do que mal acompanhado",
    "Nada como um dia após o outro",
    "A vingança nunca é plena, mata a alma e envenena"
]


function handleTryClick (){

     if(index < luckMessagesArray.length){
        encontrarMensagem(luckMessagesArray, index)
     }else{
        index = 0;
        encontrarMensagem(luckMessagesArray, index)
     }
    
    alteraMensagem.innerHTML = luckMessagesArray[index]    
    index++ 

    event.preventDefault() 
    toggleScreen()
}


function handleResetClick (){  
    toggleScreen()

}

function toggleScreen(){
    mainProperty.classList.toggle('hide')
    luckyMessage.classList.toggle('hide')
}

function encontrarMensagem(luckMessagesArray, index) {
    return luckMessagesArray[index];
}