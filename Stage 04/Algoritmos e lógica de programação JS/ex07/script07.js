/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let listaPacientes = [
  { name: "Renato",
    age: 27,
    weight: 66,
    height: 165,
  },
  {
    name: "Marcelo",
    age: 39,
    weight: 91,
    height: 175,
  }
];

for (let index = 0; index < listaPacientes.length; index++){
  listaPacientes[index] = listaPacientes[index].name;
}

alert(listaPacientes)