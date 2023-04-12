


//Crear espacio de nombre para Engine
const Engine = Matter.Engine;
//Crear espacio de nombre para World
const World = Matter.World;
//Crear espacio de nombre para Bodies
const Bodies = Matter.Bodies;
//Crear espacio de nombre para Body
const Body = Matter.Body;


function setup() {
  createCanvas(400,400);
//crear engine
  //Agregar world a engine
   engine = Engine.create();
   world = engine.world 

   //nos ayuda a crear cuerpo circular y aplicar la propiedad restitution 
  // y friccion en el aire para que la pelota se mueva sola
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crear un fondo
ground = Bodies.rectangle (100,400,400,20,ground_options)
World.add(world,ground);

//agregarlo a world
//crear figura de circulo y añadirla a World(nuestra Pantalla)
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 ellipse(ball.position.x,ball.position.y,20)
 rect(ground.position.x,ground.position.y,500,20)


  
  
}

