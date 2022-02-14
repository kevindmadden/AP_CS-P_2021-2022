//    addMarble(xPos, yPos, radius)

//    generateTriangle(xPos, yPos, xRatio, yRatio, dilationFactor)
//      Note: The yPos values work weirdly. (0,0) is in the top left corner. So (0,150) is 150 pixels down from the top left corner. As you increase y, you move further *down*.
function addNewStuff(){
    shouldConstantlyChangeGravity = false
    showCenterOfMass = true
    gravityStrength = 1

    /*
        Your code goes below.
    */
    addMarble(30,20,10, "#FF10F0")
    addTriangle(20, 200, cos(160), sin(160), 400, "#FFFF00")



    /*
      Your code stops here.
    */
}

let generatedTriangles = []
let marbleCoordinates = []
let shouldConstantlyChangeGravity = false
let showCenterOfMass = true
let centerOfMassSize = 5
let gravityStrength = 1

function cos(degrees){
    return Math.cos(toRadians(degrees))
}

function sin(degrees){
    return Math.sin(toRadians(degrees))
}
function addMarble(xCoord, yCoord, radius, color=['#EA1070', '#EAC03C', '#25DDBC', '#007DB0', '#252B7F', '#FF6040'][Math.round(Math.random() * 6 - 0.5)]){
    marbleCoordinates.push(xCoord, yCoord, radius, color)
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Vertices = Matter.Vertices;

let engine = Engine.create();

function addTriangle(xCenterOfMass, yCenterOfMass, xRatio, yRatio, dilationFactor, color="blue"){
    //xCenterOfMass = xCenterOfMass*-1
    //yCenterOfMass = yCenterOfMass*-1
    //xRatio = xRatio*-1
    yRatio = yRatio*-1
    let coordinates = "0 0 "+xRatio*dilationFactor+" 0 "+xRatio*dilationFactor+" "+yRatio*dilationFactor;
    console.log(coordinates)
    generatedTriangles.push(Bodies.fromVertices(xCenterOfMass, yCenterOfMass, Vertices.fromPath(coordinates),{
        isStatic: true,
        render : {
            fillStyle: color,
        }
    }))
    if(showCenterOfMass){
        generatedTriangles.push(Bodies.circle(xCenterOfMass, yCenterOfMass, centerOfMassSize, {
            isStatic: true,
            isSensor: true,
            render: {
                fillStyle: "white"
            }
        }))
    }


}


/*Bodies.fromVertices(200, 200, Vertices.fromPath('50 0 63 38 100 38'),{
      isStatic: true,
      render: {
      fillStyle: "yellow"
    }
    })*/

function init() {
    let numm = Math.random();
    $("canvas").remove();

    let width = $(window).width();
    let height = $(window).height();
    let vmin = Math.min(width, height);

    engine.events = {};
    World.clear(engine.world);
    Engine.clear(engine);

    engine = Engine.create();

    let render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            wireframes: false,
            background: 'transparent',
            width: width,
            height: height
        }
    });
    addNewStuff()

    World.add(engine.world, [
        Bodies.rectangle(width / 2, height + 50, width, 100, {
            isStatic: true
        }),
        Bodies.rectangle(width / 2, -50, width, 100, {
            isStatic: true
        }),
        Bodies.rectangle(-50, height / 2, 100, height, {
            isStatic: true
        }),
        Bodies.rectangle(width + 50, height / 2, 100, height, {
            isStatic: true
        }),
        /*Bodies.fromVertices(400, 400, Vertices.fromPath('50 0 63 38 100 38'),{
          isStatic: true,
          render: {
          fillStyle: "yellow"
        }
        }),*/
    ].concat(generatedTriangles));

    for (let i = 0; i < marbleCoordinates.length; i+=4) {
        let color = marbleCoordinates[i+3]
        let radius = marbleCoordinates[i+2]//Math.round(10 + (Math.random() * vmin / 30));
        /*var color = '#'
        var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        for (var j = 0; j < 6; j++) {
          color = color + chars[Math.round(Math.random() * 16 - 0.5)];
        }*/
        World.add(engine.world, Bodies.circle(
            marbleCoordinates[i],
            marbleCoordinates[i+1],
            radius, {
                render: {
                    fillStyle: color,
                }
            }
        ))
    }

    Engine.run(engine);

    Render.run(render);
    let num = 0;
    function update() {
        engine.world.gravity.x = Math.sin(num / 100)*gravityStrength;
        engine.world.gravity.y = Math.cos(num / 100)*gravityStrength;
        if(shouldConstantlyChangeGravity){
            num += 1.7; //NOTE: Uncommenting this line will make gravity constantly switch
        }
        idRAF = requestAnimationFrame(update.bind(this));
    }
    update();
}

init();

$(window).resize(function() {
    init();
});