const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
const firstCardBody = document.querySelector('.card-body');
const secondCardBody = document.querySelector('.card-body')[1];
//const txtTaskName = document.querySelector('#txtTaskName')
addEventListener();
function addEventListener() {
    //submit
    form.addEventListener('submit', addNewItem);
    //delete
    taskList.addEventListener('click', deleteItem);
    //delete all
    btnDeleteAll.addEventListener('click', deleteAll);
}
function addNewItem(e) {
    const newItem = input.value.trim();
   
      if (newItem === "") {
 
        showAlert('danger', 'Please add a item');
 
    }else {
       addItemToUI(newItem);
       addToDoStorage(newItem);
       showAlert('success', 'Successfully added')
    }
     
    e.preventDefault();
}
function getToDosFromStorage(){
    let items;
    if(localStorage.getItem('items')===null){
        items =[];
    }else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}
function addToDoStorage(newItem){
   let items = getToDosFromStorage();
   items.push(newItem);
   localStorage.setItem('items',JSON.stringify(items));

}
function showAlert(type, message){
 const alert = document.createElement("div");

 alert.className = `alert alert-${type}`;
 
 alert.textContent = message;
 
 firstCardBody.appendChild(alert);
 
 setTimeout(function(){
     alert.remove();
 },1000);
}
function addItemToUI(newItem){

 const li = document.createElement('li');
 const a = document.createElement('a');
 a.href ="#";
 a.className = "delete-item";
 a.classList = 'delete-item float-right';
 a.innerHTML = '<i class="fas fa-times"></i>';
 li.className = 'list-group-item list-group-item-secondary';
 li.appendChild(document.createTextNode(newItem));
 li.appendChild(a);
 taskList.appendChild(li);
 input.value="";
}

/* 
let items;

loadItems();



function loadItems(){
    items = getItemFromLS();
    items.forEach(function(item){
        createItem(item);
    });
}

// get items from local storage
function getItemFromLS(){
    if(localStorage.getItem('items')===null){
        items=[];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

function setItemToLS(text){
  
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}
function createItem(text){
    //create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    //add a to li
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);
}


function deleteItem(e) {
    
        if (e.target.className === 'fas fa-times') {
            if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
        e.preventDefault();
    }
}
// check 
function deleteAll(e) {
    taskList.childNodes.forEach(function (item) {
        if (confirm('Are you sure?')) {
            if (item.nodeType === 1) {
                item.remove();
            }
        }
    });
    e.preventDefault();
} */