/* This function is called once, when the page loads. Anything that you want to show up initially should be created here! To start out, try drawing some shapes. */
function setup() {
    createCanvas(800, 600)
}

var x = 100
var y = 100
var velocityY = 0
var velocityX = 0
var prevVelX = 0
var prevVelY = 0
var score = 0

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
/* This function is called over and over again by P5. Animation should happen here! */
function draw() {

    background(0)
    ellipse(x, y, 40, 40)
    x += velocityX
    y += velocityY
    velocityX * 1.005
    velocityY * 1.005
    if (velocityX != 0 && velocityY != 0) {
        score++

    }
    if (y > 600) {
        if (velocityX != 0 && velocityY != 0) {
            background(255, 0, 0)
        }
        if (velocityY > 20 || velocityY == 0) {
            velocityX = 0
            velocityY = 0

        } else {
            velocityY = -1.5 * velocityY
        }
    }
    if (y < 0) {
        if (velocityX != 0 && velocityY != 0) {
            background(255, 0, 0)
        }
        if (velocityY < -20 || velocityY == 0) {
            velocityX = 0
            velocityY = 0


        } else {
            velocityY = -1.5 * velocityY
        }
    }
    if (x < 0) {
        if (velocityX != 0 && velocityY != 0) {
            background(255, 0, 0)
        }
        if (velocityX < -20 || velocityX == 0) {
            velocityX = 0
            velocityY = 0


        } else {
            velocityX = -1.5 * velocityX
        }

    }
    if (x > 800) {
        if (velocityX != 0 && velocityY != 0) {
            background(255, 0, 0)
        }
        if (velocityX > 20 || velocityX == 0) {
            velocityX = 0
            velocityY = 0


        } else {
            velocityX = -1.5 * velocityX
        }

    }
    if (velocityX == 0 && velocityY == 0 && x != 100) {
        textSize(25);
        fill(255)
        text("Game Over!", 50, 100);
        text("Press R to Reset", 50, 150);

    }


    var scoreDisplay = score.toString()
    console.log(score)
    document.getElementById("score").textContent = "Score:" + score;


}



function keyPressed() {
    if (keyCode === 65) {
        if (velocityX > 0) {
            velocityX = -velocityX * 1.05
        }

    }
    if (keyCode === 68) {
        if (velocityX < 0) {
            velocityX = -velocityX * 1.05
        }
    }
    if (keyCode === 87) {
        if (velocityY > 0) {
            velocityY = -velocityY * 1.05
        }
    }
    if (keyCode === 83) {
        if (velocityY < 0) {
            velocityY = -velocityY * 1.05
        }

    }
    if (keyCode === 82) {
        x = 100
        y = 100
        velocityY = 0
        velocityX = 0
        score = 0

    }
    if (keyCode === 13) {
        if (velocityX == 0 && velocityY == 0 && x == 100) {
            velocityY = 2
            velocityX = 2

        }
    }
    if (keyCode === 67) {
        var min = Math.ceil(0);
        var max = Math.floor(255);


        fill(Math.floor(Math.random() * (max - min)) + min, Math.floor(Math.random() * (max - min)) + min, Math.floor(Math.random() * (max - min)) + min)
    }
}