const shoppingListContainer = document.getElementById('shoppingList');
 const itemInput = document.getElementById('itemInput');
 const itemlist = document.getElementById('itemlist');
 const addItemBtn = document.getElementById('addItemBtn');
 const soldItemBtn = document.getElementById('soldItemBtn');
 const clearItemBtn = document.getElementById('clearItemBtn');



// update shoppingList
let  shoppingList = [];
function addProduct (newItemText) {
    shoppingList.push(newItemText);
    return newItemText;
}
   
function childAddition (newItemList) {
  let newItem = document.createElement('li');
itemlist.appendChild(newItem);
  itemInput.Value = '';
}


//items added
addItemBtn.addEventListener('click', addItemBtn);



//show sold items
 soldItemBtn.addEventListener('click', () => {
    let items = itemlist.querySelectorAll('li');
    items.forEach(items => {
        if(items.textContent.toLocaleLowerCase() === itemInput.value.toLowerCase()) {
            items.style.backgroundColor = '#00FF00';
            items.style.textDecoration = 'linethrough';
        }
    });
});  



//clear the list
clearItemBtn.addEventListener('click', () => {
    itemlist.value = '';
});





