import './sassFiles/style.scss';
import {showTheNewTaskBar, newProject} from './newTaskProject.js'; 
import './stayingInAProject';
import './newTaskProject'
import {retreivingDataFromLocalStorage, deleteAproject, removeTaskFromStorage} from './storage.js';
import {newProjectListener, inboxClicked} from './stayingInAProject'

const new_Project = document.querySelector('.newProject'); // btn to create a new project
const projectSection = document.querySelector('.projectsSection'); // div that contains the project
const newProjectForm = document.querySelector('.newProjectForm'); // the form itself
const formToCreateNewProject = document.querySelector('.formToCreateNewProject'); //div containing the form

const newTask = document.querySelector('.newTask');

const body = document.querySelector('body');

body.onload = retreivingDataFromLocalStorage();

var selected = {
    selectedIs : "inbox"
};

//DOES popUp to create new project
new_Project.addEventListener('click', ()=>{
    formToCreateNewProject.style.display = 'block';
})

// DOES creates a new project with the specified name
newProjectForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const projectName = document.querySelector('.projectName');
    const projectElement = newProject(projectName.value)
    projectSection.appendChild(projectElement);
    const new_project = document.querySelectorAll('.new_Project');
    newProjectListener(new_project)

    const deleteProject = document.querySelectorAll('.rightPart');
    deleteProject.forEach((element)=>{
        element.addEventListener('click',()=>{
            deleteAproject(element.parentElement)
            element.parentElement.remove()
        })
    })
})

const new_project = document.querySelectorAll('.new_Project');
newProjectListener(new_project)

const deleteProject = document.querySelectorAll('.rightPart');
deleteProject.forEach((element)=>{
    element.addEventListener('click',()=>{
        deleteAproject(element.parentElement)
        element.parentElement.remove()
    })
})

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click',(e)=>{
    e.preventDefault();
    formToCreateNewProject.style.display = 'none';
})

// DOES event to show or hide the new task form
newTask.addEventListener('click', ()=>{
    showTheNewTaskBar();
});

const allTasks = document.querySelectorAll(".newDiv");
allTasks.forEach((task)=>{
    task.addEventListener('click',()=>{
        removeTaskFromStorage(task);
    });
})

export {selected}
