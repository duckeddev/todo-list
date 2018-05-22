class Task {
  constructor(name) {
    this.name = name;
    this.isDone = false;
    this.blockElement = null;
    this.checkTaskElement = null;
    this.taskElemet = null;
    this.deleteBtn = null;
    this.onDelete = null;
  }
  render() {
    this.blockElement = document.createElement('div');
    this.blockElement.innerHTML = `<p data-role="task"><input type="checkbox" ${this.isDone ? "checked" : ""} data-role="checkbox"> <span data-role="task-name">${this.name}</span> <button class="close" data-role="delete">X</button></p>`;

    this.checkTaskElement = this.blockElement.querySelector('[data-role="checkbox"]');
    this.checkTaskElement.addEventListener('click', this._isDoneTask.bind(this));

    this.deleteBtn = this.blockElement.querySelector('[data-role="delete"]');
    this.deleteBtn.addEventListener('click', this._deleteTask.bind(this));

    return this.blockElement;
  }

  _isDoneTask() {
    this.taskElement = this.blockElement.querySelector('[data-role="task-name"]');
    switch (this.checkTaskElement.checked) {
      case true:
        this.taskElement.style.textDecoration = 'line-through';
        this.isDone = true;
        break;
      case false:
        this.taskElement.style.textDecoration = 'none';
        this.isDone = false;
        break;
      default:
        this.taskElement.style.textDecoration = 'none';
        this.isDone = false;
    }
  }

  _deleteTask() {
    this.onDelete(this);
  }
}
