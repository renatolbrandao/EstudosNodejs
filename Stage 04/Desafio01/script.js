
let firstNum = Number(prompt("Informe o primeiro número: "))
let secondNum = Number(prompt("Informe o segundo número: "))

let sum = firstNum + secondNum;
alert(`O valor da soma é: ${sum}`)
let sub = firstNum - secondNum;
alert(`O valor da subtração é: ${sub}`)
let mult = firstNum * secondNum;
alert(`O valor da multiplicação é: ${mult}`)
let div = firstNum / secondNum;
alert(`O valor da divisão é: ${div}`)
let restDiv = firstNum % secondNum;
alert(`O valor do resto da divisão é: ${restDiv}`)

let restDiv2 = sum % 2;

if (restDiv2 == 0){
    alert(`A soma dos valores ${firstNum} e ${secondNum} resultou em um valor par`)
}else{
    alert(`A soma dos valores ${firstNum} e ${secondNum} resultou em um valor impar`)
}

if (firstNum == secondNum){
    alert(`O primeiro valor informado (${firstNum}) e o segundo valor informado (${secondNum}) são iguais`)
}else{
    alert(`O primeiro valor informado (${firstNum}) e o segundo valor informado (${secondNum}) são diferentes`)
}