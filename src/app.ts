const button = document.querySelector<HTMLButtonElement>("#confirm");

type Task = {
  id: number;
  text: string;
  isDone: boolean;
};
const taskArray: Task[] = [
  {
    id: 1,
    text: "zrób pranie",
    isDone: false,
  },
  {
    id: 2,
    text: "idź na siłke",
    isDone: false,
  },
  {
    id: 3,
    text: "zrób obiad",
    isDone: false,
  },
];
const tasksList = document.querySelector<HTMLUListElement>("#tasks-list");

const render = () => {
  taskArray.forEach((task) => {
    const listElement: HTMLLIElement = document.createElement("li");
    const isDoneCheckbox: HTMLInputElement = document.createElement("input");
    listElement.innerText = task.text;
    listElement.id = `list-item-${task.id}`;
    isDoneCheckbox.type = "checkbox";
    isDoneCheckbox.checked = task.isDone;
    listElement?.appendChild(isDoneCheckbox);
    tasksList?.appendChild(listElement);

    task.isDone
      ? (listElement.style.color = "red")
      : (listElement.style.color = "black");

    isDoneCheckbox.addEventListener("click", () => {
      const newTask: Task = {
        id: task.id,
        text: task.text,
        isDone: !task.isDone,
      };
      taskArray[taskArray.indexOf(task)] = newTask;
      tasksList!.innerHTML = "";
      render();
    });
  });
};

button?.addEventListener("click", (e: Event) => {
  e.preventDefault();
  tasksList!.innerHTML = "";
  const id = taskArray.length + 1;

  const addTaskInput = document.querySelector<HTMLInputElement>("#add-task");

  const newTask: Task = {
    id: id,
    text: addTaskInput?.value as string,
    isDone: false,
  };
  addTaskInput!.value = "";
  taskArray.push(newTask);

  render();
});

render();
