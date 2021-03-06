// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
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
    this.x += this.speed * dt;
    if (this.x > 505) {
        this.x = 0;
    }

    this.collide(); //calls the collide method
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
//checking collision between player and the bug
Enemy.prototype.collide = function() {



    if ((player.y + 131 >= this.y + 90) && (player.x + 25 <= this.x + 88) && (player.y + 73 <= this.y + 135) && (player.x + 76 >= this.x + 11)) {
        console.log('collided');
        player.x = 202.5;
        player.y = 383;
    }

};

//   player class
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = "images/char-boy.png";
};
Player.prototype.update = function(dt) {
    //reset the player when reaching the water
    if (this.y <= 40) {
        this.x = 202.5;
        this.y = 383;
        console.log('you made it!');
    }
    //limit the player movement beyond the walls
    if (this.x > 402.5) {
        this.x = 402.5;
    }
    if (this.x < 1) {
        this.x = 1;
    }
    if (this.y > 400) {
        this.y = 400;
    }



};
//checking collisions between player and the enemy

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//a handleInput method for player controls
Player.prototype.handleInput = function(keyCodes) {

    if (keyCodes === 'up') {
        this.y -= 80;

    } else if (keyCodes === 'down') {
        this.y += 80;
    } else if (keyCodes === 'left') {
        this.x -= 89;
    } else if (keyCodes === 'right') {
        this.x += 89;
    }

};

// This class requires an update(), render() and
// a handleInput() method.




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player




//creating a new player
var player = new Player(200, 383, 50);
//creating array of enemy objects
var allEnemies = [];



//pushing the enemy objects to the allEnemies array

allEnemies.push(new Enemy(0, 220, Math.random() * 256));
allEnemies.push(new Enemy(0, 50, Math.random() * 256));
allEnemies.push(new Enemy(0, 140, Math.random() * 256));




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
