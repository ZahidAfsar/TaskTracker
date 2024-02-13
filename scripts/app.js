
let todoElement = document.getElementById("todoElement");

let inProgressElement = document.getElementById("inProgressElement");
let completedElement = document.getElementById("completedElement");

let priorityElement = document.getElementById("priorityElement");

let nameElement = document.getElementById("nameElement");
let descriptionElement = document.getElementById("descriptionElement");
let dateElement = document.getElementById("dateElement");

let addTaskButton = document.getElementById("addTaskButton");

let injectTodoElement = document.getElementById("injectTodoElement");
let injectInProgressElement = document.getElementById("injectInProgressElement");
let injectCompletedElement = document.getElementById("injectCompletedElement");

let saveButton = document.getElementById("saveButton");

let inputNameElement = document.getElementById("inputNameElement");
let inputDescriptionElement = document.getElementById("inputDescriptionElement");
let inputDateElement = document.getElementById("inputDateElement");
let inputPriorityElement = document.getElementById("inputPriorityElement");
let inputStatusElement = document.getElementById("inputStatusElement");

let addButton = document.getElementById("addButton");

let inputNameElement1 = document.getElementById("inputNameElement1");
let inputDescriptionElement1 = document.getElementById("inputDescriptionElement1");
let inputDateElement1 = document.getElementById("inputDateElement1");
let inputPriorityElement1 = document.getElementById("inputPriorityElement1");
let inputStatusElement1 = document.getElementById("inputStatusElement1");

let todos = [];

let inProgress = [];

let completed = [];

addButton.addEventListener('click', () => {
    createDivTask();
    todoElement.textContent = todos.length;
    inProgressElement.textContent = inProgress.length;
    completedElement.textContent = completed.length;
});


const createDivTask = () => {
    
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("mt-2", "mx-5");
    mainContainer.style.backgroundColor = "darkblue";
    mainContainer.style.borderRadius = "3px";

    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    let colDiv = document.createElement("div");
    colDiv.classList.add("col");

    let priorityLabel = document.createElement("h3");
    priorityLabel.classList.add("ms-3", "mt-3", "mb-2");
    priorityLabel.textContent = "Priority";
    priorityLabel.style.color = "white";


    let nameLabel = document.createElement("p");
    nameLabel.classList.add("ms-3", "mt-3", "mb-2");
    nameLabel.textContent = "Task Name";
    nameLabel.style.fontSize = "20px";
    nameLabel.style.color = "white"; 


    let descriptionLabel = document.createElement("p");
    descriptionLabel.classList.add("ms-3", "mb-4");
    descriptionLabel.textContent = "Task description";
    descriptionLabel.style.color = "white"; 


    let dateLabel = document.createElement("p");
    dateLabel.classList.add("ms-3", "mb-4");
    dateLabel.textContent = "Due Date";
    dateLabel.style.fontSize = "20px";
    dateLabel.style.color = "white"; 


    let viewButton = document.createElement("button");
    viewButton.classList.add("btn", "btn-success", "py-2", "mb-2");
    viewButton.style.width = "100%";
    viewButton.type = "button";
    viewButton.setAttribute("data-bs-toggle", "modal");
    viewButton.setAttribute("data-bs-target", "#exampleModal");
    viewButton.textContent = "Edit Task";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "py-2");
    deleteButton.style.width = "100%";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete Task";

    deleteButton.addEventListener('click', () => {
        mainContainer.remove();
    });

    mainContainer.appendChild(rowDiv);
    rowDiv.appendChild(colDiv);
    colDiv.appendChild(priorityLabel);
    colDiv.appendChild(nameLabel);
    colDiv.appendChild(descriptionLabel);
    colDiv.appendChild(dateLabel);
    colDiv.appendChild(viewButton);
    colDiv.appendChild(deleteButton);

    nameLabel.textContent = inputNameElement.value;
    descriptionLabel.textContent = inputDescriptionElement.value;
    dateLabel.textContent = inputDateElement.value;
    priorityLabel.textContent = inputPriorityElement.value;

    if(inputStatusElement.value === "TO DO"){
        injectTodoElement.appendChild(mainContainer);
        let myDivTask = {name: inputNameElement.value, description: inputDescriptionElement.value, date: inputDateElement.value, priority: inputPriorityElement.value}
        todos.push(myDivTask);
    }else if(inputStatusElement.value === "IN PROGRESS"){
        injectInProgressElement.appendChild(mainContainer);
        let myDivTask = {name: inputNameElement.value, description: inputDescriptionElement.value, date: inputDateElement.value, priority: inputPriorityElement.value}
        inProgress.push(myDivTask);
    }else if(inputStatusElement.value === "COMPLETED"){
        injectCompletedElement.appendChild(mainContainer);
        let myDivTask = {name: inputNameElement.value, description: inputDescriptionElement.value, date: inputDateElement.value, priority: inputPriorityElement.value}
        completed.push(myDivTask);
    }

    saveButton.addEventListener('click', () => {
        mainContainer.remove();
        nameLabel.textContent = inputNameElement1.value;
        descriptionLabel.textContent = inputDescriptionElement1.value;
        dateLabel.textContent = inputDateElement1.value;
        priorityLabel.textContent = inputPriorityElement1.value;
        if(inputStatusElement1.value === "TO DO"){
            mainContainer.remove();
            injectTodoElement.appendChild(mainContainer);
        }else if(inputStatusElement1.value === "IN PROGRESS"){
            mainContainer.remove();
            injectInProgressElement.appendChild(mainContainer);
        }else if(inputStatusElement1.value === "COMPLETED"){
            mainContainer.remove();
            injectCompletedElement.appendChild(mainContainer);
        }
        todoElement.textContent = todos.length;
        inProgressElement.textContent = inProgress.length;
        completedElement.textContent = completed.length;
    });
    
}

const saveToLocalStorage = (todo, inprogress, completed) => {
    localStorage.setItem("toDo", JSON.stringify(todo));
    localStorage.setItem("inProgress", JSON.stringify(inprogress));
    localStorage.setItem("completed", JSON.stringify(completed));
}
