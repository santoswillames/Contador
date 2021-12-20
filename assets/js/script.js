const currentNumberWrapper = document.getElementById("currentNumber")
const butIncrement = document.getElementById("increment")
const butDecrement = document.getElementById("decrement")
const butReset = document.getElementById("reset")
let currentNumber = 0

butIncrement.addEventListener('click', increment)
butDecrement.addEventListener('click', decrement)
butReset.addEventListener('click', reset)

function increment(){
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber
    if(currentNumber >= 10){
        butIncrement.disabled = true
    }
    if(currentNumber >= 0){
        currentNumberWrapper.style.color = "black"
    }
    butDecrement.disabled = false
}

function decrement(){
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber
    if(currentNumber <= -10){
        butDecrement.disabled = true
    }
    if(currentNumber <= -1){
        currentNumberWrapper.style.color = "red"
    }
    butIncrement.disabled = false
}

function reset(){
    currentNumber = 0
    currentNumberWrapper.innerHTML = currentNumber
    currentNumberWrapper.style.color = "black"
    butIncrement.disabled = false
    butDecrement.disabled = false
}
