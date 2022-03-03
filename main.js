
function setup(){
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    
}
function draw(){
    image(video, 100, 100, 400, 300);
    fill("black");
   circle(70,70,25);
   circle(550,70,25);
   circle(70,430,25);
   circle(550,430,25);
  fill("red");
 rect(85, 60, 450, 25);
 rect(60, 85, 25, 330);
 rect(537, 85, 25, 330);
 rect(85, 425, 450, 25);

}
function take_snapshot(){
   save('rasesh.png');

}


  