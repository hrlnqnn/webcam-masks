let outputWidth;
let outputHeight;

let faceTracker;
let videoInput;

let imgLove;
let imgDevil;
let imgSecret;
let imgNeutral;
let imgHide;
let imgThinking;

let selected = -1;

function preload() {
    imgLove = loadImage("https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/512/external-love-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png");
    imgDevil = loadImage("https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/512/external-devil-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png");
    imgSecret = loadImage("https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/512/external-secret-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png");
    imgNeutral = loadImage("https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/512/external-neutral-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png");
    imgHide = loadImage("https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/512/external-hide-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png");
    imgThinking = loadImage("https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/512/external-thinking-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png");
}

function setup() {
    const maxWidth = Math.min(windowWidth, windowHeight);
    pixelDensity(1);
    outputHeight = maxWidth * 0.75;
    outputWidth = maxWidth;

    createCanvas(outputWidth, outputHeight)

    videoInput = createCapture(VIDEO);
    videoInput.size(outputWidth, outputHeight);
    videoInput.hide();

    const sel = createSelect();
    const selectList = ['Love', 'Devil', 'Secret', 'Neutral', 'Hide', 'Thinking'];
    sel.option('Select filter', -1);
    for (let i = 0; i < selectList.length; i++) {
        sel.option(selectList[i], i);
    }
    sel.changed(applyFilter);

    faceTracker = new clm.tracker();
    faceTracker.init();
    faceTracker.start(videoInput.elt)
}

function applyFilter() {
    selected = this.selected();
}

function draw() {
    image(videoInput, 0, 0, outputWidth, outputHeight);

    switch (selected) {
        case '-1': break;
        case '0': drawLove(); break;
        case '1': drawDevil(); break;
        case '2': drawSecret(); break;
        case '3': drawNeutral(); break;
        case '4': drawHide(); break;
        case '5': drawThinking(); break;
    }
}

function drawLove() {
    const positions = faceTracker.getCurrentPosition();
    if (positions !== false) {
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 2;
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][1], positions[20][1])) * 2;
        translate(-wx / 2, -wy / 2);
        image(imgLove, positions[62][0], positions[62][1], wx, wy);
        pop();
    }
}

function drawDevil() {
    const positions = faceTracker.getCurrentPosition();
    if (positions !== false) {
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 2;
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][1], positions[20][1])) * 2;
        translate(-wx / 2, -wy / 2);
        image(imgDevil, positions[62][0], positions[62][1], wx, wy);
        pop();
    }
}

function drawSecret() {
    const positions = faceTracker.getCurrentPosition();
    if (positions !== false) {
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 2;
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][1], positions[20][1])) * 2;
        translate(-wx / 2, -wy / 2);
        image(imgSecret, positions[62][0], positions[62][1], wx, wy);
        pop();
    }
}

function drawNeutral() {
    const positions = faceTracker.getCurrentPosition();
    if (positions !== false) {
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 2;
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][1], positions[20][1])) * 2;
        translate(-wx / 2, -wy / 2);
        image(imgNeutral, positions[62][0], positions[62][1], wx, wy);
        pop();
    }
}

function drawHide() {
    const positions = faceTracker.getCurrentPosition();
    if (positions !== false) {
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 2;
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][1], positions[20][1])) * 2;
        translate(-wx / 2, -wy / 2);
        image(imgHide, positions[62][0], positions[62][1], wx, wy);
        pop();
    }
}

function drawThinking() {
    const positions = faceTracker.getCurrentPosition();
    if (positions !== false) {
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 2;
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][1], positions[20][1])) * 2;
        translate(-wx / 2, -wy / 2);
        image(imgThinking, positions[62][0], positions[62][1], wx, wy);
        pop();
    }
}

function windowResized() {
    const maxWidth = Math.min(windowWidth, windowHeight);
    pixelDensity(1);
    outputHeight = maxWidth * 0.75;
    outputWidth = maxWidth;
    resizeCanvas(outputHeight, outputWidth);
}