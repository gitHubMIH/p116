narizX=0;
narizY=0;
function preload() {
 nariz=loadImage("https://i.postimg.cc/xjxgf7Zq/R-removebg-preview.png");
}
function setup() {
  canvas=createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}
  function modelLoaded() {
    console.log("poseNet foi inicializado");
  }
  function gotPoses(results)
  {
  if (results.length>0){
    console.log(results);
    narizX=results[0].pose.nose.x-50;
    narizY=results[0].pose.nose.y-50;
  }
  }
function draw() {
    image(video, 0, 0, 300, 300);
    image(nariz, narizX, narizY, 50, 10);
}
function takeSnapshot() {
  save("fotoDePalhaço.png");
}


