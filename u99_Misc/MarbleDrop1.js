/*
  Properties you can change 
*/
let shouldConstantlyChangeGravity = false //options: true, false
let showCenterOfMass = true //options: true, false (setting it to false will get rid of the white dots that show where the center of mass is located)
let centerOfMassSize = 5 //options: any number (this sets the size of the radius for the dot that shows the center of mass)
let gravityStrength = 1 //options: any number (this sets the strength of the gravity; you can put a negative value here to make the gravity be upside down)
let showWireFrames = false //options: true, false
let restitution = 0 //options: any number (this sets how bouncy the marbles are; a value of 0 means the mables will not bounce; a value of 1 makes the marbles really bouncy)

function addNewStuff(){
    /*
        Your code.
    */
    addTriangle(0, 675, cos(110), sin(110), 1000, "#ffc9c9") //example of adding a triangle (in a useless spot though!)
    addRectangle(400, 677, 600, 50, "#FFFF00")
    addRectangle(700, 677, 50, 225, "#ffc9c9")






    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    addMarble(60,4,10, "#8ae6ff")
    /*
      Your code stops here.
      STOP  STOP  STOP  STOP  STOP  STOP  STOP  STOP  STOP  STOP  
      Don't change anything below here.
    */

}



let generatedTriangles = []
let marbleCoordinates = []
let marbles = []

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

function addRectangle(xCenterOfMass, yCenterOfMass, width, height, color="green"){
    generatedTriangles.push(
        Bodies.rectangle(xCenterOfMass, yCenterOfMass, width, height, {
            isStatic: true,
            render: {
                fillStyle: color
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
            wireframes: showWireFrames,
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
        let tempCircle = Bodies.circle(
            marbleCoordinates[i],
            marbleCoordinates[i+1],
            radius, {
                render: {
                    fillStyle: color,
                }
            }
        )
        tempCircle.friction = 0
        tempCircle.frictionAir = 0.0005
        tempCircle.restitution = restitution
        marbles.push(tempCircle)
        World.add(engine.world, tempCircle)
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
})