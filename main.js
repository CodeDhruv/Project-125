leftWristX = 0;
rightWristX = 0;
differnce = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#03fcb5")
    document.getElementById("square_side").innerHTML = "The Font size of the text will be = "+differnce+" px";
    fill("#fffff");
    textSize(differnce);
    text("Dhruv", 50, 400);
}
function modelLoaded(){
    console.log("PoseNet modalLoaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        differnce = floor(leftWristX - rightWristX);

        console.log("Left Wrist X = "+leftWristX+" Right Wrist X = "+rightWristX+" difference = "+ differnce);

    }
}