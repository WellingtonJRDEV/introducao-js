function testingError(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Envie os parâmetros!')
    if (typeof arr !== 'object')
      throw new TypeError('O array precisa ser do tipo Object')
    if (typeof num !== 'number')
      throw new TypeError('O número precisa ser do tipo number')
    if (arr.length !== num) throw new RangeError('Tamanho inválido')
    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Este erro é um "RererenceError"')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Este erro é um "TypeError"')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Este erro é um "RangeError"')
      console.log(e.message)
    } else {
      console.log('Ocorreu um erro não esperado: ' + e)
    }
  }
}

const lista = ['carro', 'moto', 'avião', 'barco']
console.log(testingError(lista, 4))
