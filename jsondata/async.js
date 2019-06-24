var spaceData;

function setup(){
    createCanvas(200,200);
    loadJSON("http://api.open-notify.org/astros.json",gotData,'jsonp');

}
function gotData(data){
spaceData = data;
    
}

function draw(){
    if(spaceData){

    randomSeed(4);
    background(0);
    stroke(255);
    line(x,0,x,height);
    x = x + 1;
    if(x > width){
        x = 0;
    }
  }

}