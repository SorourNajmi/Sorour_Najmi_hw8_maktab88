const myBody = document.body;
myBody.onmousemove = followCursorPosition;
const xMouseSpan = document.getElementById("xMouse");
const yMouseSpan = document.getElementById("yMouse");
const myDot = document.getElementById("dot");
const xDotSpan = document.getElementById("xDot");
const yDotSpan = document.getElementById("yDot");
const xDotRedSpan = document.getElementById("xDotRed");
const yDotRedSpan = document.getElementById("yDotRed");
const xDotBlackSpan = document.getElementById("xDotBlack");
const yDotBlackSpan = document.getElementById("yDotBlack");
const redPara = document.getElementById("redPara");
const blackPara = document.getElementById("blackPara");
redPara.style.display = "none";
blackPara.style.display = "none";
function followCursorPosition(event) {
    let xCursor = event.clientX;
    let yCursor = event.clientY;
    xMouseSpan.innerText = xCursor;
    yMouseSpan.innerText = yCursor;
    const dotTop = 20;
    const dotLeft = -20;
    myDot.style.top = `${yCursor + dotTop}px`;
    myDot.style.left = `${xCursor + dotLeft}px`;
    xDotSpan.innerText = `${xCursor + dotLeft}`;
    yDotSpan.innerText = `${yCursor + dotTop}`;
    const redLeft = 300;
    const redTop = 220;
    const redWidth = 260;
    const redHeight = 200;
    const xLimitRed1 = redLeft - dotLeft;
    const xLimitRed2 = redLeft + redWidth - dotLeft;
    const yLimitRed1 = redTop - dotTop;
    const yLimitRed2 = redTop + redHeight - dotTop;
    const xInRed = xCursor >= xLimitRed1 && xCursor <= xLimitRed2;
    const yInRed = yCursor >= yLimitRed1 && yCursor <= yLimitRed2;
    const blackLeft = 700;
    const blackTop = 220;
    const blackWidth = 260;
    const blackHeight = 200;
    const xLimitBlack1 = blackLeft - dotLeft;
    const xLimitBlack2 = blackLeft + blackWidth - dotLeft;
    const yLimitBlack1 = blackTop  - dotTop;
    const yLimitBlack2 = blackTop + blackHeight - dotTop;
    const xInBlack = xCursor >= xLimitBlack1 && xCursor <= xLimitBlack2;
    const yInBlack = yCursor >= yLimitBlack1 && yCursor <= yLimitBlack2;
    if (xInRed && yInRed) {
        myDot.style.backgroundColor = "black";
        redPara.style.display = "";
        blackPara.style.display = "none";
        xDotRedSpan.innerText = `${xCursor - 20 - 300}`;
        yDotRedSpan.innerText = `${yCursor + 20 - 220}`;
    } else if (xInBlack && yInBlack) {
        myDot.style.backgroundColor = "red";
        redPara.style.display = "none";
        blackPara.style.display = "";
        xDotBlackSpan.innerText = `${xCursor - 20 - 700}`;
        yDotBlackSpan.innerText = `${yCursor + 20 - 220}`;
    } else {
        myDot.style.backgroundColor = "blue";
        redPara.style.display = "none";
        blackPara.style.display = "none";
    }
}