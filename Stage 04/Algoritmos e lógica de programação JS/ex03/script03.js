/*
    Capturar 2 números
    e fazer as operações matemáticas
    se soma, subtração, multiplicação
    divisão e resto da divisão

    E para cada operação, mostrar um alerta
    com o resultado

*/

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum  = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber


alert('Vamos realizar operações matemáticas com os números informados: ')

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + mult)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)