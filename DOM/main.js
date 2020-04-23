var form = document.querySelector('form');
var itemsList = document.querySelector('.list-group');

form.addEventListener('submit',inputEvent);

function inputEvent(e) {
	e.preventDefault();
	var text = document.getElementById('inputForm').value;
	
	// creating new li element
	var li = document.createElement('li');

	// Create Delete Element
	var deletebtn = document.createElement('button');

	// Adding class to li
	li.className = 'list-group-item';

	// Adding Class to button
	deletebtn.className = 'btn btn-danger btn-sm float-right delete';

	// Creating TextNode to li
	var TextNode = document.createTextNode(text);

	// Creating TextNode to Delete
	var deleteNode = document.createTextNode('X');

	// Adding deleteNode to li
	deletebtn.appendChild(deleteNode);

	// adding textnode to li
	li.appendChild(TextNode);

	//Adding delete to li
	li.appendChild(deletebtn); 

	// adding li to item-list
	itemsList.appendChild(li);
}

// Remove
itemsList.addEventListener('click',removeItems);

function removeItems(e){
	// console.log(1);
	if(e.target.classList.contains('delete')){
		if(confirm('Are You Sure?')){
			var li = e.target.parentElement;
			itemsList.removeChild(li);
		}
	}
}

// Filter
var filter = document.getElementById('filter');

filter.addEventListener('keyup',filterItems);

function filterItems(e){
	// console.log(e.target.value);

	// converting to lowerCase
	var text = e.target.value.toLowerCase();

	var items = itemsList.getElementsByTagName('li');
	
	// Converting to array
	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display = 'block';
		}else{
			item.style.display = 'none';
		}
	});
}	