const calculate = new Calculate();

const input = document.querySelector('#input-string');
const button = document.querySelector('.btn');
const calcResult = document.querySelector('.calculator-result');
const spanResult = document.querySelector('.result');
const errorClass = document.querySelector('.error');
const errorMsg = document.querySelector('.error-msg');

function handleCalculate(e) {
	e.preventDefault();

	try {
		const output = calculate.add(input.value);

		if (isNaN(output)) throw new Error('Invalid delimiter/input value');

		if (output >= 0) {
			errorClass.classList.remove('active');

			calcResult.classList.add('active');
			spanResult.textContent = output;
		}
		input.value = '';
	} catch (error) {
		console.log('Error:', error, errorClass);
		calcResult.classList.remove('active');
		errorClass.classList.add('active');

		errorMsg.textContent = error.message;
	}
}

button.addEventListener('click', handleCalculate);
