const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var solo, bola, quadrado;
var parado;
var mexendo;


function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;


    parado = {
        isStatic:
    };
    mexendo = {
        isStatic:
    };

    bola = Bodies.circle();
    World.add(world, bola);
    solo = Bodies.rectangle()
    World.add(world, );

    rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
    background("blue");
    Engine.update(engine);

    rect(solo.position.x, solo.position.y, 400, 20);
    ellipse(bola.position.x, bola.position.y, 40);







}