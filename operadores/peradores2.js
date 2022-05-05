function comparaNumero(num1, num2) {
  if (num1 !== undefined || num1 !== null || num1 !== NaN) {
    if (num2 !== undefined || num2 !== null || num2 !== NaN) {
      if (!num1 || !num2) {
        return 'Insira os números'
      }
    }
  }

  const primeiraFrase = fraseA(num1, num2)
  const segundaFrase = fraseB(num1, num2)

  return `${primeiraFrase}${segundaFrase}`
}

function fraseA(num1, num2) {
  let texto = 'não são'
  const negacao = num1 === num2
  if (negacao) {
    texto = 'são'
    return `Os números ${num1} e ${num2} ${texto} iguais. `
  }
  return `Os números ${num1} e ${num2} ${texto} iguais. `
}

function fraseB(num1, num2) {
  const soma = num1 + num2
  const igualdade = num1 === num2

  let texto10 = 'menor'
  let texto20 = 'menor'

  if (soma > 10 && soma < 20) {
    texto10 = 'maior'
    return `A soma é ${soma}, que é ${texto10} que 10 e ${texto20} que 20`
  }

  if (soma > 10 && soma > 20) {
    texto10 = 'maior'
    texto20 = 'maior'
    return `A soma é ${soma}, que é ${texto10} que 10 e ${texto20} que 20`
  }

  if (soma < 10 && soma < 20) {
    return `A soma é ${soma}, que é ${texto10} que 10 e ${texto20} que 20`
  }

  if (igualdade && soma < 20) {
    return `A soma é ${soma}, que é igual a ${soma} e ${texto20} que 20`
  }

  if (igualdade && soma > 20) {
    texto20 = 'maior'
    return `A soma é ${soma}, que é igual a ${soma} e ${texto20} que 20`
  }

  if (igualdade) {
    return `A soma é ${soma}`
  }
}

console.log(comparaNumero(1, 1))
