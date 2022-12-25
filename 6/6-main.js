function makeUserDataTable(personData) {
    const tableElem = document.querySelector("table");
    const rows = document.getElementsByTagName("tr");
    const len = rows.length;
    for(let i = 1; i < len ; i++) {
        rows[1].remove();
    }
    personData.forEach(function(person, index) {
        const row = document.createElement("tr");
        const rowCell = document.createElement("td");
        const rowCellText = document.createTextNode(`${index + 1}`);
        rowCell.appendChild(rowCellText);
        row.appendChild(rowCell);
        for (const prop in person) {
            const newCell = document.createElement("td");
            const cellText = document.createTextNode(`${person[prop]}`);
            newCell.appendChild(cellText);
            row.appendChild(newCell);
        }
        tableElem.appendChild(row);
    })
}
makeUserDataTable(userData);
