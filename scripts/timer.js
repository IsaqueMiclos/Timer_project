//Timer

let startBtn = document.getElementById("startButton")

function pickDuration() {
    let hours = document.getElementById("hours").value
    let minutes = document.getElementById("minutes").value

    let newDuration = Number((Number(hours) * 60) + Number(minutes)) * 60 
    console.log(`Duration: ${newDuration} seconds`)

    if (!newDuration == 0) {
        if (hours <= 72 && minutes <= 59) {
            if (!counter >= 1) {
                startTimer(newDuration)  
            } else if (counter == 7) {
                startBtn.textContent = "Start"
                duration = 2
                startTimer(currentDuration)
            }
        } else {
            alert("Error, please check the infos.")
        }
    } else {
        alert("Error, please check the informations.")
    }
}

let interval
let counter = 0

function startTimer(duration) {
    counter++
    let timer = duration
    const display = document.getElementById("view")
    
    function timerCounter() {
        timer--
        currentDuration = timer

        let hours = parseInt(timer/3600, 10)
        let minutes = parseInt(timer/60, 10)
        let seconds = parseInt(timer % 60, 10)

        if (hours == 1 && minutes > 60 && minutes < 120) {
            minutes -= 60
        }
        
        if (minutes == 60) {
            hours = 1
            minutes = 1
        }

        if (minutes >= 120) {
            if (minutes > 120) {
                minutes = minutes - (hours * 60)
            }
        }
        
        if (parseInt(minutes) == 119) {
            minutes = 59
        }

        
        if (seconds >= 60)
        seconds = 59

        if (timer <= 0) {
            timer = 0;
            alert("Time over!")
            stopTimer()
        }

        display.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
        document.title = `Time : ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
    }

    timerCounter()
    interval = setInterval(timerCounter, 1000)
}

function stopTimer() {
    clearInterval(interval)
    counter = 0
    startBtn.textContent = "Start";
    document.title = "Timer-Online"
}

var currentDuration = 0 

function pauseTimer() {
    if (counter >= 1) {
        stopTimer()
        counter = 7
        startBtn.textContent = "Return";
    }
}

//Day and Night button

function DayAndNightMode() {
    let btn = document.getElementById("DayNightButton")

    if (btn.innerHTML == `<i class="bi bi-brightness-alt-high"></i>`) {
        btn.innerHTML = `<i class="bi bi-moon"></i>`
    }

    if (btn.innerHTML == `<i class="bi bi-moon"></i>`) {
        btn.innerHTML = `<i class="bi bi-brightness-alt-high"></i>`
    }
}