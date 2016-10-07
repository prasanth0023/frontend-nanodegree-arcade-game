// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x=x;
    this.y=y;
    this.speed=speed;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x+=this.speed *dt;
    if(this.x>505){
      this.x=0;
   }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Now write your own player class
var Player = function(x,y,speed){
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.sprite="images/char-boy.png";
}
Player.prototype.update=function(dt){
   if (player.y <= 40) {
        player.x = 202.5;
        player.y = 383;
        console.log('you made it!');
     }


};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(keyCodes){

     if (keyCodes==='up'){
       this.y-=80;

   }
   else if (keyCodes==='down') {
      this.y+=80;
   }
   else if (keyCodes==='left') {
      this.x-=89;
   }
   else if (keyCodes==='right') {
      this.x+=89;
   }

}

// This class requires an update(), render() and
// a handleInput() method.




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player






 var player =new Player(200,383,50);
 var allEnemies=[];
 var enemy = new Enemy(0, 220 , Math.random() * 256);
 allEnemies.push(enemy);
console.log(enemy);








// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
