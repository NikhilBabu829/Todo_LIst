import './sassFiles/style.scss';
import {showTheNewTaskBar, newProject} from './newTaskProject.js'; 
import './storage.js'; // the localStorage js file
import {storeProjectNameInStorage} from  './storage.js'; // the localStorage js file
import './stayingInAProject.js';  //DOES determines which project is selected

const new_Project = document.querySelector('.newProject'); // btn to create a new project
const projectSection = document.querySelector('.projectsSection'); // div that contains the project
const newProjectForm = document.querySelector('.newProjectForm'); // the form itself
const formToCreateNewProject = document.querySelector('.formToCreateNewProject'); //div containing the form

const newTask = document.querySelector('.newTask');


//DOES popUp to create new project
/*
the below is the event to show the popUp to create a new project
*/
new_Project.addEventListener('click', ()=>{
    formToCreateNewProject.style.display = 'block';
})



/*
// DOES creates a new project with the specified name
creates new project with the given project name
it contains the form to make the new project and the function to create the button for that project 
it also contains the function to delete the project
*/
newProjectForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const projectName = document.querySelector('.projectName');
    const projectElement = newProject(projectName.value)
    storeProjectNameInStorage(projectName.value)
    projectSection.appendChild(projectElement);

    const deleteProject = document.querySelectorAll('.rightPart');
    deleteProject.forEach((element)=>{
    element.addEventListener('click',()=>{
        element.parentElement.remove()
    })
})
})

// DOES event to show or hide the new task
/*
this below is the event to show and hide the new task popUp dialog
 */
newTask.addEventListener('click', ()=>{
    showTheNewTaskBar();
});


export var selected = {
    trueOrFalse : false,
    slectedIs : "inbox"
};
