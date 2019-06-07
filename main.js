const prependCard = todo => {
  console.log(todo);
  todo.tasks.forEach(task => {
    const taskNode = document.createElement('li');
    taskNode.innerText = task.title
    document.querySelector('#todo-list-container').appendChild(taskNode);
  })


}

const appendTaskItem = item => {
  const itemContainer = document.querySelector('#new-task-item-container');
  const newItem = document.createElement('p');
  newItem.classList.add('new-task-item');
  newItem.innerText = item;

  itemContainer.append(newItem);
}

const createTaskItem = () => {
  const tasks = document.querySelectorAll('.new-task-item');
  console.log(tasks);
  const tasksList = []
  tasks.forEach(taskItem => {
    tasksList.push({title: taskItem.innerText, id: Date.now(), complete: false});
  });

  return tasksList;
}

const makeNewTask = e => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const tasks = createTaskItem();
  
  const todo = new ToDoList(title, tasks);
  
  prependCard(todo);
  title.value = '';
  const container = document.querySelector('#new-task-item-container');
  tasks.forEach((taskItem, index) => {
    container.removeChild(taskItem);
  })
}

const makeNewTaskItem = e => {
  e.preventDefault();
  const item = document.querySelector('#item');

  appendTaskItem(item.value);
  item.value = '';
  item.focus();
}

document.querySelector('#make-task-list').addEventListener('click', makeNewTask);
document.querySelector('#add-item').addEventListener('click', makeNewTaskItem);

