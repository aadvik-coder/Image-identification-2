Waddles = "";
Controller = "";
Watch = "";
Rubiks = "";
Mouse = "";
object = "";
function preload(){
    Waddles = loadImage("Waddles.png");
    Controller = loadImage("Controller.png");
    Watch = loadImage("Watch.png");
    Rubiks = loadImage("Rubik's.png");
    Mouse = loadImage("Mouse.png");
}
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("status").style.background = "linear-gradient(#6e63ff 0%, #7930ff)";
    
}
function modelLoaded(){
    console.log("Model Loaded1!!!");
}
function gotRessult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    object = results;
}