/*let xCoord = 0
let yCoord = 0
export function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    xCoord = event.clientX - rect.left
    yCoord = event.clientY - rect.top
    console.log("x: " + xCoord + " y: " + yCoord)
    document.getElementById("coordinateValues").innerHTML = "Coordinates - x: "+xCoord+", y: "+yCoord
}

canvas.addEventListener('mousemove', function(e) {
    getCursorPosition(canvas, e)
})*/

export function testLog(){
    console.log("test")
}