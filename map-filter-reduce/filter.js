const array = [1, 2, 5, 3, 20, 2383, 85, 21, 1033, 40]

function parNumbers(arr) {
  return arr.filter(num => {
    return num % 2 === 0
  })
}

console.log(parNumbers(array))
