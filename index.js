const calculate = new Calculate();

const input = document.querySelector('#input-string');
const button = document.querySelector('.btn');
const calcResult = document.querySelector('.calculator-result');
const spanResult = document.querySelector('.result');
console.log('JS file');
function handleCalculate(e) {
	e.preventDefault();

	const output = calculate.add(input.value);
	console.log('Result:', output);

	if (output >= 0) {
		calcResult.classList.add('active');
		spanResult.textContent = output;
	}
	input.value = '';
}

button.addEventListener('click', handleCalculate);
