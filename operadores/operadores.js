function comparation(num1, num2) {
  let soma = num1 + num2

  if (num1 > num2 || num1 < num2) {
    if (soma > 10 && soma < 20) {
      console.log(`Os números ${num1} e ${num2} não são iguais.`)
      console.log(`A soma é (${soma}) que é maior que 10 e menor que 20`)
    } else if (soma < 10 && soma < 20) {
      console.log(
        `Os números ${num1} e ${num2} não são iguais. A soma é (${soma}) que é menor que 10 e menor que 20`
      )
    } else if (soma > 10 && soma > 20) {
      console.log(
        `Os números ${num1} e ${num2} não são iguais. A soma (${soma}) é maior que 20`
      )
    }
  }

  if (num1 === num2) {
    if (soma === 10 || soma === 20) {
      console.log(
        `Os números ${num1} e ${num2} são iguais. A soma é (${soma}) igual a ${soma}`
      )
    }
  }

  if (num1 === num2) {
    if (soma > 20) {
      console.log(
        `Os números ${num1} e ${num2} são iguais. A soma é (${soma}) maior que 20`
      )
    }
  }

  if (num1 === num2) {
    if (soma < 10 && soma < 20) {
      console.log(
        `Os números ${num1} e ${num2} são iguais. A soma é (${soma}) igual a ${soma} e menor que 10 e 20`
      )
    }
  }

  if (num1 !== num2) {
    if (soma === 10 || soma === 20) {
      console.log(
        `Os números ${num1} e ${num2} não são iguais. A soma é (${soma}) igual a ${soma}`
      )
    }
  }
}

comparation(6, 4)
