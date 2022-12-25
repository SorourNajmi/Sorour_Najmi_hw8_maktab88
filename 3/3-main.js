const parentElem = document.getElementById("parent");
const childElem = document.getElementById("child");
const targetElem = document.getElementById("target");
const parentBtn = document.getElementById("copyParent");
const childBtn = document.getElementById("copyChild");
const mainDiv = document.getElementById("main");
const targetDiv = document.getElementById("middle");
const lastDiv = document.getElementById("last");

parentElem.style.marginTop = "0";
targetElem.style.marginTop = "0";
childElem.style.marginTop = "0";

mainDiv.style.width = "700px";
mainDiv.style.height = "500px";
mainDiv.style.backgroundColor = "chartreuse";
mainDiv.style.border = "2px solid black";
targetDiv.style.width = "550px";
targetDiv.style.height = "400px";
targetDiv.style.marginTop = "30px"
targetDiv.style.marginLeft = "30px"
targetDiv.style.backgroundColor = "lawngreen";
targetDiv.style.border = "2px solid black";
lastDiv.style.width = "400px";
lastDiv.style.height = "200px";
lastDiv.style.marginTop = "80px";
lastDiv.style.marginLeft = "30px";
lastDiv.style.backgroundColor = "lawngreen";
lastDiv.style.border = "2px solid black";
parentBtn.style.marginTop = "30px";
parentBtn.style.marginRight = "10px";
childBtn.style.marginTop = "30px";

parentBtn.onclick = function() {
    const targetText = targetElem.innerText;
    const childText = childElem.innerText;
    const parentText = parentElem.innerText;
    targetElem.innerText = `${parentText} ${targetText} ${childText} ${targetText}`;
}
childBtn.onclick = function() {
    const targetText = targetElem.innerText;
    const childText = childElem.innerText;
    targetElem.innerText = `${childText} ${targetText}`;
}