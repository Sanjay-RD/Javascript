// // // Examine the document object

// // console.dir(document);
// // console.log(document.all);
// // console.log(document.all[2]);
// // console.log(document.URL);
// // console.log(document.body);
// // console.log(document.links);

// // // single Element
// // console.log(document.getElementById('main'));
// // console.log(document.querySelector('#main'));

// // // Multiple Element
// // console.log(document.getElementsByClassName('list-group-item'));
// // console.log(document.querySelectorAll('.list-group-item'));
// // console.log(document.getElementsByTagName('li'));

// // document.getElementById('header-title').innerText = "Item";

// // const headerText = document.getElementById('main-header');
// // headerText.style.borderBottom = "2px solid red";
// // // console.log(header);

// // const li = document.getElementsByClassName('list-group-item');
// // // console.log(li);
// // // li[0].textContent = 'Hello';
// // // li[0].style.backgroundColor = "red";

// // // Error msg will come
// // // li.style.backgroundColor = "red";

// // // for(let i=0;i<li.length;i++){
// // // 	// li[i].style.backgroundColor = "red";
// // // }

// // const list = document.querySelectorAll('.list-group-item');
// // // console.log(list);
// // list.forEach(function(liStyle){
// // 	// liStyle.style.backgroundColor = "green";
// // 	// console.log(liStyle);
// // });

// // var odd = document.querySelectorAll
// // ('.list-group-item:nth-Child(odd)');

// // var even =  document.querySelectorAll
// // ('.list-group-item:nth-Child(even)');

// // odd.forEach(change => (change.style.backgroundColor = "#ccc"));



// // // Traversing the DOM
// // var itemlist = document.querySelector('#items');
// // console.log(itemlist);

// // // childNode
// // console.log(itemlist.childNodes);
// // // Note: here text represent line break or white space

// // // Children
// // console.log(itemlist.children);
// // console.log(itemlist.children[2]);


// // // ParentNode
// // console.log(itemlist.parentNode);
// // // itemlist.parentNode.style.backgroundColor = "#ccc";


// // // ParentElement
// // console.log(itemlist.parentElement);

// // // FirstChild
// // console.log(itemlist.firstChild);

// // // FirstElementChild
// // console.log(itemlist.firstElementChild);
// // // itemlist.firstElementChild.style.color = "red";
// // // itemlist.lastElementChild.style.color = "red";


// // // Create Element
// // // create Div
// // var newDiv = document.createElement('div');
// // // Add Class
// // newDiv.className = 'hello';
// // // Add Id
// // newDiv.id = 'hello1'
// // // Add Attribute
// // newDiv.setAttribute('title','Hello Attri');

// // // create textnode
// // var newDivText = document.createTextNode('Hello World');

// // //Add Text to Div
// // newDiv.appendChild(newDivText);

// // console.log(newDiv);

// // var container = document.querySelector('header .container');
// // var h1 = document.querySelector('header h1');

// // // newDiv.style.fontSize = "20px";

// // // container.insertBefore(newDiv,h1);


// // // // Event in js
// // // var button = document.getElementById('button');

// // // button.addEventListener('click',buttonClick);

// // // function buttonClick(e){
// // 	// console.log('Button Clicked .....');
// // 	// document.querySelector('#header-title').textContent = 'Hello';
// // 	// const header = document.querySelector('#main-header');
// // 	// header.style.backgroundColor = "red";
// // 	// console.log(e.target);
// // 	// console.log(e.type);
// // 	// console.log(e.target.id);
// // 	// console.log(e.target.className);
// // 	// console.log(e.target.classList);

// // 	// console.log(e.clientX);
// // 	// console.log(e.clientY);
// // 	// // clientX and clienY is used left position And right Position of mouse Respectivelly and 
// // 	// // it show the actual window position of mouse

// // 	// // offsex will show the actual Element position
// // 	// console.log(e.offsetX);
// // 	// console.log(e.offsetY);

// // 	// console.log(e);
// // 	// console.log(e.altKey);
// // 	// console.log(e.ctrlKey);
// // 	// console.log(e.shiftKey);
// // // }

// // // Mouse Event
// // var button = document.getElementById('button');

// // // button.addEventListener('click',runEvent);
// // // button.addEventListener('dbclick',runEvent);
// // // button.addEventListener('mousedown',runEvent);
// // button.addEventListener('mouseup',runEvent);


// // function runEvent(e){
// // 	console.log('Event Type: '+e.type);
// // }


// // // Box Event
// // var output = document.getElementById('output');
// // var box = document.getElementById('box');
// // // box.addEventListener('mouseenter',boxEvent);
// // box.addEventListener('mousemove',boxEvent)

// // function boxEvent(e){
// // 	console.log(e.type);
// // 	// output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY +' </h3>';
// // 	output.innerHTML = `<h3>MouseX: ${e.offsetX} </h3><h3>MouseY: ${e.offsetY} </h3>`;
// // 	box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
// // }


// // Submit and Form Event
// var itemInput = document.querySelector('.form-control');
// var form = document.querySelector('form');
// var select = document.getElementById('select');

// // itemInput.addEventListener('keyup',runEvent);
// // itemInput.addEventListener('keypress',runEvent);

// // itemInput.addEventListener('focus',runEvent);
// // itemInput.addEventListener('blur',runEvent);

// // itemInput.addEventListener('cut',runEvent);
// // itemInput.addEventListener('paste',runEvent);

// itemInput.addEventListener('input',runEvent);

// function runEvent(e){
// 	console.log(e.type);
// 	// console.log(e.target.value);
// }


var itemInput = document.getElementById('form');
var item = document.getElementById('items');

itemInput.addEventListener('submit',addItems);
item.addEventListener('click',removeItems);

function addItems(e){
	e.preventDefault();

	// get input value
	var inputValue = document.getElementById('input').value;

	// create li
	var li = document.createElement('li');

	// add class to li
	li.className = 'list-group-item';

	// create Text node with input value
	// var textnode = document.createTextNode('hello');
	li.appendChild(document.createTextNode(inputValue));

	// form button delete
	var deletebtn = document.createElement('button');
	deletebtn.className = 'button';
	deletebtn.appendChild(document.createTextNode('x'));
	li.appendChild(deletebtn);

	// Append li to list
	item.appendChild(li);
}


// Remove Items
function removeItems(e){
	// console.log(e.target.classList);
	if(e.target.classList.contains('button')){
		if(confirm('Are you sure?')){
			var li = e.target.parentElement;
			items.removeChild(li);
		}
	}
}


var filter = document.querySelector('#filter');

filter.addEventListener('keyup',filterItems);

function filterItems(e){
	// console.log(e.target.value);

	// convert Text To LowerCase
	var text = e.target.value.toLowerCase();

	// get list
	var items = item.getElementsByTagName('li');

	// convert to an array
	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		// console.log(itemName);
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display = 'block';
		}else{
			item.style.display = 'none';
		}
	});

}






















