function mostraIdade(nome, idade) {
  if (!nome && !idade) return 'Digite o seu nome e a sua idade.'
  return `${nome} tem ${idade} anos de idade.`
}

function mostrarCidade(nome, cidade) {
  if (!nome && !cidade) return 'Digite o seu nome e a cidade.'
  return `A cidade que ${nome} mora é ${cidade}.`
}

function mostraHobby(nome, hobby) {
  if (!nome) return 'Digite o nome.'
  else if (!hobby) return `${nome} não tem hobbies.`
  return `Os hobbies de ${nome} são: ${hobby}`
}

export { mostraIdade, mostrarCidade, mostraHobby }
