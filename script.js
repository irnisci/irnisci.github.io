const colors = ["#6495ed","#7fffd4","#ffa07a","#f08080"]
const container = document.querySelector(".container")

document.querySelector(".open-navbar-icon").addEventListener("click",()=>{
    container.classList.add('change')
})

document.querySelector(".close-navbar-icon").addEventListener("click",()=>{
    container.classList.remove('change')
})

let i = 0

Array.from(document.querySelectorAll(".nav-link")).forEach((item)=>{
item.style.cssText = `background-color: ${colors[i++]}`
})