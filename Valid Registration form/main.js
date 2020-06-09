// DOM Element
const form = document.querySelector('.form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repassword = document.querySelector('#repassword');

// Error 
function showError(name,msg){
	const parentElement = name.parentElement;
	parentElement.className = 'form-control error';
	const errortext = parentElement.querySelector('small');
	errortext.innerHTML = msg;
}

// success 
function showSuccess(name){
	const parentElement = name.parentElement;
	parentElement.className = 'form-control success';
}

// get field name
function getFieldname(input){
	const parentElement = input.parentElement;
	const labelName = parentElement.querySelector('label').innerText;
	return labelName;
}

// check username
function checkUsername(username,min,max){
	if(username.value === ''){
		showError(username,`${getFieldname(username)} is required`);
	}else if(username.value.length < 3){
		showError(username,`${getFieldname(username)} must have more than ${min} characters`);
	}else if(username.value.length > 15){
		showError(username,`${getFieldname(username)} is greater than ${max}`);
	}else{
		showSuccess(username);
	}
}


// check password
function checkPassword(password,min){
	if(password.value === ''){
		showError(password,`${getFieldname(password)} is required`);
	}else if(password.value.length < 3){
		showError(password,`${getFieldname(password)} must have more than ${min} characters`);
	}else{
		showSuccess(password);
	}
}

// check repassword
function checkPasswordMatch(password,repassword){
	if(repassword.value === ''){
		showError(repassword,`${getFieldname(repassword)} is required`);
	}else if(repassword.value === password.value){
		showSuccess(repassword);
	}else{
		showError(repassword,`${getFieldname(password)} doesnot Match`);
	}
}


// email validate
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value)){
    	showSuccess(email);
    }else if(email.value === ''){
    	showError(email,`${getFieldname(email)} is required`);
    }else{
    	showError(email,'Email is not Valid');
    }
    
}


form.addEventListener('submit',function(e){
	e.preventDefault();

	checkUsername(username,3,15);

	checkPassword(password,2);

	checkEmail(email);

	checkPasswordMatch(password,repassword);

	/*
	if(username.value === ''){
		showError(username,'Username is required');
	}else{
		showSuccess(username);
	}

	if(email.value === ''){
		showError(email,'Email is required');
	}else if(!validateEmail(email.value)){
		showError(email,'Email is not valid');
	}else{
		showSuccess(email);
	}

	if(password.value === ''){
		showError(password,'password is required');
	}else if(password.value.length < 6){
		showError(password,'password must of 6 characters')
	}else{
		showSuccess(password);
	}

	if(repassword.value === ''){
		showError(repassword,'Confirm password is required');
	}else if(repassword.value === password.value){
		showSuccess(repassword);
	}else{
		showError(repassword,'Password is wrong');
	}
	*/
})