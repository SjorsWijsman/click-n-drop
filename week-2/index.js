const listItems = document.querySelectorAll('li')
const lists = document.querySelectorAll('section')

let selected;

document.addEventListener('mousemove', (e) => {
  if (selected) {
    selected.style.left = e.clientX + 'px'
    selected.style.top = e.clientY + 'px'
  }
}) 

for (list of lists) {
  list.addEventListener('click', (e) => {
    if (selected) {
      for (node of e.path) {
        if (node.nodeName === 'SECTION') {
          selected.classList.remove('selected')
          selected.style.left = ''
          selected.style.top = ''
          node.querySelector('ol').appendChild(selected)

          selected = null
        }
      }
    } else {
      for (node of e.path) {
        if (node.nodeName === 'LI') {
          selected = node

          selected.classList.add('selected')
          selected.style.left = e.clientX + 'px'
          selected.style.top = e.clientY + 'px'
        }
      }
    }
  })
}
