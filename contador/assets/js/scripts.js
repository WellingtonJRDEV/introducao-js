let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0

function increment() {
  if (currentNumber >= 0) {
    currentNumberWrapper.style.color = 'blue'
  } else {
    currentNumberWrapper.style.color = 'red'
  }
  if (currentNumber < 10) {
    currentNumber++
    currentNumberWrapper.innerHTML = currentNumber
  }
}

function decrement() {
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red'
  } else {
    currentNumberWrapper.style.color = 'blue'
  }
  if (currentNumber > -10) {
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber
  }
}
