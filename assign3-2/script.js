document.getElementById("submit").addEventListener("click", submitNewTask);

function submitNewTask() {
  let tasks = [];
  const inputTask = {
    id: parseInt(document.getElementById("list").rows.length),
    comment: document.getElementById("comment").value,
    status: "作業中",
    delete: "削除",
  };

  createNewTaskElement(inputTask);
  tasks.push(inputTask);

  
  const node = document.querySelectorAll(".delete");
  for (let i = 0; i < node.length ; i++) {
    node[i].addEventListener("click", function(){
      const deletedId = event.target.parentNode.parentNode.querySelector(".task_id").innerHTML;
      event.target.parentNode.parentNode.remove();
      const nodeLength = document.getElementById("list").rows.length;
      
      for ( let e = 0; e < nodeLength; e++) {
        let taskIdNode = document.getElementById("list").rows[e].cells[0];
        taskIdNode.innerHTML = e;
      }
    });
  };

  const editNode = document.querySelectorAll(".status");
  for (let i = 0; i < node.length ; i++) {
    node[i].addEventListener("click", function(){
      const deletedId = event.target.parentNode.parentNode.querySelector(".task_id").innerHTML;
      event.target.parentNode.parentNode.remove();
      const nodeLength = document.getElementById("list").rows.length;
      
      for ( let e = 0; e < nodeLength; e++) {
        let taskIdNode = document.getElementById("list").rows[e].cells[0];
        taskIdNode.innerHTML = e;
      }
    });
  };
}

function createTextCell(parent, value, className) {
  const childNode = document.createElement("td");
  childNode.setAttribute("class", `${className}`);
  const cell = document.createTextNode(`${value}`);
  childNode.appendChild(cell);
  parent.appendChild(childNode);
}

function createButtonCell(parent, className, buttonValue) {
  const childNode = document.createElement("td");
  childNode.setAttribute("class", `${className}`);
  const cell = document.createElement("input");
  Object.assign(cell, {
    type: "button",
    value: `${buttonValue}`
  });
  childNode.appendChild(cell);
  parent.appendChild(childNode);
}

function createNewTaskElement(object) {
  const parentNode = document.createElement("tr");
  
  createTextCell(parentNode, object.id, "task_id");
  createTextCell(parentNode, object.comment, "comment");
  
  createButtonCell(parentNode, "status", object.status);
  createButtonCell(parentNode, "delete", object.delete);

  document.getElementById("list").appendChild(parentNode);
}