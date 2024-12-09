const calculate = new Calculate();

const input = document.querySelector('#input-string');
const button = document.querySelector('.btn');
console.log('JS file');
function handleCalculate(e) {
	e.preventDefault();

	const output = calculate.add(input.value);
	console.log('Result:', output);
	input.value = '';
}

button.addEventListener('click', handleCalculate);
