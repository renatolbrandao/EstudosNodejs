/*
  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let choosedOption

let purchaseList = [];

// while(choosedOption != 3){

//   choosedOption = prompt(`Olá usuário! Digite o número da opção desejada: 
//   1. Cadastrar um item na lista
//   2. Mostrar Itens cadastrados
//   3. Sair do programa`)

//   if (choosedOption == 1){
//     let addItem = prompt(`Qual item você deseja cadastrar?`)
//     purchaseList.push(addItem)
//     alert("Item cadastrado com sucesso")
    
//   } 
  
//   if(choosedOption == 2){
//     if (purchaseList.length == 0){
//       alert("não existem itens cadastrados")
//     }else{
//       alert(`Os itens cadastrados na lista são: ${purchaseList} `)
//     } 
//   }

// }

// alert("Você saiu do programa")


// Segunda forma de construir esse programa:
while(choosedOption != 3){
  choosedOption = Number(prompt(`Olá usuário! Digite o número da opção desejada: 
  1. Cadastrar um item na lista
  2. Mostrar Itens cadastrados
  3. Sair do programa`))

 switch(choosedOption){
    case 1:
        let addItem = prompt(`Qual item você deseja cadastrar?`)
        purchaseList.push(addItem)
        break;
    case 2:
        if (purchaseList.length == 0){
          alert("não existem itens cadastrados")
        }else{
          alert(`Os itens cadastrados na lista são: ${purchaseList} `)
        }
        break;
    case 3:
      alert("Voce saiu do programa")
      break;
    default:
        alert("Opção invalida")
  }
}
