function makeUserDataTable(personData) {
    if (!Array.isArray(personData)) {
        console.error("Not an array!");
        return;
    }
    const tableElem = document.querySelector("table");
    const rows = document.getElementsByTagName("tr");
    const len = rows.length;
    for(let i = 1; i < len ; i++) {
        rows[1].remove();
    }
    const pattern = ['uid', 'firstname', 'lastname', 'city', 'postalCode', 'phoneNumber', 'position'];
    personData.forEach(function(person, index) {
        const row = document.createElement("tr");
        const rowCell = document.createElement("td");
        const rowCellText = document.createTextNode(`${index + 1}`);
        rowCell.appendChild(rowCellText);
        row.appendChild(rowCell);
        for (const prop of pattern) {
            const newCell = document.createElement("td");
            const cellText = document.createTextNode(`${person[prop]}`);
            newCell.appendChild(cellText);
            row.appendChild(newCell);
        }
        tableElem.appendChild(row);
    })
}
makeUserDataTable(userData);

const updateBtn = document.querySelector(".blue");
const deleteBtn = document.querySelector(".yellow");
const closeBtn = document.querySelector(".gray");
const saveUp = document.querySelector("#buttons1 .green");
const cancelUp = document.querySelector("#buttons1 .red");
const readPanel = document.getElementById("readPanel");
const upPanel = document.getElementById("upPanel");
const saveCreate = document.querySelector("#buttons2 .green");
const cancelCreate = document.querySelector("#buttons2 .red");
const createBtn = document.querySelector(".purple");
const createPanel = document.getElementById("createPanel");
updateBtn.style.display = "none";
deleteBtn.style.display = "none";
closeBtn.style.display = "none";
saveUp.style.display = "none";
cancelUp.style.display = "none";
readPanel.style.display = "none";
upPanel.style.display = "none";
saveCreate.style.display = "none";
cancelCreate.style.display = "none";
createPanel.style.display = "none";

const readParas = document.getElementsByClassName("read");
const upInputs = document.getElementsByClassName("up");
const createInputs = document.getElementsByClassName("create");

function setRead() {
    const rows = document.getElementsByTagName("tr");
    const len = rows.length;
    for (let i = 1; i < len; i++) {
        rows[i].onclick = read;
    }
}
const read = function() {
    const cell = this.children[1];
    const uid = +cell.innerHTML;
    const person = userData.find(function(person) {
        return person.uid === uid;
    })
    let j = 0;
    for (const value of Object.values(person)) {
        readParas[j].innerHTML = value;
        upInputs[j].value = value;
        j++;
    }
    updateBtn.style.display = "";
    deleteBtn.style.display = "";
    closeBtn.style.display = "";
    readPanel.style.display = "";
}
setRead();

const headings = document.getElementsByTagName("th");
const dataSort = function() {
    const id = this.id;
    const index = id[0] - 2;
    const key = Object.keys(userData[0])[index];
    if(isNaN(userData[0][key])) {
        userData.sort(function(a, b){
            let x = a[key].toLowerCase();
            let y = b[key].toLowerCase();
            if (x < y) {return 1;}
            if (x > y) {return -1;}
            return 0;
        });
    } else {
        userData.sort(function(a, b) {
            return b[key] - a[key];
        })
    }
    makeUserDataTable(userData);
    setRead();
}
for (let i = 1; i < headings.length; i++) {
    headings[i].onclick = dataSort;
}
closeBtn.onclick = close;
function close() {
    updateBtn.style.display = "none";
    deleteBtn.style.display = "none";
    closeBtn.style.display = "none";
    readPanel.style.display = "none";
}

updateBtn.onclick = function() {
    deleteBtn.style.display = "none";
    readPanel.style.display = "none";
    closeBtn.style.display = "none";
    saveUp.style.display = "";
    cancelUp.style.display = "";
    upPanel.style.display = "";
    updateBtn.setAttribute("disabled", '');
}
saveUp.onclick = function() {
    for (let i = 0; i < upInputs.length; i++) {
        if (upInputs[i].value.trim() === "") {
            alert("Please fill out all fields!");
            return;
        }
    }
    let updatingItem = userData.find(function(person) {
        return person.uid === +upInputs[0].value;
    });
    let i = 0;
    for (const key of Object.keys(userData[0])) {
        if (isNaN(userData[0][key])) {
            if (!isNaN(upInputs[i].value)) {
                alert(`Invalid input type! (${key}) must be string!`);
                return;
            }
            updatingItem[key] = upInputs[i].value;
        } else if (!isNaN(userData[0][key])) {
            if (isNaN(upInputs[i].value)) {
                alert(`Invalid input type! (${key}) must be number!`);
                return;
            }
            if (!Number.isInteger(+upInputs[i].value) || +upInputs[i].value < 0) {
                alert(`Invalid number!`);
                return;
            }
            updatingItem[key] = +upInputs[i].value;
        }       
        i++;
    }
    makeUserDataTable(userData);
    setRead();
    updateBtn.style.display = "none";
    saveUp.style.display = "none";
    cancelUp.style.display = "none";
    upPanel.style.display = "none";
    updateBtn.disabled = false;
    alert("Successfully updated!");
}
cancelUp.onclick = function() {
    saveUp.style.display = "none";
    cancelUp.style.display = "none";
    upPanel.style.display = "none";
    deleteBtn.style.display = "";
    readPanel.style.display = "";
    closeBtn.style.display = "";
    updateBtn.disabled = false;
}
deleteBtn.onclick = function() {
    const index = userData.findIndex(function(person) {
        return person.uid === +readParas[0].innerHTML;
    });
    userData.splice(index, 1);
    updateBtn.style.display = "none";
    deleteBtn.style.display = "none";
    closeBtn.style.display = "none";
    readPanel.style.display = "none";
    makeUserDataTable(userData);
    setRead();
    alert("Successfully removed!");
}
createBtn.onclick = function() {
    createBtn.disabled = true;
    saveCreate.style.display = "";
    cancelCreate.style.display = "";
    createPanel.style.display = "";
}
cancelCreate.onclick = function() {
    createBtn.disabled = false;
    saveCreate.style.display = "none";
    cancelCreate.style.display = "none";
    createPanel.style.display = "none";
}
saveCreate.onclick = function() {
    for (let i = 0; i < createInputs.length; i++) {
        if (createInputs[i].value.trim() === "") {
            alert("Please fill out all fields!");
            return;
        }
    }
    const isSimilar = userData.some(function(person) {
        return person.uid === +createInputs[0].value;
    });
    if (isSimilar) {
        alert("Duplicate uid! Cannot create!");
        return;
    }
    const newPerson = {};
    let j = 0;
    for (const key of Object.keys(userData[0])) {
        if (isNaN(userData[0][key])) {
            if (!isNaN(createInputs[j].value)) {
                alert(`Invalid input type! (${key}) must be string!`);
                return;
            }
            newPerson[key] = createInputs[j].value;
        } else if (!isNaN(userData[0][key])) {
            if (isNaN(createInputs[j].value)) {
                alert(`Invalid input type! (${key}) must be number!`);
                return;
            }
            if (!Number.isInteger(+createInputs[j].value) || +createInputs[j].value < 0) {
                alert(`Invalid number!`);
                return;
            }
            newPerson[key] = +createInputs[j].value;
        }       
        j++;
    }
    userData.push(newPerson);
    makeUserDataTable(userData);
    setRead();
    createBtn.disabled = false;
    saveCreate.style.display = "none";
    cancelCreate.style.display = "none";
    createPanel.style.display = "none";
    alert("Successfully created!");
}