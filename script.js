const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
const items = ['item 1', 'item 2', 'item 3', 'item 4'];

loadItems();

addEventListener();

function addEventListener() {
    //submit
    form.addEventListener('submit', addNewItem);
    //delete
    taskList.addEventListener('click', deleteItem);
    //delete all
    btnDeleteAll.addEventListener('click', deleteAll);
}

function loadItems(){
    items.forEach(function(item){
        createItem(item);
    })
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

function addNewItem(e) {

    if (input.value == 0) {
        alert('add new item');
    }
    
    // create item
    createItem(input.value);
    //clear input
    // input.value = '';
    e.preventDefault();
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
}