const myDiv = document.createElement('div');
const myBody = document.body;
myBody.appendChild(myDiv);
myDiv.innerText = "hover over me!";

myDiv.style.width = "390px";
myDiv.style.height = "110px";
myDiv.style.border = "2px solid black";
myDiv.style.backgroundColor = "red";
myDiv.style.color = "white";

myDiv.onmouseenter = function() {
    this.style.backgroundColor = "blue";
}
myDiv.onmouseleave = function() {
    this.style.backgroundColor = "red";
}