import { mostraHobby, mostraIdade, mostrarCidade } from './funcoes.mjs'

const person = {
  name: 'Wellington',
  age: 29,
  city: 'São Gonçalo do Amarante - RN',
  hobby: ['Programar', ' Assistir animes', ' Jogos de PC']
}

console.log(mostraHobby(person.name, person.hobby))
console.log(mostraIdade(person.name, person.age))
console.log(mostrarCidade(person.name, person.city))
