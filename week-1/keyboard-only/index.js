const listItems = document.querySelectorAll('li')

for (item of listItems) {
  item.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'w') moveInList(e.target, 'up')
    else if (e.key === 'ArrowDown' || e.key === 's') moveInList(e.target, 'down')
    else if (e.key === 'ArrowLeft' || e.key === 'a') moveBetweenList(e.target, 'left')
    else if (e.key === 'ArrowRight' || e.key === 'd') moveBetweenList(e.target, 'right')
  })
}

function moveInList(item, direction) {
  const parent = item.parentElement
  if (direction === 'up' && item.previousElementSibling) {
    parent.insertBefore(item, item.previousElementSibling)
  } 
  else if (direction === 'down' && item.nextElementSibling) {
    parent.insertBefore(item.nextElementSibling, item)
  }
  item.focus()
}

function moveBetweenList(item, direction) {
  const parent = item.parentElement
  if (direction === 'left' && parent.parentElement.previousElementSibling) {
    parent.parentElement.previousElementSibling.children[1].appendChild(item)
  }
  else if (direction === 'right' && parent.parentElement.nextElementSibling) {
    parent.parentElement.nextElementSibling.children[1].appendChild(item)
  }
  item.focus()
}