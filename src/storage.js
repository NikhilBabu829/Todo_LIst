import {selected} from './index.js'

const sampleData = {
    project : [
        {
            name : "inbox",
            tasks : [],
            date : []
        },
    ]
}

// does function that creates an inbox project in the storage system
const inboxProject = ()=>{
    localStorage.setItem("todoList", JSON.stringify(sampleData));
}

inboxProject()


// DOES function that adds new task to the respective project
const storeTaskToProject = (task, date, priority, selectedFromCallBack)=>{
    const storageAccess = localStorage.getItem("todoList");
    const JSONParseStorage = JSON.parse(storageAccess)
    // console.log(JSONParseStorage.project[0].name);
    for(let i = 0; i <= JSONParseStorage.project.length; i++){
        if(JSONParseStorage.project[i].name === selectedFromCallBack.slectedIs){
            JSONParseStorage.project[i].tasks.push(task.value)
            JSONParseStorage.project[i].date.push(date.value)
            const updatedStorage = JSON.stringify(JSONParseStorage)
            localStorage.setItem("todoList", updatedStorage)
        }
    }
}



// DOES adds new project to the storage
const storeProjectNameInStorage = (nameOfProject)=>{
    const storageTemplate = {
        name : "",
        tasks : [],
        date : [],
    }
    storageTemplate.name = nameOfProject
    const existingDataInStorage =JSON.parse(localStorage.getItem('todoList'))
    existingDataInStorage.project.push(storageTemplate);
    const dataInString = JSON.stringify(existingDataInStorage);
    localStorage.setItem("todoList", dataInString);
}

export {storeProjectNameInStorage, storeTaskToProject}