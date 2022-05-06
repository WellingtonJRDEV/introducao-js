function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

const pessoa1 = {
  nome: 'Wellington',
  idade: 29
}

const pessoa2 = {
  nome: 'Zildenir',
  idade: 28
}

const pessoa3 = {
  nome: 'Ana Cecília',
  idade: 9
}

console.log(calculaIdade.call(pessoa1, 33))
console.log(calculaIdade.call(pessoa2, 33))
console.log(calculaIdade.call(pessoa3, 33))

console.log(calculaIdade.apply(pessoa1, [21]))
console.log(calculaIdade.apply(pessoa2, [21]))
console.log(calculaIdade.apply(pessoa3, [21]))
