const input = document.querySelector('#input-string');
const button = document.querySelector('.btn');
console.log('JS file');
function handleCalculate(e) {
	console.log('Calculate', e);
}

button.addEventListener('click', handleCalculate);
