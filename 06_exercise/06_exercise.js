
let day = ["Monday","Thursday","Saturday","Wednesday","Tuesday"]
let lastValue = "";

lastValue = getLastValue()

function getLastValue() {
    day.sort()
    return day[day.length-1]   
}
console.log(lastValue)
