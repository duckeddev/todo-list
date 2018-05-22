class TodoList {
  constructor() {
    this._tasks = [];
    this.todolist = null;
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
    this.renderTasks();
    newTask.onDelete = this._onTaskDelete.bind(this);
  }
  _onTaskDelete(taskForDel) {
    var index = -1;
    for (let i = 0; i < this._tasks.length; i++) {
      if (this._tasks[i] === taskForDel) {
        index = i;
        break;
      }
    };
    this._tasks.splice(index, 1);
    this.renderTasks();
  }

  renderTasks() {
    const tasksBlock = document.querySelector('[data-role="tasks"]');
    tasksBlock.innerHTML = '';
    for (let i = 0; i < this._tasks.length; i++) {
      tasksBlock.append(this._tasks[i].render());
    }
  }
  _addTaskName() {
    const taskName = document.querySelector('.todo-list__form-field').value;
    return ` ${taskName} `;
  }
}


var todolistWidg = new TodoList();
todolistWidg.render('.wrapper');
todolistWidg.addTask();
