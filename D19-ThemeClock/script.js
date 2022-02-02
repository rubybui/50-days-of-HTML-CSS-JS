var alarmSetterString = ""

var countdownDeadline = ""

const clearAlarm = document.getElementById("clear-alarm")
const activeAlarm = document.getElementById("active-alarm")
const alarmTextContainer = document.getElementById("alarm-text")
const createAlarm = document.querySelector(".alarm")
const alarmAudio = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav")

const countdownDate = document.querySelector('input[type="datetime-local"]')
const newCountdown = document.getElementById("countdown-setter")
const countdownOff = document.getElementById("countdown-off")
const countdownOn = document.getElementById("countdown-on")

const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggleEl.addEventListener("click", (e) => {
    const html = document.querySelector("html")
    if (html.classList.contains("dark")) {
        html.classList.remove("dark")
        e.target.innerHTML = "Dark Mode"
    } else {
        html.classList.add("dark")
        e.target.innerHTML = "Light Mode"
    }
})
const checkAlarm = (timeString) => {
    if (alarmSetterString === timeString) {
        alarmAudio.play();
    }
};

const setTime = () => {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM"

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minute < 10 ? `0${minute}` : minute} ${ampm}`;

    dateEl.innerHTML = `${days[day]} , ${months[month]}, <span class="circle">${date}</span>`
    checkAlarm(`${hoursForClock}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second} ${ampm}`)
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const getTimeString = ({ hours, minutes, seconds, zone }) => {
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${zone}`
}

const handleClearAlarm = (e) => {
    e.preventDefault()
    alarmSetterString = ""
    console.log("clear")
    activeAlarm.style.display = "none"
    createAlarm.style.display = "block"
}


const handleSubmitAlarm = (e) => {
    e.preventDefault()
    const { hour, sec, min, zone } = document.forms[0];
    alarmSetterString = getTimeString({
        hours: hour.value,
        seconds: sec.value,
        minutes: min.value,
        zone: zone.value
    })

    alarmTextContainer.innerHTML = alarmText(alarmSetterString);
    createAlarm.style.display = "none";
    activeAlarm.style.display = "block";
}

const handleCreateCountdown = (e) => {
    countdownDeadline = countdownDate.value
    const countdowning = new Date(countdownDeadline)
    setInterval(function() {handleCountdown(countdowning)},1000)
    countdownOff.style.display = "none";
    countdownOn.style.display = "block";
}


const handleCountdown = (time) =>{
    // Get today's date and time
    const now = new Date();
      
    // Find the distance between now and the count down date
    let distance = Number(time  - now)/1000
      
    // Time calculations for days, hours, minutes and seconds
    var d = Math.floor(distance / (3600*24));
    var h = Math.floor(distance % (3600*24) / 3600);
    var m = Math.floor(distance % 3600 / 60);
    var s = Math.floor(distance % 60);
    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML =
    `${d} days ${h} hours ${m} minutes ${s} seconds`
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }

newCountdown.addEventListener("click", handleCreateCountdown)
setInterval(setTime, 1000)
setTime()

document.forms[0].addEventListener("submit", handleSubmitAlarm)
clearAlarm.addEventListener("click", handleClearAlarm)

const alarmText = (alarmSetterString) => `Alarm set at time ${alarmSetterString}`;

