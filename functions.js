function ladder() {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function ladder4() {
    x1 = 320;
    y1 = 920;
    x2 = 520;
    y2 = 810;
    ladder();
    x1, y1 += 50;
    x2, y2 += 50;
    ladder();
}
function ladderRungs4() {
    x1 = 330;
    y1 = 918;
    x2 = x1;
    y2 = 970;
    for (let n = 1; n <= 6; n++) {
        x1 += 25;
        x2 = x1;
        y1 -= 15;
        y2 -= 15;
        ladder();
    }
}
function ladder9() {
    x1 = 812;
    y1 = 950;
    x2 = 915;
    y2 = 640;
    ladder();
    x1 += 50;
    x2 += 50;
    ladder();
}
function ladderRungs9() {
    x1 = 822;
    y1 = 930;
    x2 = 872;
    y2 = 930;
    for (let n = 1; n <= 10; n++) {
        x1 += 8;
        x2 += 8;
        y1 -= 25;
        y2 -= 25;
        ladder();
    }
}

function ladder21() {
    x1 = 25;
    y1 = 770;
    x2 = 120;
    y2 = 540;
    ladder();
    x1 += 50;
    x2 += 50;
    ladder();
}
function ladderRungs21() {
    x1 = 32;
    y1 = 762;
    x2 = 85;
    y2 = 762;
    for (let n = 1; n <= 8; n++) {
        x1 += 9;
        x2 += 9;
        y1 -= 25;
        y2 -= 25;
        ladder();
    }
}

function ladder28() {
    x1 = 730;
    y1 = 775;
    x2 = 210;
    y2 = 130;
    ladder();
    x1 += 60;
    x2 += 60;
    ladder();
}
function ladderRungs28() {
    x1 = 710;
    y1 = 750;
    x2 = 770;
    y2 = 750;
    for (let n = 1; n <= 24; n++) {
        x1 -= 20;
        x2 -= 20;
        y1 -= 25;
        y2 -= 25;
        ladder();
    }
}

function ladder60() {
    x1 = 910;
    y1 = 470;
    x2 = 620;
    y2 = 350;
    ladder();
    x1 += 70;
    x2 += 70;
    ladder();
}
function ladderRungs60() {
    x1 = 888;
    y1 = 460;
    x2 = 950;
    y2 = 460;
    for (let n = 1; n <= 7; n++) {
        x1 -= 36;
        x2 -= 36;
        y1 -= 15;
        y2 -= 15;
        ladder();
    }
}

function ladder73() {
    x1 = 220;
    y1 = 280;
    x2 = 20;
    y2 = 60;
    ladder();
    x1 += 70;
    x2 += 70;
    ladder();
}
function ladderRungs73() {
    x1 = 205;
    y1 = 263;
    x2 = 274;
    y2 = 263;
    for (let n = 1; n <= 7; n++) {
        x1 -= 23;
        x2 -= 22;
        y1 -= 25;
        y2 -= 25;
        ladder();
    }
}

function ladder80() {
    x1 = 920;
    y1 = 265;
    x2 = 720;
    y2 = 45;
    ladder();
    x1 += 70;
    x2 += 70;
    ladder();
}
function ladderRungs80() {
    x1 = 904;
    y1 = 246;
    x2 = 970;
    y2 = 246;
    for (let n = 1; n <= 7; n++) {
        x1 -= 23;
        x2 -= 22;
        y1 -= 25;
        y2 -= 25;
        ladder();
    }
}
//////////////SNAKES///////////////////////////////////////////////////////
function snake() {
    ctx.lineWidth = 30;
    ctx.strokeStyle = "rgb(20, 255, 50, 0.9)";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function snake14() {
    x1 = 333;
    y1 = 850;
    x2 = 619;
    y2 = 930;
    snake();
    ctx.fillStyle = "rgb(20, 255, 50, 0.9)";
    ctx.beginPath();
    ctx.moveTo(606, 957);
    ctx.lineTo(620, 902);
    ctx.lineTo(650, 940);
    ctx.fill();
}

function snake57() {
    x1 = 640;
    y1 = 436;
    x2 = 640;
    y2 = 655;
    snake();
    ctx.fillStyle = "rgb(20, 255, 50, 0.9)";
    ctx.beginPath();
    ctx.moveTo(605, 650);
    ctx.lineTo(679, 650);
    ctx.lineTo(640, 685);
    ctx.fill();
}

function snake62() {
    x1 = 138;
    y1 = 350;
    x2 = 138;
    y2 = 855;
    snake();
    ctx.fillStyle = "rgb(20, 255, 50, 0.9)";
    ctx.beginPath();
    ctx.moveTo(110, 850);
    ctx.lineTo(170, 850);
    ctx.lineTo(140, 888);
    ctx.fill();
}

function snake64() {
    x1 = 340;
    y1 = 345;
    x2 = 37;
    y2 = 460;
    snake();
    ctx.fillStyle = "rgb(20, 255, 50, 0.9)";
    ctx.beginPath();
    ctx.moveTo(44, 427);
    ctx.lineTo(62, 487);
    ctx.lineTo(18, 472);
    ctx.fill();
}

function snake87() {
    x1 = 640;
    y1 = 150;
    x2 = 440;
    y2 = 665;
    snake();
    ctx.fillStyle = "rgb(20, 255, 50, 0.9)";
    ctx.beginPath();
    ctx.moveTo(418, 652);
    ctx.lineTo(471, 672);
    ctx.lineTo(430, 692);
    ctx.fill();
}

function snake88() {
    x1 = 743;
    y1 = 140;
    x2 = 743;
    y2 = 263;
    snake();
    ctx.fillStyle = "rgb(20, 255, 50, 0.9)";
    ctx.beginPath();
    ctx.moveTo(718, 260);
    ctx.lineTo(768, 260);
    ctx.lineTo(744, 290);
    ctx.fill();
}

function snake93() {
    x1 = 230;
    y1 = 54;
    x2 = 135;
    y2 = 263;
    snake();
    ctx.fillStyle = "rgb(20, 255, 50, 0.9)";
    ctx.beginPath();
    ctx.moveTo(118, 252);
    ctx.lineTo(160, 270);
    ctx.lineTo(125, 286);
    ctx.fill();
}

function snake97() {
    x1 = 630;
    y1 = 50;
    x2 = 540;
    y2 = 263;
    snake();
    ctx.fillStyle = "rgb(20, 255, 50, 0.9)";
    ctx.beginPath();
    ctx.moveTo(514, 253);
    ctx.lineTo(568, 273);
    ctx.lineTo(527, 294);
    ctx.fill();
}