/*
flower.json
{
    "name" : sunflower
    "red" 255,
    "green": 200,
    "blue " : 0

}
*/

var flower;

function preload(){
    flower = loadJSON("flower.json");
}



function setup(){
  createCanvas(400,400);
  var flower = load.JSON("flower.json");

   /* flower ={
     //   name: "sunFlower",
       */
    }
}

function draw(){
    background(0);

    fill(flower.r,flower.g,flower.b);
    text(flower.name,10,50);
}