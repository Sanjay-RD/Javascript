const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleMoneyBtn = document.getElementById('double-money');
const millionairesBtn = document.getElementById('millionaires');
const sortBtn = document.getElementById('sort');
const wealthBtn = document.getElementById('wealth');


var data = [];

getRandomUser();
getRandomUser();
getRandomUser();

function getRandomUser(){
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data =>{
        // console.log(data.results[0].name.first);
        const user = data.results[0];

        const newUser = {
            name: `${user.name.first} ${user.name.last}`,
            money: Math.floor(Math.random()*1000000) 
        }

        addData(newUser);
    })
}

function mapData(){
    data = data.map(user => {
        return { ...user, money: user.money*2}
    });

    upDateDom();
}

function sortByRichest(){
    data.sort((a,b)=> (b.money-a.money));
    upDateDom();
}

function showMillionaire(){
    data = data.filter(user => user.money > 1000000);
    upDateDom();
}

function calculateWealth(){
    var wealth = data.reduce((acc,user)=>(acc+=user.money),0);
    
    var wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formateMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);

}

function addData(obj){
    data.push(obj);
    upDateDom();
}

// console.log(data);


function upDateDom(providedData = data){
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';
    // console.log(providedData);
    providedData.forEach(item=>{
        // console.log(data)
        const element = document.createElement('div');
        element.className = 'person';
        element.innerHTML = `<strong>${item.name}</strong> ${formateMoney(item.money)}`;
        // console.log(element);
        main.appendChild(element);
    })
}

function formateMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// add user
addUserBtn.addEventListener('click',getRandomUser);
doubleMoneyBtn.addEventListener('click',mapData);
sortBtn.addEventListener('click',sortByRichest);
millionairesBtn.addEventListener('click',showMillionaire);
wealthBtn.addEventListener('click',calculateWealth);