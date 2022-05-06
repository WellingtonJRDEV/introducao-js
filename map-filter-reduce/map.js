// const array = [1, 2, 5, 3, 20, 2383, 85, 21, 1033]

const array = [2038]

const carrosVolkswagen = {
  km: 55,
  preco: 32890
}
const carrosFiat = {
  km: 31,
  preco: 30100
}
const carrosFord = {
  km: 40,
  preco: 28500
}

function applyMapWithThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.km
  }, thisArg)
}

console.log('Carro GOL -> KM', applyMapWithThis(array, carrosVolkswagen))
console.log('Carro UNO -> KM', applyMapWithThis(array, carrosFiat))
console.log('Carro FIESTA -> KM', applyMapWithThis(array, carrosFord))
