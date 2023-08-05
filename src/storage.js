const template = {
    project : [
        {
            project : '',
            tasks : [],
            date : [],
        },
    ]
}

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

function storingProjectsInLocalStorage(project_name){
    const templateForNewproject = {
        project : project_name,
        tasks : [],
        date : [],
    }
    const dataInLocalStorage = JSON.parse(localStorage.getItem("data"))
    dataInLocalStorage.project[dataInLocalStorage.project.length] = templateForNewproject
    localStorage.setItem('data', JSON.stringify(dataInLocalStorage));
}

export {storingTasksInLocalStorage, storingProjectsInLocalStorage}
