//Prototypes enable to add properties to the function

function player(){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + "gave life to " + targetPlayer.name);
    }
}

var andrew = new player();
var andy = new player();
andrew.name = "andrew";
andy.name = "andy";



andrew.giveLife(andy);
console.log("andrew:" + andrew.life);
console.log("andy:" + andy.life);

player.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + "just uppercutted" + targetPlayer.name);
};

andy.uppercut(andrew);
console.log("andrew" + andrew.life);
console.log("andy" + andy.life);

player.prototype.magic = 60;
console.log(andrew.magic);
console.log(andy.magic);
