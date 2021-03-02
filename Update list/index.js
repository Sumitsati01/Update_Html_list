var btnAdd = document.getElementById('add-item');
var btnUpdate = document.getElementById('update-item');
var btnRemove = document.getElementById('delete-item');
var list = document.getElementById('todo-list');
var firstItem = document.getElementById('Item1');

var input = document.getElementById('todo-input');

var inputValue = '';
input.addEventListener('input', function(e) {
    inputValue = e.target.value;
})


input.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        addList();
    }
});

function createNewNode() {
    var newList = document.createElement('li')
    var textNode = document.createTextNode(inputValue);
    newList.appendChild(textNode);
    newList.id = "Item" + (list.childElementCount + 1);
    return newList;
}

function addList(e) {
    if (inputValue !== undefined && inputValue !== null && inputValue !== '') {
        var newList = createNewNode();
        list.appendChild(newList);
        console.log(list.childElementCount);


        input.value = '';
        inputValue = '';

    } else {
        alert("Please Enter Valid Value");
    }
}


btnAdd.addEventListener('click', addList);

btnUpdate.addEventListener('click', function() {
    var first = list.firstElementChild;
    var newList = createNewNode();

    list.replaceChild(newList, first)

})

btnRemove.addEventListener('click', function() {
    var first = list.firstElementChild;
    list.removeChild(first);
})