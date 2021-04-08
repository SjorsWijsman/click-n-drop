function moveInList(event, direction) {
  const item = event.target.parentElement.parentElement
  const parent = item.parentElement
  if (direction === 'up' && item.previousElementSibling) {
    parent.insertBefore(item, item.previousElementSibling)
  } 
  else if (direction === 'down' && item.nextElementSibling) {
    parent.insertBefore(item.nextElementSibling, item)
  }
  item.focus()
}

function moveBetweenList(event, direction) {
  const item = event.target.parentElement.parentElement
  const parent = item.parentElement
  if (direction === 'left' && parent.parentElement.previousElementSibling) {
    parent.parentElement.previousElementSibling.children[1].appendChild(item)
  }
  else if (direction === 'right' && parent.parentElement.nextElementSibling) {
    parent.parentElement.nextElementSibling.children[1].appendChild(item)
  }
  item.focus()
}