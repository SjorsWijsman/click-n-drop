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

let selected;


// Add move event to move selected item with mouse
document.addEventListener('mousemove', (e) => {
  if (selected) {
    selected.style.left = e.pageX + 'px'
    selected.style.top = e.pageY + 'px'
  }
}) 


// Adds event listeners to lists for Click & Drop Functionality
for (const list of lists) {
  list.addEventListener('click', (e) => {
    if (selected) {
      for (const node of e.path) {
        if (node.nodeName === 'SECTION') {
          const ol = node.querySelector('ol')
          
          // Check if item needs to be placed above other items
          let placed = false
          for (const li of ol.children) {
            rect = li.getBoundingClientRect()
            itemHeight = rect.top + li.offsetHeight
            if (e.clientY < itemHeight) {
              ol.insertBefore(selected, li)
              placed = true
              break
            }
          }

          // Else, append item at the end of the list
          if (!placed) ol.appendChild(selected)

          selected.classList.remove('selected')
          selected.style.left = ''
          selected.style.top = ''
          
          fireMode()

          selected = null
        }
      }
    } else {
      for (node of e.path) {
        if (node.nodeName === 'LI') {
          selected = node

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


document.addEventListener('click', () => displayDeleteButton())
function displayDeleteButton() {
  const button = document.querySelector('#delete-button')
  if (selected) {
    button.style.display = 'block'
  } else {
    button.style.display = 'none'
  }
}


function deleteCard() {
  if (selected) {
    const title = selected.querySelector('p').textContent

    newSongs[title] = songs[title]
    delete songs[title]

    selected.remove()
    selected = null

    replaceButtonText()
    fireMode()
  }
}