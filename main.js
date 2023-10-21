function preload() {

}

function setup() {
    canvas= createCanvas(650,400)
    canvas.position(500, 300)
    video= createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video, 0, 0, 650, 400)
}
