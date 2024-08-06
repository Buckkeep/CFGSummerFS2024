const btn = document.getElementById("btn")
const title = document.getElementById("title")
const message2 = document.getElementById("message2")

btn.addEventListener("click", function(){
    document.body.style.backgroundColor = "#db6e6e"
    title.textContent = "Hooray for CFG"
    message2.textContent = "Yay Hope!"
})

const btn2 = document.getElementById("btn2")

btn2.addEventListener("click", function(){
    document.body.style.backgroundColor = "rgb(170, 123, 131)"
    title.textContent = "We're learning Web Dev"
    message2.textContent = "Yay Anuj!"
})

