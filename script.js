const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

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

    if (input.value == 0) {
        alert('add new item');
    }
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);

    e.preventDefault();
}

function deleteItem(e) {
    if (confirm('Are you sure?')) {
        if (e.target.className === 'fas fa-times') {
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