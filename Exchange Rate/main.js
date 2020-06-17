const currenceEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currenceEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// console.log(currenceEl_one.value);

function calculate(){

    const currence_one = currenceEl_one.value;
    const currence_two = currenceEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currence_one}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const rate = data.rates[currence_two];
        // console.log(rate);
        rateEl.innerHTML = `1 ${currenceEl_one.value} = ${rate} ${currenceEl_two.value}`;
        // console.log(amountEl_two.value);
        amountEl_two.value= (amountEl_one.value*rate).toFixed('2');
    })
}

currenceEl_one.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
currenceEl_two.addEventListener('change',calculate);
amountEl_two.addEventListener('input',calculate);

swap.addEventListener('click',()=>{
    const temp = currenceEl_one.value;
    currenceEl_one.value = currenceEl_two.value;
    currenceEl_two.value = temp;
    calculate();
})


calculate();