const array = [1, 2, 5, 3, 20, 21]

function mapWithoutThis(arr) {
  return arr.map(item => {
    return item * 2
  })
}

console.log(mapWithoutThis(array))
