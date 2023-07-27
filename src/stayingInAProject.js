// TODO : do something so that when we add a task it gets added to a particular project
//IDEA: make a function that keeps INBOX as selected use a variable that determines if it's selected or not
import {selected} from './index.js'

const inboxBtn = document.querySelector('.inboxButton');
inboxBtn.addEventListener('click',()=>{
    selected.trueOrFalse = true
    if(selected.trueOrFalse){
        inboxBtn.style.backgroundColor = "#222222"
    }
})

export {selected}
