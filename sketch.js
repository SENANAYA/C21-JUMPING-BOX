var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

// function preload(){
//     music = loadSound("music.mp3");
// }


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
  //  var tet=f
    background(169,169,169);
  edges=createEdgeSprites();
     ball.bounceOff(edges);

// bounce(block2,ball)
// bounce(block3,ball)
// bounce(block4,ball)
//Text(ball.isTouching(block1),200,200)
    if(touch(block1,ball)){
       // ball.x=1000
      // ball.bounceOff(block1)
       bounce(block1,ball)
        ball.shapeColor = "blue";
        // music.play();
    }else if(touch(block2,ball)){
        // ball.x=1000
        bounce(block2,ball)
         ball.shapeColor = "orange";
         // music.play();
     }else if(touch(block3,ball)){
        // ball.x=1000
        bounce(block3,ball)
         ball.shapeColor = "red";
         // music.play();
     }else if(touch(block4,ball)){
        // ball.x=1000
        bounce(block4,ball)
         ball.shapeColor = "green";
         // music.play();
     }
    // if(block2.isTouching(ball)){
    //     ball.shapeColor = "orange";
    //     ball.velocityX = 0;
    //     ball.velocityY = 0;
        
    //     //music.stop;
    //     //music=stop();
    //     music.play();
    //     //stop(music);
    // }

    // if(block3.isTouching(ball) ){
    //     ball.shapeColor = "red";
    //     music.play();
    // }

    // //if(block4(ball) && ball(block4)){
    // //    ball.shapeColor = "green";
    // //}

    // //if(block4.isTouching(ball)  ball.bounceOff(block4)){
    // //    ball.shapeColor = "green";
    // //}

    // if(block4.isTouching(ball) ){
    //    ball.shapeColor = "green";
    //    music.play()
    // }

    //if(block4.isTouching(ball) && ball.bounceOff(block4)){
    //    ball.shapeColor = "green";
    //}

    drawSprites();
}
function bounce(object1,object2){

            if( object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
  }else     if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
object1.velocityX=object1.velocityX*(-1);
object2.velocityX=object2.velocityX*(-1);
    }
  }
  function touch(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
  return true
      }else{
          return false
      }
     
  }