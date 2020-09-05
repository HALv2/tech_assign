const tasks = [];

document.getElementById("submit").addEventListener("click", submitNewTask);

function submitNewTask() {
  const inputTask = {
    id: tasks.length,
    comment: document.getElementById("comment").value,
    status: "作業中",
  }
  tasks.push(inputTask);
  createNewTaskElement(tasks);
  
  document.querySelectorAll(".delete").forEach((button, index) => {
    button.addEventListener("click", () => {
      tasks.splice(index, 1);
      tasks.forEach((task, index) => {
        task.id = index;
      });

      event.target.parentNode.parentNode.remove();      
      
      document.querySelectorAll(".task_id").forEach((node, index) => {
        node.innerHTML = `${index}`;
      })
    });
  });
}

function createNewTaskElement(taskArray) {
  const parentNode = document.querySelector("table");
  
  parentNode.innerHTML = `
  <tr>
    <th>ID</th>
    <th>コメント</th>
    <th>状態</th>
  </tr>
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