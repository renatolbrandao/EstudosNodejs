/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let numeroInformado = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")

const numeroAleatorio = Math.round(Math.random() * 10)
let contadorErros = 1;

while (numeroInformado != numeroAleatorio){
  contadorErros++
  alert("Erro, tente novamente")
  numeroInformado = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
}

if (contadorErros > 1){
  alert(`Parabéns! Você advinhou o número em ${contadorErros} tentativas`)
}else{
  alert(`Parabéns! Você advinhou o número em ${contadorErros} tentativa`)
}


