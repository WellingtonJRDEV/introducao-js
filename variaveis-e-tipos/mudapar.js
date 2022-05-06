// solução 1

const ARRAY = [1, 2, 4, 5, 6, 9, 11, 12, 18, 23, 25, 26, 32, 41]

function mudaArray(array) {
  if (!array) return -1
  if (array.length === 0) return -1

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log('Já é zero')
    } else if (array[i] % 2 === 0) {
      console.log(`Substituindo o valor ${array[i]} por 0...`)
      array[i] = 0
    }
  }

  return array
}

console.log(mudaArray(ARRAY))
