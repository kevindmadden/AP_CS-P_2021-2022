import{testLog} from "./Other.js";

//Canvas API: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

testLog()

let prevTimeStamp = 0
window.requestAnimationFrame(gameLoop)
function gameLoop(currentTimeStamp) {
    let timeElapsed = (currentTimeStamp - prevTimeStamp) / 1000
    prevTimeStamp = currentTimeStamp


    window.requestAnimationFrame(gameLoop)
}



