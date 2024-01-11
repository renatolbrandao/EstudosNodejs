let listaEstudantes = [
    {
        nomeAluno: "Renato",
        notaPrimeiraProva: 8,
        notaSegundaProva: 7.5,
    },
    
    {
        nomeAluno: "Beatriz",
        notaPrimeiraProva: 4,
        notaSegundaProva: 6.5,
    },
    
    {
        nomeAluno: "Marcelo",
        notaPrimeiraProva: 9,
        notaSegundaProva: 8,
    },
    
    {
        nomeAluno: "Gabriel",
        notaPrimeiraProva: 8.5,
        notaSegundaProva: 9.5,
    },
    
    {
        nomeAluno: "Julia",
        notaPrimeiraProva: 10,
        notaSegundaProva: 9.5,
    }
]


function calculaMedia (nome, notaUm, notaDois){
    
    let result = Number((notaUm + notaDois) / 2);
    if (result >= 7){
        response = alert(`A média do(a) aluno(a) ${nome} é ${result}
        Parabéns ${nome}! Você foi aprovado(a) no concurso `)
    }else{
        response = alert(`A média do(a) aluno ${nome} é: ${result}
        Não foi dessa vez, ${nome}! Tente novamente`)
    }

}

function printEstudantes (listaEstudantes){
    return `${calculaMedia(listaEstudantes.nomeAluno, listaEstudantes.notaPrimeiraProva, listaEstudantes.notaSegundaProva)}`
}

for (let student of listaEstudantes){
    printEstudantes(student)
}