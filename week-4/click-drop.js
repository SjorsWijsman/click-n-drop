const lists = document.querySelectorAll('section')

let songs = {
  'Run to the Hills': {
    artist: 'Iron Maiden',
  },
  'The Trooper': {
    artist: 'Iron Maiden',
  },
  'Enter Sandman': {
    artist: 'Metallica',
  },
  'Master of Puppets': {
    artist: 'Metallica',
  },
  'Paranoid': {
    artist: 'Black Sabbath',
  },
  'War Pigs': {
    artist: 'Black Sabbath',
  },
}

let newSongs = {
  'Fear of the Dark': {
    artist: 'Iron Maiden',
  },
  'The Number of the Beast': {
    artist: 'Iron Maiden',
  },
  'Nothing Else Matters': {
    artist: 'Metallica',
  },
  'The Unforgiven': {
    artist: 'Metallica',
  },
  'Iron Man': {
    artist: 'Black Sabbath',
  },
  'Children of the Grave': {
    artist: 'Black Sabbath',
  },
}

let selected

let ghost = createGhost()


// Add move event to move selected item with mouse
document.addEventListener('mousemove', (e) => {
  if (selected) {
    selected.style.left = e.pageX + 'px'
    selected.style.top = e.pageY + 'px'
    // Set selected list item on fire if fire mode is on
    if (e.offsetY > document.documentElement.offsetHeight * 0.85) {
      if (e.target.classList.contains('fire')) selected.classList.add('fire')
    }
    placeGhost(e)
  }
}) 


// Adds event listeners to lists for Click & Drop Functionality
for (const list of lists) {
  list.addEventListener('click', (e) => {
    if (selected) {
      // Check if section is anywhere in target path (to include children)
      for (const node of e.path) {
        if (node.nodeName === 'SECTION') {
          const ol = node.querySelector('ol')
          
          // Check if item needs to be placed above other items
          let placed = false
          for (const li of ol.children) {
            rect = li.getBoundingClientRect()
            itemHeight = rect.top + li.offsetHeight / 2
            if (e.clientY < itemHeight) {
              ol.insertBefore(selected, li)
              placed = true
              break
            }
          }

          // Else, append item at the end of the list
          if (!placed) ol.appendChild(selected)

          selected.classList.remove('selected')
          selected.classList.remove('fire')
          selected.style.left = ''
          selected.style.top = ''

          ghost.remove()
          
          fireMode()

          selected = null
        }
      }
    } else {
      for (node of e.path) {
        if (node.nodeName === 'LI') {
          selected = node

          placeGhost(e)

          document.querySelector('body').appendChild(selected)

          selected.classList.add('selected')
          selected.style.left = e.clientX + 'px'
          selected.style.top = e.clientY + 'px'
        }
      }
    }
  })
}


// Toggles FIREMODE
function fireMode() {
  if (checkIfCorrect()) {
    document.querySelector('html').classList.add('fire')
  } else {
    document.querySelector('html').classList.remove('fire')
  }
  fireCounter()
}


// Count correct songs
fireCounter()
function fireCounter() {
  // let count = 0;
  // let total = 0;
  // [...document.querySelectorAll('section')].forEach(list => {
  //   const artist = list.querySelector('h2').textContent
  //   const items = [...list.querySelector('ol').querySelectorAll('li')]
  //   items.forEach(item => {
  //     total += 1
  //     if ({...songs, ...newSongs}[item.querySelector('p').textContent].artist === artist) {
  //       count += 1
  //     }
  //   })
  // })
  // if (total < 4) total = 4
  // document.querySelector('footer').textContent = `Fire Mode: ${count}/${total}`
}


// Checks if Song + Artist combinations are correct
function checkIfCorrect() {
  if ([...document.querySelectorAll('li')].length >= 4) {
    return [...document.querySelectorAll('section')].every(list => {
      const artist = list.querySelector('h2').textContent
      return [...list.querySelector('ol').querySelectorAll('li')].every(item => {
        return {...songs, ...newSongs}[item.querySelector('p').textContent].artist === artist
      })
    })
  }
  return null
}


// Adds a card to the list
function addCard(event) {
  if (!selected && Object.keys(newSongs).length > 0) {
    const section = event.target.parentElement

    const listItem = document.createElement('LI')
    const text = document.createElement('P')
    text.textContent = getRandomSong()

    listItem.appendChild(text)
    section.querySelector('ol').appendChild(listItem)

    replaceButtonText()
    fireMode()
  }
}


// Replace button text with feedback
function replaceButtonText() {
  for (const button of document.querySelectorAll('button')) {
    if (button.textContent === 'Cards are sold out :(' || button.textContent === 'Add Card') {
      if (!selected && Object.keys(newSongs).length > 0) {
        button.textContent = 'Add Card'
        button.disabled = false
      } else {
        button.textContent = 'Cards are sold out :('
        button.disabled = true
      }
    }
  }
}


// Gets random song from newSongs and moves this item to songs object
function getRandomSong() {
  const newSongItems = Object.keys(newSongs)
  const randomSong = newSongItems[Math.floor(Math.random() * newSongItems.length)]
  songs[randomSong] = newSongs[randomSong]
  delete newSongs[randomSong]
  return randomSong
}


// Display delete button when something is selected
document.addEventListener('click', () => displayDeleteButton())
function displayDeleteButton() {
  const deleteButton = document.querySelectorAll('.delete-button')
  const addButton = document.querySelectorAll('.add-button')
  if (selected) {
    deleteButton.forEach(element => element.style.display = 'block')
    addButton.forEach(element => element.style.display = 'none')
  } else {
    deleteButton.forEach(element => element.style.display = 'none')
    addButton.forEach(element => element.style.display = 'block')
  }
}


// Delete currently selected card
function deleteCard(e) {
  if (selected) {
    const title = selected.querySelector('p').textContent

    newSongs[title] = songs[title]
    delete songs[title]

    selected.remove()
    selected = null

    playExplosion(e)

    replaceButtonText()
    fireMode()

    ghost.remove()
  }
}


// Creates ghost li
function createGhost() {
  const li = document.createElement('DIV')
  const p = document.createElement('P')
  p.innerText = 'Drop Here'
  li.appendChild(p)
  li.classList.add('ghost')
  return li
}


// Place Ghost
function placeGhost(e) {
  let section = false
  if (e.path.every(node => node.nodeName !== 'BUTTON')) {
    for (const node of e.path) {
      if (node.nodeName === 'SECTION') {
        section = true
        const ol = node.querySelector('ol')
  
        let placed = false
        for (const li of ol.children) {
          rect = li.getBoundingClientRect()
          itemHeight = rect.top + li.offsetHeight / 2
          if (e.clientY < itemHeight) {
            ol.insertBefore(ghost, li)
            placed = true
            break
          }
        }
  
        if (!placed) ol.appendChild(ghost)
      }
    }
    if (!section) {
      ghost.remove()
    }
  } else {
    ghost.remove()
  }
}


// Create explosion gif element
function playExplosion(e) {
  deleteExplosions()

  const gif = document.createElement('IMG')
  gif.classList.add('explosion')
  document.body.appendChild(gif)

  gif.style.left = e.pageX + 'px'
  gif.style.top = e.pageY + 'px'

  // This is stupid but it forces the gif to reload
  gif.src = 'explosion.gif'.replace(/\?.*$/,"")+"?x="+Math.random()
}


// Delete all .explosion class elements
function deleteExplosions() {
  [...document.querySelectorAll('.explosion')].forEach(element => element.remove())
}