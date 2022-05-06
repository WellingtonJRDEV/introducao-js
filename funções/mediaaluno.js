const alunos = [
  {
    nome: 'Wellington',
    turma: '1A',
    nota: 9
  },
  {
    nome: 'Ana Cecília',
    turma: '1B',
    nota: 9.8
  },
  {
    nome: 'Gustavo',
    turma: '1C',
    nota: 7
  },
  {
    nome: 'Rosa',
    turma: '1A',
    nota: 5.3
  }
]

function alunosAprovados(arr, media) {
  let aprovados = []

  for (let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i]

    if (nota >= media) {
      aprovados.push(nome)
    }
  }
  return console.log(aprovados)
}
alunosAprovados(alunos, 8)
