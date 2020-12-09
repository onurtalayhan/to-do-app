const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
const firstCardBody = document.querySelector('.card-body');
const filter = document.querySelector('#filter');

addEventListener();
function addEventListener() {
    
    form.addEventListener('submit', addNewItem);
    document.addEventListener('DOMContentLoaded', loadAllItemsToUI);
    taskList.addEventListener('click',deleteItem);
    input.addEventListener('keyup',filterItems);
    btnDeleteAll.addEventListener('click',clearAllItems);
    
}
function clearAllItems(e){
    if(confirm('Are you sure wnat to delete all?')){
        while(taskList.firstElementChild != null){
            taskList.removeChild(taskList.firstElementChild);
        }
        localStorage.removeItem('items');
    }
}
function filterItems(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll('.list-group-item');
    
    
     listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1){
        listItem.setAttribute('style', 'display:None !important' );
        }else{
            
            listItem.setAttribute('style','display: Block');
            
        }
    })
 
}
function deleteItem(e){
    
    if(e.target.className === 'fas fa-times'){
        e.target.parentElement.parentElement.remove();
        deleteItemFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert('success','Successful');
    }
}
function deleteItemFromStorage(deleteItem){
  
    items = getToDosFromStorage();
    
    items.forEach(function(item,index){
  
        if(item == deleteItem){
            items.splice(index,1);
            localStorage.setItem('items', JSON.stringify(items));
           
        }
    });
}
function loadAllItemsToUI(){
    let items = getToDosFromStorage();
    items.forEach(function(item){
        addItemToUI(item);
    })
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

