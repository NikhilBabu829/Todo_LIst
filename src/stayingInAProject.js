
import {selected} from './index.js';

const inboxButton = document.querySelector('.inboxButton');

inboxButton.addEventListener('click',()=>{
    selected.selectedIs = inboxButton.innerText.toLowerCase();
    if(selected.selectedIs == inboxButton.innerText.toLowerCase()){
        selected.selectedIs = "inbox";
        inboxButton.style.backgroundColor = "#181818";
        const allProjectButtons = document.querySelectorAll('.new_Project')
        allProjectButtons.forEach((ele)=>{
            ele.style.backgroundColor = "#414141";
        })
    }
})

function newProjectListener(createdProjects){
    createdProjects.forEach((ele)=>{
        const allProjectButtons = document.querySelectorAll('.new_Project')
        ele.addEventListener('click',()=>{
            selected.selectedIs = ele.children[0].innerText
            allProjectButtons.forEach((ele)=>{
                ele.style.backgroundColor = '#414141';
            })
            inboxButton.style.backgroundColor = "#414141";
            ele.style.backgroundColor = '#181818'
        })
    })
}

function inboxClicked(){
    const inboxButton = document.querySelector('inboxButton');
    if(selected.selectedIs == (inboxButton.innerText).toLowerCase()){
        inboxButton.style.backgroundColor = '#181818';
    }
}

export {newProjectListener, inboxClicked}
