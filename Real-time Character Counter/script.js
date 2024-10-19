const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counters")
const remainingEl = document.getElementById("remaining")

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    
}