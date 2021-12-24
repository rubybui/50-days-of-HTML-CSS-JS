const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days= ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["Jan","Feb","Mar","Apr","May","Jun", "Jul","Aug","Sep","Oct", "Nov","Dec"]

toggleEl.addEventListener("click",(e)=>{
    const html = document.querySelector("html")
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML = "Dark Mode"
    } else{
        html.classList.add("dark")
        e.target.innerHTML = "Light Mode"
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const ampm = hours >= 12 ? "PM":"AM"

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`

    hourEl.style.transition = `${hours === 0 ? "none" : "all 0.5s ease-in"}`
 
    minuteEl.style.transition = `${minute === 0 ? "none" : "all 0.5s ease-in"}`
 
    secondEl.style.transition = `${second === 0 ? "none" : "all 0.5s ease-in"}`


    timeEl.innerHTML = `${hoursForClock}:${minute < 10 ? `0${minute}` : minute} ${ampm}` ;

    dateEl.innerHTML = `${days[day]} , ${months[month]}, <span class="circle">${date}</span>`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}


setInterval(setTime, 1000)
setTime()