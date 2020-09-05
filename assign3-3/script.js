const tasks = [];

document.getElementById("submit").addEventListener("click", submitNewTask);

function submitNewTask() {
  const inputTask = {
    id: parseInt(document.getElementById("list").rows.length),
    comment: document.getElementById("comment").value,
    status: '作業中',
  }
  tasks.push(inputTask);
  createNewTaskElement(tasks);
  
  document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", () => {
      //delete task from array by id and reassign ids to tasks array
      const taskId = event.target.parentNode.parentNode.querySelector(".task_id").innerHTML;
      tasks.splice(taskId, 1);
      tasks.forEach((task, index) => {
        task.id = `${index}`;
      });
      
      event.target.parentNode.parentNode.remove();      
      document.querySelectorAll(".task_id").forEach((node, index) => {
        node.innerHTML = `${index}`;
      })
    });
  });

  //TODO  change status
  document.querySelectorAll(".status").forEach((button, index) => {
    button.addEventListener("click", () => {
      const status = tasks[index].status;

      if (status === '作業中') {
        button.innerHTML = "<button>完了</button>";
        tasks[index].status = '完了';
      } else if (status === "完了") {
        button.innerHTML = "<button>作業中</button>";
        tasks[index].status = '作業中'
      }
    })
  })
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