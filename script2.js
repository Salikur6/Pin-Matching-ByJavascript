function getPin() {
    const pinInput = document.getElementById('pin-input');
    const randomPin = Math.round(Math.random() * 10000);
    const pinLength = randomPin + '';

    if (pinLength.length == 4) {
        const pin = pinInput.value = randomPin;
        return pin;
    } else {
        return getPin();
    }
}

// generate pin into input ------------------------
document.getElementById('generate-pin').addEventListener('click', function() {
    getPin()

})

// calculator input-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

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

    }
})

document.getElementById('submit-pin').addEventListener('click', function() {
    const pinInput = document.getElementById('pin-input').value;
    const calcInput = document.getElementById('calc-input').value;

    const varifySuccess = document.getElementById('varify-success')
    const varifyFail = document.getElementById('varify-fail')

    if (pinInput == calcInput) {
        varifySuccess.style.display = 'block';
        varifyFail.style.display = 'none';
    } else {
        varifyFail.style.display = 'block';
        varifySuccess.style.display = 'none';
    };
})