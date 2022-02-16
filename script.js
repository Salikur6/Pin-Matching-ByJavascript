function getPin() {

    const pin = Math.round(Math.random() * 10000);

    const pinLength = pin + '';
    if (pinLength.length == 4) {
        return pin;
    } else {
        // console.log('got 3 digit and call agien')
        return getPin();
    };
};

document.getElementById('generate-pin').addEventListener('click', function() {
    const pinInput = document.getElementById('pin-input');
    pinInput.value = getPin();


});


document.getElementById('calc-body').addEventListener('click', function(event) {

    const calcButton = event.target.innerText;

    const calcInput = document.getElementById('calc-input');

    if (isNaN(calcButton)) {
        if (calcButton == 'C') {
            calcInput.value = '';
        }
    } else {
        const calcInputValue = calcInput.value;
        const newCalcInput = calcInputValue + calcButton;

        calcInput.value = newCalcInput;
    };
});


document.getElementById('submit-pin').addEventListener('click', function() {
    const pinInput = document.getElementById('pin-input').value;
    const calcInput = document.getElementById('calc-input').value;

    const varifyFail = document.getElementById('varify-fail');
    const varifySuccess = document.getElementById('varify-success');

    if (pinInput == calcInput) {
        varifySuccess.style.display = 'block';
        varifyFail.style.display = 'none';
    } else {
        varifyFail.style.display = 'block';
        varifySuccess.style.display = 'none';
    };
    calcInput.value = '';
});



















































// document.getElementById('generate-pin').addEventListener('click', function() {
//     const pin = Math.round(Math.random() * 10000);


//     const pinInput = document.getElementById('pin-input');
//     const pinLength = pin + '';
//     if (pinLength.length == 4) {
//         const PinValue = pinInput.value = pin;

//     } else {
//         console.log(PinValue)
//     }
// })