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
  renderTasks(tasks);
  document.getElementById("comment").value = "";
  deleteTask(tasks);
  changeStatus(tasks);

  document.querySelector(".button_list").addEventListener("click", () =>{
    renderTasksByStatus(tasks);
    deleteTask(tasks);
    changeStatus(tasks);
  })
}

function renderTasks(taskArray) {
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
        button.innerHTML = "<button>完了</button>";
        taskArray[taskId].status = STATUS[1];
      } else if (taskStatus === STATUS[1]) {
        button.innerHTML = "<button>作業中</button>";
        taskArray[taskId].status = STATUS[0];
      }
    })
  })
}

function renderTasksByStatus(tasks) {;
    if (document.getElementById("select_all").checked) {
      renderTasks(tasks);
    } else if (document.getElementById("select_doing").checked) {
      const doingTasks = tasks.filter( task => task.status === STATUS[0]);
      renderTasks(doingTasks);
    } else if (document.getElementById("select_done").checked) {
      const doneTasks = tasks.filter( task => task.status === STATUS[1]);
      renderTasks(doneTasks);
    }
}

