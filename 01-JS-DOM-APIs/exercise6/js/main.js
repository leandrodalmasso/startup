let schedule = [
  ["Day", "Morning", "Afternoon", "Night"],
  ["Monday", "Breakfast", "Work", "Sleep"],
  ["Tuesday", "Breakfast", "Work", "Sleep"],
  ["Wednesday", "Breakfast", "Work", "Sleep"],
  ["Thursday", "Breakfast", "Work", "Sleep"],
  ["Friday", "Breakfast", "Work", "Weeeeeeeee!"],  
];

/*
console.log(schedule[0].length);
console.log(schedule[0]);
console.log(schedule[0][0].length);
console.log(schedule[0][0]);
*/

function createTable(array, rows) {
  let table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);

    for (let j = 0; j < array[i].length; j++) {
      let tableDataCell = document.createElement("td");
      let tableDataCellContent = document.createTextNode(array[i][j]);
      tableDataCell.appendChild(tableDataCellContent);
      row.appendChild(tableDataCell);
    }
  }

  return table;
}

let contentSection = document.getElementById("content");
contentSection.appendChild(createTable(schedule, 6));