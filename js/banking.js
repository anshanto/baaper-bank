
// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // get deposit total amount
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositAmountTotal = newDepositAmount + previousDepositAmount;
    depositTotal.innerText = newDepositAmountTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmountTotal;
    balanceTotal.innerText = newBalanceTotal;

    // clear deposit input field
    depositInput.value = '';
})

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get the amount withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    // get withdraw total amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    const newWithdrawAmountTotal = newWithdrawAmount + previousWithdrawAmount;
    withdrawTotal.innerText = newWithdrawAmountTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmountTotal;
    balanceTotal.innerText = newBalanceTotal;


    // clear withdraw input field
    withdrawInput.value = '';
})