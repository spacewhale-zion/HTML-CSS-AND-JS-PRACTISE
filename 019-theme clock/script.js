const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggle.addEventListener('click', (e) => {
  const html = document.documentElement
  html.classList.toggle('dark')
  toggle.innerText = html.classList.contains('dark') ? 'Light mode' : 'Dark mode'
})

function setTime() {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  hourEl.style.transform = `rotate(${scale(hoursForClock, 0, 12, 0, 360) - 90}deg)`
  minuteEl.style.transform = `rotate(${scale(minutes, 0, 60, 0, 360) - 90}deg)`
  secondEl.style.transform = `rotate(${scale(seconds, 0, 60, 0, 360) - 90}deg)`
  

  timeEl.innerHTML = `${hoursForClock === 0 ? 12 : hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`

  dateEl.innerHTML = `${days[day]} ${months[month]} <span class="circle">${date}</span>`
}

// Helper to map a number from one range to another
function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

setTime()
setInterval(setTime, 1000)
