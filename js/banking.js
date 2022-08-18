
function getInputFieldValueById(inputIdField) {
    const inputFieldId = document.getElementById(inputIdField);
    const inputFieldValue = inputFieldId.value;
    const inputField = parseFloat(inputFieldValue);
    inputFieldId.value = '';
    if (isNaN(inputField)) {
        alert('Please provide a vaild number')
        return;
    }
    return inputField;
}

function getTextElementValueById(elementId) {
    const elementTextId = document.getElementById(elementId);
    const elementTextIdString = elementTextId.innerText;
    const elementTextValue = parseFloat(elementTextIdString);
    return elementTextValue;
}

function setTextElementValueById(elementId, newValue) {
    const elementTextId = document.getElementById(elementId);
    elementTextId.innerText = newValue;
}
// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited 
    const newDepositAmount = getInputFieldValueById('deposit-input');

    // get deposit total amount
    const previousDepositAmount = getTextElementValueById('deposit-total');
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    // depositTotal.innerText = newDepositAmount + previousDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    // update account balance
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newDepositBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newDepositBalanceTotal);
})

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get the amount withdraw
    const newWithdrawAmount = getInputFieldValueById('withdraw-input');

    // get withdraw total amount
    const previousWithdrawAmount = getTextElementValueById('withdraw-total');
    const newWithdrawAmountTotal = newWithdrawAmount + previousWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawAmountTotal);

    // update balance
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newWithdrawBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newWithdrawBalanceTotal);
})