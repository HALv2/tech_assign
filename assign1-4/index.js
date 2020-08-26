let tasks = [
  {description: "机を片付ける", category: "掃除"}, 
  {description: "牛乳を買う", category: "買い物"},
  {description: "散歩する", category: "運動"}
];

function showTasks() {
  console.log("========================", "\n", "現在持っているタスクの一覧", "\n", "========================");
  tasks.forEach(function (task, index) {
    console.log(`${index} : [内容]${task.description},[ジャンル]${task.category}`);
  })
}

function addTasksToList() {
  let newItemDescription = prompt("タスクを入力してください");
  let newItemCategory = prompt("ジャンルを入力してください");
  if (newItemDescription && newItemCategory) {
    alert("新しいタスクを追加しました。");
    tasks.push({description: newItemDescription, category: newItemCategory});
  }
  showTasks();
}

function selectAction() {
  let action = prompt("「確認,追加,削除,修了」の４つのいずれかを入力してください");
}

showTasks();
addTasksToList();
selectAction(); 