const monthNameEl = document.getElementById("month-name")
const dayNameEl = document.getElementById("day-name")
const dayNumberEl = document.getElementById("day-number")
const yearEl = document.getElementById("year")

const date = new Date();
const month = date.getMonth();
// console.log(month)
monthNameEl.innerText = date.toLocaleString("en", {
    month: "long"
})
const day = date.getDay();
dayNameEl.innerText = date.toLocaleDateString("en", {
    weekday: "long"
})
dayNumberEl.innerText = date.getDate()
yearEl.innerText = date.getFullYear()