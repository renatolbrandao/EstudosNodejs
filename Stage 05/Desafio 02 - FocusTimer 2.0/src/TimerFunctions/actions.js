import * as el from './elements.js'
import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()
}

export function addTime(){
    
    let minutoAtual = document.getElementById('minutes')
    
    minutoAtual = Number(minutoAtual.textContent)
    minutoAtual = minutoAtual + 5
    
    timer.updateDisplay(minutoAtual)
    return 
}

export function removeTime(){
    let minutoAtual = document.getElementById('minutes')
    
    minutoAtual = Number(minutoAtual.textContent)
    minutoAtual = minutoAtual - 5
    
    if (minutoAtual < 0){
        minutoAtual = 0
    }

    timer.updateDisplay(minutoAtual)
    return 
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.toggle('running')
    timer.updateDisplay()
}

export function checkCurrentState(botao){
    
    if (state.isForest == true && botao == 'florest'){
        state.isRain = document.documentElement.classList.remove('isRain')
        sounds.soundRain.pause()
        state.isCoffee = document.documentElement.classList.remove('isCoffee')
        sounds.soundCoffee.pause()
        state.isFire = document.documentElement.classList.remove('isFire')
        sounds.soundFire.pause()
        
    }
    
    if (state.isRain == true && botao == 'rain'){
        state.isForest = document.documentElement.classList.remove('isForest')
        sounds.soundFlorest.pause()
        state.isCoffee = document.documentElement.classList.remove('isCoffee')
        sounds.soundCoffee.pause()
        state.isFire = document.documentElement.classList.remove('isFire')
        sounds.soundFire.pause()
        
    }

    if (state.isCoffee == true && botao == 'coffee-shop'){
        state.isRain = document.documentElement.classList.remove('isRain')
        sounds.soundRain.pause()
        state.isForest = document.documentElement.classList.remove('isForest')
        sounds.soundFlorest.pause()
        state.isFire = document.documentElement.classList.remove('isFire')
        sounds.soundFire.pause()
        
    }

    if (state.isFire == true && botao == 'fire'){
        state.isRain = document.documentElement.classList.remove('isRain')
        sounds.soundRain.pause()
        state.isForest = document.documentElement.classList.remove('isForest')
        sounds.soundFlorest.pause()
        state.isCoffee = document.documentElement.classList.remove('isCoffee')
        sounds.soundCoffee.pause()
        
    }

}


export function toggleMusicFlorest(){
    state.isForest = document.documentElement.classList.toggle('isForest')
    let botao = event.target.id
    checkCurrentState(botao)
    florestSound()
}

export function toggleMusicRain(){   
    state.isRain = document.documentElement.classList.toggle('isRain')
    let botao = event.target.id
    checkCurrentState(botao)
    rainSound()
}

export function toggleMusicCoffee(){
    state.isCoffee = document.documentElement.classList.toggle('isCoffee')
    let botao = event.target.id
    checkCurrentState(botao)
    coffeeSound()
}

export function toggleMusicFire(){
    state.isFire = document.documentElement.classList.toggle('isFire')
    let botao = event.target.id
    checkCurrentState(botao)
    fireSound()
}


export function florestSound(){
    state.isForest ? sounds.soundFlorest.play() : sounds.soundFlorest.pause()
}
export function rainSound(){
    state.isRain ? sounds.soundRain.play() : sounds.soundRain.pause()
}
export function coffeeSound(){
    state.isCoffee ? sounds.soundCoffee.play() : sounds.soundCoffee.pause()
}
export function fireSound(){
    state.isFire ? sounds.soundFire.play() : sounds.soundFire.pause()
}

