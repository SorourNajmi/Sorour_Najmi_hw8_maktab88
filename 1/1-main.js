const myDiv = document.getElementById("green")
const mypara = document.getElementsByTagName('p')[0];

myDiv.style.backgroundColor = "green";
myDiv.style.border = "2px solid black";
myDiv.style.width = "310px";
myDiv.style.height = "150px";
myDiv.style.overflow = "auto";
myDiv.style.color = "white";
mypara.style.marginTop = "0";

myDiv.onclick = function() {
    mypara.innerHTML += " Click added some text! "
}

// const myDiv = document.getElementById("green")
// const mypara = document.getElementById("text");
// myDiv.style.backgroundColor = "green";
// myDiv.style.border = "1px solid black";
// myDiv.style.width = "400px";
// myDiv.style.height = "300px";
// myDiv.style.overflow = "auto";
// myDiv.style.color = "white";
// mypara.style.marginTop = "0";
// myDiv.onclick = function() {
//     let newPara = document.createElement('p');
//     let newParaContent = document.createTextNode("added some text! Click added some text!");
//     newPara.appendChild(newParaContent);
//     let mySpan = document.createElement('span');
//     let newSpanContent = document.createTextNode("Click");
//     mySpan.appendChild(newSpanContent);
//     myDiv.appendChild(mySpan);
//     myDiv.appendChild(newPara);
// }
