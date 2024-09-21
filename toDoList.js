const inputBox = document.getElementById('input-box');
const addBtn = document.querySelector('.addBtn');
const listContainer = document.querySelector('#list-container');

function addTask(){
    if (inputBox.value === ''){
        alert('You must to add some task...');
        saveData();
    } else {
       let li = document.createElement('li');
       li.innerHTML = inputBox.value;
       listContainer.appendChild(li);
       let span = document.createElement('span');
       span.innerHTML = '\u00d7';
       li.appendChild(span);
       saveData();
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);




addBtn.addEventListener('click', addTask);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();


//targhetam butoanele de filtrare
const allBtn = document.querySelector('.all');
const finishedBtn = document.querySelector('.finished');
const unfinishedBtn = document.querySelector('.unfinished');


//cream functiile  de filtrare
allBtn.addEventListener('click', () => {
    const tasks = listContainer.querySelectorAll('li'); 

    tasks.forEach(task => {
       task.style.display = 'block';
    }); 
});


//event listener for finished tasks
finishedBtn.addEventListener('click', () => {
    const tasks = listContainer.querySelectorAll('li'); 

    tasks.forEach(task => {
        if ( task.classList.contains('checked')){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });  
});


//event listener for unfinished tasks
unfinishedBtn.addEventListener('click', () =>{
    const tasks = listContainer.querySelectorAll('li'); 

    tasks.forEach(task => {
        if ( task.classList.contains('checked')){
            task.style.display = 'none';
        } else {
            task.style.display = 'block';
        } 
    });
});




/*
console.log('hgdh');
    for (let i = 0; i < listContainer.length; i++){
        let li = listContainer.innerHTML[i];
        console.log(li);
    }
    console.log('dhfd');
*/










//from chatgpt
/*
const filterButtons = document.querySelector('.all');

function filterTasks(filterType) {
    const tasks = document.querySelectorAll('#list-container li');
    tasks.forEach(task => {
        switch (filterType) {
            case 'all':
                task.style.display = 'list-item';
                break;
            case 'finished':
                task.style.display = task.classList.contains('checked') ? 'list-item' : 'none';
                break;
            case 'unfinished':
                task.style.display = task.classList.contains('checked') ? 'none' : 'list-item';
                break;
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filterType = this.getAttribute('data-filter');
        filterTasks(filterType);
    });
});
*/









//Filter functions
/*
const allBtn = document.querySelector('.all');
const finishedBtn = document.querySelector('.checked');
const unfinishedBtn = document.querySelector('.unfinished');
var completed;
function filterTask() {
    listContainer.innerHTML = localStorage.getItem('data');
    console.log(listContainer.innerHTML);
 
    for (let i = 0; i > listContainer.clientHeight; i++){
        let li = listContainer.innerHTML[i];
        if (li.classList.contains('checked')){
            return completed;
        } else {
            return completed = false;
        }
    }
    finishedBtn.addEventListener('click', () => {
        
    })
}
filterTask();*/