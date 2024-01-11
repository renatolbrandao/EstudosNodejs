// function expression
// function anonymous

// parameters
const sum = function( number1, number2){
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

sum(2,3) // arguments
sum(number1,number2)

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)


// Function () constructor

function Person(name){
    this.name = name
}

const mayk = new Person("Mayk")
const joao = new Person("Joao")

console.log(mayk)
console.log(joao)


let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
// console.log(techs.slice(1,3))

//remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)
// encontrar a posição de um elemento no array
let index = techs.indexOf("css")

let number3 = 2039.2309219
console.log(`o numero 3 é ${number3.toFixed(3)}`)