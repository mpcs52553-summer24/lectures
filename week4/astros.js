// Display the names of all of the astronauts in space, in alphabetic order by first name.

// Your code goes here:

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("h1").addEventListener("click", getAstronauts)
})

async function getAstronauts(e) {
  e.preventDefault();
  const response = await fetch("http://api.open-notify.org/astros.json")
  const data = await response.json();
  const astros = data.people
  astros.forEach(function(element) { 
    console.log(element.name, "is on the", element.craft)
  })
}
