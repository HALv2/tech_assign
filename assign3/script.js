document.getElementById("submit").addEventListener("click", submitNewTask);

function submitNewTask() {
  const inputTask = {
    id: parseInt(document.querySelector(".task_list").rows.length - 1),
    comment: document.getElementById("comment").value,
    status: "作業中",
    delete: "削除",
  }
  createNewTaskElement(inputTask);
}

function createTextCell(parent, value) {
  const childNode = document.createElement("td");
  const cell = document.createTextNode(`${value}`);
  childNode.appendChild(cell);
  parent.appendChild(childNode);
}

function createButtonCell(parent, buttonId, buttonValue) {
  const childNode = document.createElement("td");
  const cell = document.createElement("input");
  Object.assign(cell, {
    type: "button",
    id: `${buttonId}`,
    value: `${buttonValue}`,
  });
  childNode.appendChild(cell);
  parent.appendChild(childNode);
}

function createNewTaskElement(object) {
  const parentNode = document.createElement("tr");
  
  createTextCell(parentNode, object.id);
  createTextCell(parentNode, object.comment);
  
  createButtonCell(parentNode, "status", object.status);
  createButtonCell(parentNode, "delete", object.delete);

  document.querySelector(".task_list").appendChild(parentNode);
}