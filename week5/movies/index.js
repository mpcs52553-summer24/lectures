// State management options:
// - global variables
// - use HTML element content
// - use HTML data-* attributes
// - use global "app" variable (usually hooked into window)

window.app = { 
  counter: 0,
}

document.addEventListener("DOMContentLoaded", () => {
  // <a class="like">&hearts; <span>0</span></a>
  document.querySelector(".like").addEventListener("click", function(event) {
    event.preventDefault();
    let counterElement = event.currentTarget.querySelector("span")
    counterElement.textContent = parseInt(counterElement.textContent) + 1
    event.currentTarget.style.color = "white"
    event.currentTarget.style.backgroundColor = "red"
    let link = event.currentTarget
    setTimeout(function() {
      eventlink.style.color = "red"
      link.style.backgroundColor = "white"
    }, 1000)
  })
})

