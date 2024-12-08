 let itemInput = document.getElementById('itemInput');
 let itemlist = document.getElementById('itemlist');
 let addItemBtn = document.getElementById('addItemBtn');
 let soldItemBtn = document.getElementById('soldItemBtn');
 let clearItemBtn = document.getElementById('clearItemBtn');



 
 //items added
addItemBtn.addEventListener('click', () => {
  let newItemText = itemInput.value};

  
  
  function childAddition (newItemList) {
    let newItem = document.createElement('li');
itemlist.appendChild(newItem);
    itemInput.Value = '';
  }


// update shoppingList
  let  shoppingList = [];
function addProduct (newItemText) {
    shoppingList.push(newItemText);
    return newItemText;
}
  



//show sold items
 soldItemBtn.addEventListener('click', () => {
    let items = itemlist.querySelectorAll('li');
    items.forEach(items => {
        if(items.textContent === itemInput.value) {
            items.style.backgroundColor = '#00FF00';
            items.style.textDecoration = 'linethrough';
        }
    });
});  



//clear the list
clearItemBtn.addEventListener('click'), () => {
    itemlist.value = '';
}




