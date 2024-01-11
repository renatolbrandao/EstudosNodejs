/* 
    Solicitar o nome do aluno e as 3 notas
    do bimestre calcular a média daquele aluno.

    A média positiva deverá ser maior que 6

    Se o aluno passou no bimestre, dar os 
    parabéns.

    Se o aluno não passou no bimestre, 
    motivar o aluno a dar seu melhor na prova
    de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota

*/

let nomeAluno = prompt("Informe seu nome: ")

let notaProva01 = prompt("Informe a sua primeira nota: ")
let notaProva02 = prompt("Informe a sua segunda nota: ")
let notaProva03 = prompt("Informe a sua terceira nota: ")

let average = ((Number(notaProva01) + Number(notaProva02) + Number(notaProva03)) / 3)

//arredonda para duas casas decimais
average = average.toFixed(2)

if(average >= 6){
    alert( nomeAluno + " a sua média escolar foi: " + average + " parabéns! Você foi aprovado")
}else{
    alert( nomeAluno + " a sua média escolar foi: " + average + " e você foi reprovado. Se esforce mais para o próximo bimestre")
}

