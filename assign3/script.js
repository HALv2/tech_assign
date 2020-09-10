const tasks = [];
const STATUS = ['作業中', '完了'];

document.getElementById("submit").addEventListener("click", submitNewTask);

function submitNewTask() {
  const inputTask = {
    id: tasks.length,
    comment: document.getElementById("comment").value,
    status: STATUS[0],
  }
  tasks.push(inputTask);
  createNewTaskElement(tasks);
  document.getElementById("comment").value = "";
  deleteTask(tasks);
  changeStatus(tasks);
}

function createNewTaskElement(taskArray) {
  const parentNode = document.getElementById("list");
  parentNode.innerHTML = `
  ${taskArray.map(task => {
    return `
    <tr>
        <td class="task_id">
          ${task.id}
        </td>
        <td class="comment">
          ${sanitizeHTML(task.comment)}
        </td>
        <td class="status">
          <button>${task.status}</button>
        </td>
        <td class="delete">
          <button>削除</button>
        </td>
    </tr>`
  }).join('')}
  `;
}

function sanitizeHTML (inputValue) {
  const tempDiv = document.createElement("div");
  tempDiv.textContent = inputValue;
  return tempDiv.innerHTML;
}

function deleteTask(taskArray) {
  document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", () => {
      const taskId = event.target.parentNode.parentNode.querySelector(".task_id").innerText;
      taskArray.splice(taskId, 1);
      taskArray.forEach((task, index) => {
        task.id = index;
      });
      
      event.target.parentNode.parentNode.remove();      
      document.querySelectorAll(".task_id").forEach((node, index) => {
        node.innerText = index;
      })
    });
  });
}

function changeStatus(taskArray) {
  document.querySelectorAll(".status").forEach((button) => {
    button.addEventListener("click", () => {
      const taskId = event.target.parentNode.parentNode.querySelector(".task_id").innerText;
      const taskStatus = taskArray[taskId].status;

      if (taskStatus === STATUS[0]) {
        button.innerHTML = `<button>${STATUS[1]}</button>`;
        taskArray[taskId].status = STATUS[1];
      } else if (taskStatus === STATUS[1]) {
        button.innerHTML = `<button>${STATUS[0]}</button>`;
        taskArray[taskId].status = STATUS[0];
      }
    });
  });
}