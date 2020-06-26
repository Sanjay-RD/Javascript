const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const form = document.getElementById('form');

// getting form Element
const name = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


toggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-show');
})

open.addEventListener('click',()=>{
    modal.classList.add('show-modal');
})

close.addEventListener('click',()=>{
    modal.classList.remove('show-modal');
})

window.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target == modal){
        modal.classList.remove('show-modal');
    }
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateUername(name,3,15);

    validateEmail(email);

    validatePassword(password,3,15);

    validateConfirmPassword(password2,password);
})

// validate username function
function validateUername(name,min,max){
    if(name.value == ''){
        showError(name,'Username is Required');
    }else if(name.value.length < 3){
        showError(name,'Username is too short');
    }else if(name.value.length > 15){
        showError(name,'Username is too long');
    }else{
        showSuccess(name);
    }
}


// validate Email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(email.value == ''){
        showError(email,'Email is Required');
    }else if(re.test(email.value)){
        showSuccess(email);
    }else{
        showError(email,'Email is not Valid');
    }
}

// validate passwored
function validatePassword(password,min,max){
    if(password.value == ''){
        showError(password,'Password is Required');
    }else if(password.value.length <3){
        showError(password,'Password is too short');
    }else if(password.value.length > 15){
        showError(password,'Password is too long');
    }else{
        showSuccess(password);
    }
}


// confirm password
function validateConfirmPassword(password2,password){
    if(password2.value == ''){
        showError(password2,'Confirm Password is Required');
    }else if(password2.value == password.value){
        showSuccess(password2);
    }else{
        showError(password2,'Password Doesnot match');
    }
}

function showError(input,msg){
    // console.log(input);
    const parentEl = input.parentElement;
    parentEl.className = 'error';
    const gettingSmall = parentEl.querySelector('small');
    gettingSmall.innerHTML = msg;
}

function showSuccess(input){
    const parentEl = input.parentElement;
    parentEl.className = 'success';
}