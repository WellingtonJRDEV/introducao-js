// BAIXA O NODE JS
// SEMPRE QUE PRECISAR USAR O CONSOLE DO BROWSER

// console.log('Hello, World!!!')

function checkNumber(lista) {
  let evenNums = []
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      evenNums.push(lista[i])
    } else {
      console.log(`O número ${lista[i]} não é PAR!`)
    }
  }
  console.log('Os números pares são:', evenNums)
}

let listagem = [1, 2, 4, 6, 7, 8, 16]
checkNumber(listagem)
