document.getElementById("submit").addEventListener("click", submitNewTask);


function submitNewTask() {
  const inputTask = {
    id: parseInt(document.querySelector(".task_list").rows.length - 1),
    comment: document.getElementById("comment").value,
    status: "作業中",
    delete: "削除",
  }
  createNewTaskElement(inputTask);

  const node = document.querySelectorAll(".delete");
  for (let i = 0; i < node.length; i++){
    node[i].addEventListener("click", function(){
      event.target.parentNode.parentNode.remove();
      
      const tableLength = document.querySelector(".task_list").rows.length - 1;
      for (let i = 0; i < tableLength; i++){
        const taskIdNode = document.querySelectorAll(".task_id");
        taskIdNode[i].innerHTML = i;
      }
    });
  }
}

function createTextCell(parent, value, className) {
  const childNode = document.createElement("td");
  childNode.setAttribute("class", `${className}`);
  const cell = document.createTextNode(`${value}`);
  childNode.appendChild(cell);
  parent.appendChild(childNode);
}

function createButtonCell(parent, v1, v2) {
  const childNode = document.createElement("td");
  childNode.setAttribute("class", `${v1}`);
  const cell = document.createElement("input");
  Object.assign(cell, {
    type: "button",
    value: `${v2}`
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

  document.querySelector(".task_list").appendChild(parentNode);
}