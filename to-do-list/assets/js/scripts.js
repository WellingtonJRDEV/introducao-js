const inputBox = document.getElementById('input-box')
const btn = document.querySelector('.btn')
const list = document.querySelector('.tasks')

btn.addEventListener('click', e => {
  if (!inputBox.value) {
    alert('Por favor preencha uma tarefa!')
    return
  }

  addTask(inputBox.value)
  clearTask()
})

inputBox.addEventListener('keypress', e => {
  if (e.keyCode == 13) {
    if (!inputBox.value) {
      alert('Por favor preencha uma tarefa!')
      return
    }

    addTask(inputBox.value)
    clearTask()
  }
})

function addTask(description) {
  const taskContainer = document.createElement('div')
  const newTask = document.createElement('input')
  const taskLabel = document.createElement('label')
  const taskText = document.createTextNode(description)

  newTask.setAttribute('type', 'checkbox')
  newTask.setAttribute('name', description)
  newTask.setAttribute('id', description)
  newTask.classList.add('item')

  taskLabel.setAttribute('for', description)
  taskLabel.appendChild(taskText)

  taskContainer.classList.add('task-item')
  taskContainer.appendChild(newTask)
  taskContainer.appendChild(taskLabel)

  list.appendChild(taskContainer)
}

function clearTask() {
  inputBox.value = ''
  inputBox.focus()
}
