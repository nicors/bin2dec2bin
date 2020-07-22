let binaryInput = document.querySelector('#binaryInput');
let decimalInput = document.querySelector('#decimalInput');


if (binaryInput) {
    binaryInput.addEventListener('input', ()=> {
        let binaryDigitsArray = preparesBinaryStringToDecimalConvertion(binaryInput.value);
        let decimalNumber = binaryToDecimal(binaryDigitsArray);

        decimalInput.value = decimalNumber;
    });
}

let binaryToDecimal = (binaryDigitsArray) => {
    let decimalNumber = 0;
    binaryDigitsArray.forEach((binaryDigit, index) => {
        console.log
        if (binaryDigit == 1) {
            decimalNumber += Math.pow(2, index);
        }
    });
    return decimalNumber;
}

let preparesBinaryStringToDecimalConvertion = (binaryString) => {
    return binaryString.split('').reverse();
}

if (decimalInput) {
    decimalInput.addEventListener('input', () => {
        let binaryDigitsArray = decimalStringToBinaryDigitsArray(parseInt(decimalInput.value));
        let binaryNumber = binaryDigistArrayToBinaryNumber(binaryDigitsArray);

        binaryInput.value = binaryNumber;
    });
}


let decimalStringToBinaryDigitsArray = (decimalNumber) => {
    let binaryArray = [];
    
    while (decimalNumber >= 1) {
        binaryArray.push(decimalNumber % 2)
        decimalNumber = Math.floor(decimalNumber / 2);   
    }

    return binaryArray;
}

let binaryDigistArrayToBinaryNumber = (binaryDigitsArray) => {
    return binaryDigitsArray.reverse().join('');
}

