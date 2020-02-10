var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var bloks = [];

var bloksx = [];
var bloksy = [];
var level = 1;

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class Rect {
    constructor(w, h) {
        this.pos = new Vector();
        this.size = new Vector(w, h);
    }
}

class Ball extends Rect {
    constructor() {
        super(10,10);
        this.vel = new Vector;
    }
}

class Paddle extends Rect {
    constructor() {
        super(75,15)
    }
}
const ball = new Ball;
ball.pos.x = 50;
ball.pos.y = 300;
ball.vel.x = 100;
ball.vel.y = 100;

const paddleLeft = new Paddle;
paddleLeft.pos.x = canvas.clientWidth / 2 - (paddleLeft.size.x / 2);
paddleLeft.pos.y = canvas.clientHeight - (paddleLeft.size.x / 2);

let lastTime;
function callback(millis) {
    if (lastTime) {
        update((millis - lastTime) / 1000)
    }
    lastTime = millis;
    requestAnimationFrame(callback);
}





function addbloks(){
   
     
    for (let x = 0; x < 6; x++ ){
    for (let i = 0; i < 6; i++ ){
        var blok = new block;
        blok.pos.x = 10 + i * 100;
        blok.pos.y = 10 + x * 20;
    bloks.push(blok)
  
 bloksx.push(10 + i * 100)
 bloksy.push(10 + x * 20)
    }
}



}



function update(dt) {
    ball.pos.x += ball.vel.x * (dt*2);
    ball.pos.y += ball.vel.y * (dt*2);


    // Pretty much bounding the pong to canvas.
  

    if (ball.pos.x > paddleLeft.pos.x && ball.pos.x < paddleLeft.pos.x + 75   && ball.pos.y > paddleLeft.pos.y - 10 && ball.pos.y < paddleLeft.pos.y + 10 )  {

        ball.vel.y = -ball.vel.y
    }

   if (ball.pos.x < 0 || ball.pos.x > canvas.clientWidth) {
        ball.vel.x = -ball.vel.x;
       
    }
    if (ball.pos.y < 0 ) {
        ball.vel.y = -ball.vel.y;
       
    }

    if ( ball.pos.y > canvas.clientHeight) {
       
    }
  
    let b = ball.pos.y
console.log(bloks.length)
    for (let i = 0; i < bloks.length; i++ ){
        if (ball.pos.y > bloks[i].pos.y - 5 && ball.pos.y < bloks[i].pos.y +5 && ball.pos.x > bloks[i].pos.x && ball.pos.x < bloks[i].pos.x +75 ){
            ball.vel.y = -ball.vel.y
           bloks[i].pos.y = -20;
           bloks[i].pos.x = -20;
        }

    
    }
    
  
    
  

    context.fillStyle = "#000";
    context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);
    context.fillStyle = "blue";
  

    // Laver bloksne
    for (let i = 0; i <=35; i++ ){
    
        context.fillRect(bloks[i].pos.x, bloks[i].pos.y, bloks[i].size.x, bloks[i].size.y);
    
    }
    

   
    context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
    context.fillRect(paddleLeft.pos.x, paddleLeft.pos.y, paddleLeft.size.x, paddleLeft.size.y);
}

class block  extends Rect {
    constructor() {
        super(75,15)
    } 
}
class lvl1 {
    constructor() {
    
    }


}


canvas.addEventListener('mousemove', event => {
    const scale = event.offsetX / event.target.getBoundingClientRect().width;
    paddleLeft.pos.x = canvas.width * scale;
});

addbloks();
callback(); 

