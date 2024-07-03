// When you type a grocery item into the text input and press [Enter]:
// - the new item should appear at the bottom of the list
// - the text input should be reset to a blank input field
// - the cursor should be blinking in the text input again

document.addEventListener("DOMContentLoaded", setupListeners)

function setupListeners() {
  document.querySelector("form").addEventListener("submit", addItem)
}

function addItem(e) {
  e.preventDefault();
  console.log(e);

  const template = document.querySelector("#newitem_template")
  const clone = template.content.cloneNode(true)
  const newItem = clone.querySelector("li")
  newItem.textContent = document.querySelector("#new_item").value

  const entireList = document.querySelector("#groceries")
  entireList.appendChild(clone)
  document.querySelector("form").reset()

  // const formElement = document.querySelector('form')
  // const inputElement = document.querySelector("#new_item")
  // const textToAdd = inputElement.value
  
  // const newItem = document.createElement("li")
  // newItem.textContent = textToAdd
  
  // const entireList = document.querySelector("#groceries")
  // entireList.appendChild(newItem)

  // // inputElement.value = ""
  // formElement.reset()

}
