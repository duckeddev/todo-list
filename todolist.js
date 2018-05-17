class TodoList {
  constructor() {
    this._tasks = [];
  }
  render(elem) {
    const todolist = document.querySelector(elem);
    todolist.innerHTML = '<div class="todo-list__wrapper">What to buy?<div class="todo-list" data-role="tasks"></div><div class="todo-list__form"><input placeholder="Enter task" class="todo-list__form-field"><button class="todo-list_submit">Submit</button></div></div>'
  }
  addTask() {
    const addBtn = document.querySelector('.todo-list_submit');
    addBtn.addEventListener('click', this.createTask.bind(this));
  }
  createTask() {
    let newTask = new Task(this._addTaskName());
    this._tasks.push(newTask);
    this._addTaskForHTML();
  }
  _addTaskName() {
    const taskName = document.querySelector('.todo-list__form-field').value;
    return ` ${taskName} `;
  }
  _addTaskForHTML() {
    const tasksBlock = document.querySelector('[data-role="tasks"]');
    tasksBlock.innerHTML = '';
    for (let i = 0; i < this._tasks.length; i++) {
      tasksBlock.insertAdjacentHTML('beforeend', `<p data-role="task"><input type="checkbox" ${this._tasks[i].isDone ? "checked" : ""}'> ${this._tasks[i].name} <button class="close">X</button> </p>`)
    }
  }
  completeTask() {
    let checkTask = document.querySelector('[type="checkbox"]');
    checkTask.addEventListener('click', this.completedTask.bind(this));
  }
  completedTask() {
    if (this.checkTask = true) {
      let tasksItem = document.querySelector('[data-role="task"]');
      tasksItem.style.textDecoration = "underline";
    }
  }
}

class Task {
  constructor(name) {
    this.name = name;
    this.isDone = false;
  }
  render() {
    const newTask = document.createElement('p');
    newTask.classList = 'todo-list__item';
    newTask.innerHTML = ` <input type="checkbox"> ${this.name} &#7198; `;
    return newTask;
  }
}

var todolistWidg = new TodoList();
todolistWidg.render('.wrapper');
todolistWidg.addTask();
