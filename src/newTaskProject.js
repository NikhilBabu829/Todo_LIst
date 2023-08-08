// TODO make the todo's event
import { storingTasksInLocalStorage, storingProjectsInLocalStorage } from './storage';
import {selected} from './index';
const interfaceUI = document.querySelector('.interface');
const makingTodo = document.querySelector('.makingTodo');
const taskForm = document.querySelector('.taskForm');
const UI = document.querySelector('.interface');
const formToCreateNewProject = document.querySelector('.formToCreateNewProject');
const projectSection = document.querySelector('.projectsSection'); 

// DOES the below function toggles the new task form
const showTheNewTaskBar = ()=>{
    interfaceUI.style.display = 'block';
}

// DOES creates new div for project
/*
this function creates a new project div and appends it to the parent element
the function also assigns the name filled in the form by the user
*/
const newProject = (projectName)=>{
    formToCreateNewProject.style.display = "none";
    const new_Project = document.createElement('button');
    new_Project.classList.add('new_Project');

    const leftPart = document.createElement('div');
    leftPart.classList.add('leftPart');
    leftPart.innerText = projectName;

    const rightpart = document.createElement('div');
    rightpart.innerText = 'X'
    rightpart.classList.add('rightPart');

    new_Project.append(leftPart);
    new_Project.append(rightpart);
    storingProjectsInLocalStorage(projectName)
    return new_Project;
}

const newProjectUI = (project_name)=>{

    formToCreateNewProject.style.display = "none";
    const new_Project = document.createElement('button');
    new_Project.classList.add('new_Project');

    const leftPart = document.createElement('div');
    leftPart.classList.add('leftPart');
    leftPart.innerText = project_name;

    const rightpart = document.createElement('div');
    rightpart.innerText = 'X'
    rightpart.classList.add('rightPart');

    new_Project.append(leftPart);
    new_Project.append(rightpart);
    projectSection.appendChild(new_Project);

}

// DOES create new task div
/*
newTaskDiv with broder color
creates the div and then appends it to the parent element
*/
const makeNewTaskUI = (task, date, priority)=>{
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');

    const taskPara = document.createElement('p');
    taskPara.innerText = task.value;
    taskPara.classList.add('taskPara');

    const datePara = document.createElement('p');
    datePara.innerText = date.value;
    datePara.classList.add('datePara');

    if(priority.value == '!!1'){
        newDiv.style.borderTop = "4px solid"
        newDiv.style.borderTopColor = "#CF455C";
    }
    else if(priority.value == '!!2'){
        newDiv.style.borderTop = "4px solid"
        newDiv.style.borderTopColor = "#FF8A5C";
    }
    else if(priority.value == '!!3'){
        newDiv.style.borderTop = "4px solid"
        newDiv.style.borderTopColor = "#FFDD67";
    }
    else{
        newDiv.style.borderTop = "4px solid"
        newDiv.style.borderTopColor = "#59CE8F"; 
    }
    storingTasksInLocalStorage(task.value, date.value, priority.value, selected)
    newDiv.appendChild(taskPara);
    newDiv.appendChild(datePara);
    makingTodo.append(newDiv);
}

const makeNewTaskUIWithoutAddingData = (task, date, priority)=>{
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');

    const taskPara = document.createElement('p');
    taskPara.innerText = task;
    taskPara.classList.add('taskPara');

    const datePara = document.createElement('p');
    datePara.innerText = date;
    datePara.classList.add('datePara');

    if(priority == '!!1'){
        newDiv.style.borderTop = "4px solid"
        newDiv.style.borderTopColor = "#CF455C";
    }
    else if(priority == '!!2'){
        newDiv.style.borderTop = "4px solid"
        newDiv.style.borderTopColor = "#FF8A5C";
    }
    else if(priority == '!!3'){
        newDiv.style.borderTop = "4px solid"
        newDiv.style.borderTopColor = "#FFDD67";
    }
    else{
        newDiv.style.borderTop = "4px solid"
        newDiv.style.borderTopColor = "#59CE8F"; 
    }
    newDiv.appendChild(taskPara);
    newDiv.appendChild(datePara);
    makingTodo.append(newDiv);
}

// DOES calls the UI function and makes the task div with data
/*
the below is the event where the data about the task date and the prioriy are entered by the user
the function calls the UI function that makes the actual div 
*/
taskForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const task = document.querySelector('.task');
    const date = document.querySelector('.date');
    const priority = document.querySelector('.prioritySelect');
    
    if(task.value == "" && date.value == "" && priority.value == "!!1"){}
    else{
        UI.style.display = "none";
        makeNewTaskUI(task, date, priority);
    }   
})

export {showTheNewTaskBar, newProject, makeNewTaskUI, newProjectUI, makeNewTaskUIWithoutAddingData}
