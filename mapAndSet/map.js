function getAdmin(map) {
  let administrators = []
  for ([key, value] of map) {
    if (value === 'Admin') {
      administrators.push(key)
    }
  }

  return administrators
}

const usuarios = new Map()

usuarios.set('Junior', 'Admin')
usuarios.set('Wellington', 'Admin')
usuarios.set('Ana', 'User')
usuarios.set('Zil', 'Admin')
usuarios.set('Conceição', 'User')

console.log(getAdmin(usuarios))
