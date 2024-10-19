const inputEl = document.querySelector(".input")
const bodyEl = document.querySelector("body")

inputEl.checked = JSON.parse(localStorage.getItem("mode"))
console.log(inputEl.checked)

const updateBody = ()=>{
    if(inputEl.checked) {
        bodyEl.style.background = "black"
    }
    else {
        bodyEl.style.background = "white"
    }
}

const updateLocalStorage = ()=>{
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}

updateBody()

inputEl.addEventListener("input", ()=>{
    updateBody()
    updateLocalStorage()
})