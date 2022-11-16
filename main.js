function preload () {
} 
function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110,300);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
image(video,0,0,640,480);
tint(tint_color);
}
function take_snapshot(){
    save('snapchat_filter_ig.png');
}
function change_color(){
tint_color=document.getElementById("color_name").value;
}
