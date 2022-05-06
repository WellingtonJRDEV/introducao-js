// DESAFIO A
const array = [1, 2, 5, 3, 20, 2383, 85, 21, 1033]

function sumAllItems(arr) {
  const previewValue = 0
  return arr.reduce((valorInicial, valorAtual) => {
    return valorInicial + valorAtual
  }, previewValue)
}

console.log(sumAllItems(array))

// DESAFIO B

const lista = [
  {
    nome: 'maçã',
    preco: 5
  },
  {
    nome: 'Uva',
    preco: 9
  },
  {
    nome: 'Pêra',
    preco: 7
  }
]

const saldo = 50

function checkWallet(saldo, arr) {
  return arr.reduce((prev, current) => {
    return prev - current.preco
  }, saldo)
}

console.log('O valor final é de R$', checkWallet(saldo, lista))
