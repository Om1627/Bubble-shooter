var p;
var size;
var heading;
var pVel;
var force;
var boostColor;
var touch;
var playerColor;
var Score;
var Health;

function updatePlayer() {
    boostColor = color(0)
  p.x=mouseX
        //move and rotate player 

    if (keyIsDown(LEFT_ARROW)) {
        heading -= 6;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        heading += 6;
    }
    

    //contain player
    if (p.x > 400) {
        p.x = 0
    }
    if (p.x < 0) {
        p.x = 400
    }
    if (p.y > 400) {
        p.y = 0
    }
    if (p.y < 0) {
        p.y = 400
    }



    //update player location
    pVel.mult(0.978);
    p.add(pVel);
    //draw the player
    push();
    translate(p.x, p.y);
    rotate(radians(heading));
    //flame stuff

    fill(boostColor)
    triangle(-size + 2, size * .7, -size * 3.5, size / 7, size * -.7, -size * .7);
    //health


    fill(playerColor);
    rect(-size + 1, -size + 1, size + 10,  size + 10);
    pop();
    fill(255);
    text(Health, p.x - 10, p.y + 25)

    fill(255);
    text(Score, 25, 25);

}