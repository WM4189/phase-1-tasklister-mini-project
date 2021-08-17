document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  let select = document.querySelector('select')

  select.addEventListener('change',changeDay) 
 
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_task_description.value)
    form.reset()
  })
})




function changeDay(e) {
  let select = document.querySelector('select')
  let h1 = document.getElementsByTagName('h1')
  let h2 = document.getElementsByTagName('h2')
  h1[0].textContent = `Will's ${select.value}`
  h2[0].textContent = `${select.value} List`
}



function buildToDo(todo){
  let li = document.createElement('li')
  li.addEventListener('mouseenter', changeTextHover)
  let btn = document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn.textContent = "x"
  li.textContent = `${todo}    `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)

}

function handleDelete(e){
  e.target.parentNode.remove()
} 

function changeTextHover(e){
  e.target.style.color = "yellow"
  setTimeout(() => e.target.style.color = "black", 400)
}



