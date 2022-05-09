const btn = document.getElementById('btn')
const body = document.querySelector('body')
const heading = document.querySelector('h1')

btn.addEventListener('click', function darkMode(e) {
  e.preventDefault
  body.classList.toggle('dark-mode')
  if (body.classList.contains('dark-mode')) {
    heading.innerText = 'Dark Mode ON'
    btn.innerHTML = 'Light Mode'
  } else {
    heading.innerText = 'Ligth Mode ON'
    btn.innerHTML = 'Dark Mode'
  }
})
