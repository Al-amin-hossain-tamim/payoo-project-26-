//  get input value

function getInputValueNumber (id){
    const getInputValue = parseInt(document.getElementById(id).value);
    return getInputValue
}

// add money 

const validPin = 1234;



document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault()
    const bank = document.getElementById('bank').value ;
    const accountNumber = document.getElementById('account-number').value;
    // const amount = parseInt(document.getElementById('add-amount').value);
    const amount = getInputValueNumber('add-amount');
    const pinNumber = getInputValueNumber('pin-number');

    const totalBalance = parseInt(document.getElementById('available-balance').innerText);
    if(accountNumber.length < 11){
        alert('please write valid account number');
        return;
    }
    if(pinNumber !== validPin){
        alert('please write valid pin');
        return;
    }
    const newTotalBalance =  amount + totalBalance;
    document.getElementById('available-balance').innerText = newTotalBalance;

})

// withdraw feature
 
document.getElementById('withdraw-money-btn').addEventListener('click',function(event){
    event.preventDefault()
    const agentNumber = document.getElementById('agent-number').value;
    const withdrawAmount = getInputValueNumber('withdraw-amount');
    const withdrawPinNumber = getInputValueNumber('withdraw-pin-number')
    const availableBalance =  parseInt(document.getElementById('available-balance').innerText);

    if(agentNumber.length < 11){
        alert('please provide a valid number');
        return;
    }
    if(availableBalance < withdrawAmount){
        alert('your balance is insufficient');
        return
    }
    if(validPin !== withdrawPinNumber){
        alert('please provide a valid pin');
        return;
    }

    const restOfMoney = availableBalance - withdrawAmount;
    document.getElementById('available-balance').innerText = restOfMoney; 
})

// toggle feature 

document.getElementById('add-money').addEventListener('click',function(){
   document.getElementById('cashOut-money-form').style.display = 'none';
   document.getElementById('add-money-form').style.display = 'block'
})

document.getElementById('cashOut-btn').addEventListener('click',function(){
    document.getElementById('add-money-form').style.display = 'none'
   document.getElementById('cashOut-money-form').style.display = 'block';
})
document.getElementById('transfer-money-btn').addEventListener('click',function(){
    document.getElementById('add-money-form').style.display = 'none'
   document.getElementById('cashOut-money-form').style.display = 'block';
})