import * as actions from './actions.js'
import { timerControls, soundControls } from "./elements.js"

export function registerControls(){
    timerControls.addEventListener('click', (event) =>{
        const action = event.target.dataset.action
        
        if(typeof actions[action] != "function"){
            return
        }
        actions[action]()
    })

}
export function registerSoundCountrols(){
    soundControls.addEventListener('click', (event) =>{
        const action = event.target.dataset.action
        if(typeof actions[action] != "function"){
            return
        }
        actions[action]()
    })
}