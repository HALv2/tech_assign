let tasks = ["掃除", "買い物", "散歩"];

function showTasks() {
  console.log("========================", "\n", "現在持っているタスクの一覧", "\n", "========================");
  tasks.forEach(function (task, index) {  
    console.log(`${index} : ${task}`);
  })
}

function addTasksToList() {
  let additionalTask = prompt("タスクを入力してください");
  if (additionalTask) {
    alert("新しいタスクを追加しました。");
    tasks.push(additionalTask);
  }
  showTasks();
}

function selectAction() {
  let action = prompt("「確認,追加,削除,修了」の４つのいずれかを入力してください");
}

showTasks();
addTasksToList();
selectAction();