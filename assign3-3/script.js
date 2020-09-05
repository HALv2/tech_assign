const tasks = [];

document.getElementById("submit").addEventListener("click", submitNewTask);

function submitNewTask() {
  const inputTask = {
    id: tasks.length,
    comment: document.getElementById("comment").value,
    status: '作業中',
  }
  tasks.push(inputTask);
  createNewTaskElement(tasks);
  deleteTask(tasks);
  changeStatus(tasks);
}

function createNewTaskElement(taskArray) {
  const parentNode = document.getElementById("list");
  parentNode.innerHTML = 
  `
  ${taskArray.map(task => {
    return `
      <tr>
        <td class="task_id">
          ${task.id}
        </td>
        <td class="comment">
          ${task.comment}
        </td>
        <td class="status">
          <button>${task.status}</button>
        </td>
        <td class="delete">
          <button>削除</button>
        </td>
      </tr>
    `
  }).join('')}
  `;
}

function deleteTask(taskArray) {
  document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", () => {
      //delete task from array by id and reassign ids to tasks array
      const taskId = event.target.parentNode.parentNode.querySelector(".task_id").innerHTML;
      taskArray.splice(taskId, 1);
      taskArray.forEach((task, index) => {
        task.id = `${index}`;
      });
      
      event.target.parentNode.parentNode.remove();      
      document.querySelectorAll(".task_id").forEach((node, index) => {
        node.innerHTML = `${index}`;
      })
    });
  });
  changeStatus(taskArray);
}

function changeStatus(taskArray) {
  document.querySelectorAll(".status").forEach((button, index) => {
    button.addEventListener("click", () => {
      const status = taskArray[index].status;

      if (status === '作業中') {
        button.innerHTML = "<button>完了</button>";
        taskArray[index].status = '完了';
      } else if (status === "完了") {
        button.innerHTML = "<button>作業中</button>";
        taskArray[index].status = '作業中'
      }
    })
  })
  deleteTask(taskArray);
}