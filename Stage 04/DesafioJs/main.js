// Exercicio 01
// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")

// Exercicio 02
// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let primeiroNumero = prompt("Infome um número")
let segundoNumero = prompt("Informe outro número")
let soma = Number(primeiroNumero) + Number(segundoNumero)

alert(`A soma dos números é: ${soma}`)

// Exercicio 03
// Crie um script que declare uma variável e verifique se o seu valor é um 
// número. Se for, exiba a mensagem "É um número", caso contrário, exiba a 
// mensagem "Não é um número".

let informeAlgo = prompt("digite alguma coisa")

if (typeof informeAlgo == "number"){
    alert("é um numero")
}else{
    alert("não é um numero")
}

// Exercicio 04
// Crie um script que declare uma variável e verifique se o seu valor é uma string. 
// Se for, exiba a mensagem "É uma string", caso contrário, 
// exiba a mensagem "Não é uma string".

informeAlgo = prompt("digite alguma coisa")

if (typeof informeAlgo == "String"){
    alert("é uma string")
}else{
    alert("não é uma string")
}

// Exercicio 05
// Crie um script que declare uma variável e verifique se o seu valor 
// é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, 
// exiba a mensagem "Não é um booleano"..

informeAlgo = prompt("digite alguma coisa")

if (typeof informeAlgo == "boolean"){
    alert("É um booleano")
}else{
    alert("Não é um booleano")
}

// Exercicio 06
// Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
primeiroNumero = prompt("Infome um número")
segundoNumero = prompt("Informe outro número")
let subtracao = Number(primeiroNumero) - Number(segundoNumero)

alert(`A subtração dos números é: ${subtracao}`)

// Exercicio 07
// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
primeiroNumero = prompt("Infome um número")
segundoNumero = prompt("Informe outro número")
let multiplicacao = Number(primeiroNumero) * Number(segundoNumero)

alert(`A multiplicação dos números é: ${multiplicacao}`)

// Exercicio 08
// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
primeiroNumero = prompt("Infome um número")
segundoNumero = prompt("Informe outro número")
let divisao = Number(primeiroNumero) / Number(segundoNumero)

alert(`A divisão dos números é: ${divisao}`)

// Exercicio 09
// Crie um script que declare uma variável e verifique se o seu valor é 
// um número par. Se for, exiba a mensagem "É um número par", caso contrário, 
// exiba a mensagem "Não é um número par".

informeAlgo = Number(prompt("Informe um numero"))

if (informeAlgo % 2 == 0){
    alert("É um número par")
}else{
    alert("Não é um número par")
}

// Exercicio 10
// Crie um script que declare uma variável e verifique se o seu valor é um 
// número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, 
// exiba a mensagem "Não é um número ímpar".

informeAlgo = Number(prompt("Informe um numero"))

if (informeAlgo % 2 != 0){
    alert("É um número impar")
}else{
    alert("Não é um número impar")
}