"use strict";
const button = document.querySelector("#confirm");
const taskArray = [
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
const tasksList = document.querySelector("#tasks-list");
const render = () => {
    taskArray.forEach((task) => {
        const listElement = document.createElement("li");
        const isDoneCheckbox = document.createElement("input");
        listElement.innerText = task.text;
        listElement.id = `list-item-${task.id}`;
        isDoneCheckbox.type = "checkbox";
        isDoneCheckbox.checked = task.isDone;
        listElement === null || listElement === void 0 ? void 0 : listElement.appendChild(isDoneCheckbox);
        tasksList === null || tasksList === void 0 ? void 0 : tasksList.appendChild(listElement);
        task.isDone
            ? (listElement.style.color = "red")
            : (listElement.style.color = "black");
        isDoneCheckbox.addEventListener("click", () => {
            const newTask = {
                id: task.id,
                text: task.text,
                isDone: !task.isDone,
            };
            taskArray[taskArray.indexOf(task)] = newTask;
            tasksList.innerHTML = "";
            render();
        });
    });
};
button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
    e.preventDefault();
    tasksList.innerHTML = "";
    const id = taskArray.length + 1;
    const addTaskInput = document.querySelector("#add-task");
    const newTask = {
        id: id,
        text: addTaskInput === null || addTaskInput === void 0 ? void 0 : addTaskInput.value,
        isDone: false,
    };
    addTaskInput.value = "";
    taskArray.push(newTask);
    render();
});
render();
