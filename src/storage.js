import {newProjectUI, makeNewTaskUIWithoutAddingData} from './newTaskProject';

//Does a sample template for local storage
const template = {
    project : [
        {
            project : '',
            tasks : [],
            date : [],
        },
    ]
}

// does function that stores tasks, dates in their respective project
function storingTasksInLocalStorage(taks_name, date, selected){
    if(localStorage.getItem("data")){
        const existingData =  JSON.parse(localStorage.getItem("data"));
        for(let i=0; i<existingData.project.length; i++){
            if(existingData.project[i].project == selected.selectedIs){
                existingData.project[i].project = selected.selectedIs;
                existingData.project[i].tasks.push(taks_name);
                existingData.project[i].date.push(date);
                localStorage.setItem("data", JSON.stringify(existingData));
            }
        }
    }
    else{
        const sampleTemplate = template
        sampleTemplate.project[0].project = selected.selectedIs;
        sampleTemplate.project[0].tasks.push(taks_name);
        sampleTemplate.project[0].date.push(date);
        localStorage.setItem("data", JSON.stringify(sampleTemplate))
    }
}

// does stores a new project
function storingProjectsInLocalStorage(project_name){
    const templateForNewproject = {
        project : [
            {
                project : project_name,
                tasks : [],
                date : [],
            },
        ]
    }
    if(localStorage.getItem("data")==null){
        localStorage.setItem("data", JSON.stringify(templateForNewproject))
    }
    else{
        const dataInLocalStorage = JSON.parse(localStorage.getItem("data"))
        dataInLocalStorage.project[dataInLocalStorage.project.length] = templateForNewproject
        localStorage.setItem('data', JSON.stringify(dataInLocalStorage));
    }
}

function retreivingDataFromLocalStorage(){
    if(localStorage.getItem("data") !== null){
        const retrievedDataInLocalStorage = JSON.parse(localStorage.getItem("data"))
        for(let i=0;i<retrievedDataInLocalStorage.project.length;i++){
            if(retrievedDataInLocalStorage.project[i].project == "inbox"){
                for(let j=0;j<retrievedDataInLocalStorage.project[i].tasks.length || j<retrievedDataInLocalStorage.project[i].date.length;j++){
                    makeNewTaskUIWithoutAddingData(retrievedDataInLocalStorage.project[i].tasks[j],retrievedDataInLocalStorage.project[i].date[j])
                }
                continue
            }
            else{
                newProjectUI(retrievedDataInLocalStorage.project[i].project)
                for(let k=0;k<retrievedDataInLocalStorage.project[i].tasks.length || k<retrievedDataInLocalStorage.project[i].date.length;k++){
                    makeNewTaskUIWithoutAddingData(retrievedDataInLocalStorage.project[i].tasks[k],retrievedDataInLocalStorage.project[i].date[k])
                }
            }
        }
    }
}

export {storingTasksInLocalStorage, storingProjectsInLocalStorage, retreivingDataFromLocalStorage}
