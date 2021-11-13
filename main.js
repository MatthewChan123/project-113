function preload() {

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(300, 2000);
    video = createCapture(VIDEO);
}
function draw() {
    
}
function take_snapshot() {
    save('your_picture.png')
}