// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

init()

function init() {
  handleForm()
  handleClicks()
}

function handleForm(){
  //grab the form  
  const form = document.getElementById("create-task-form");
  // add 'submit' event listener to the form
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderTask(event);
    event.target.reset()


  })

}

function renderTask(event) {
  const input = event.target["new-task-description"].value
  const li = document.createElement("li")
  li.innerText = input
  const delButton = document.createElement("button")
  delButton.innerText = "x"
  li.append(delButton)
  delButton.addEventListener("click", () => {
    li.remove()
  })
  document.getElementById('tasks').appendChild(li)
  
}

// function handleClicks() {
//   document.getElementById('tasks').addEventListener('click', (e) => {
//     console.log(e.target)
//     console.log(e.currentTarget)
//     // if the e.target is an li remove it, else do nothing
//     if (e.target.nodeName == "BUTTON") {
//       e.target.parentNode.remove()
//     } else {
//       console.log("cant do that");
//     }
//   })
// }