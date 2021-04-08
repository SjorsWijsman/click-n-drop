function allowDrop(event) {
  event.preventDefault()
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  for (item of event.path) {
    if (item.nodeName === "SECTION") {
      item.querySelector('ol').appendChild(document.getElementById(data))
    }
  }
}