let amountInput = document.querySelector('.amount');
let interestInput = document.querySelector('.interest-rate');
let tenureInput = document.querySelector('.tenure');
let loanOutput = document.querySelector('.loan p')
let interestOutput = document.querySelector('.loan-interest p')

function calculate(){
    const totalAmount= (amountInput.value *(1 + (interestInput.value/100)*tenureInput.value));
    const interest = totalAmount - amountInput.value
    amountInput.value = '';
    interestInput.value = '';
    tenureInput.value = '';
    loanOutput.textContent = totalAmount;
    interestOutput.textContent = interest;
}

