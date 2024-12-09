class Calculate {
	constructor() {
		this.delimiter = ',';
		this.numbers = '';
	}

	add(numbers) {
		this.validateInput(numbers);

		if (this.isCustomDelimiter(numbers)) {
			this.delimiter = this.getCustomDelimiter(numbers);
			this.numbers = this.sanitizeString(numbers, 5);
		} else if (this.isCommaAndNewLine) {
			this.numbers = this.splitUsingCommaAndNewLine(numbers);
		}

		return this.calculateNumbers(this.numbers, this.delimiter);
	}

	splitUsingCommaAndNewLine(numbers) {
		console.log('Split using comma and newline', numbers);
		return numbers.replace(/\\n/g, ',');
	}

	sanitizeString(string, pos) {
		return string.slice(pos);
	}
	validateInput(input) {
		if (!input) {
			throw new Error('Input is required');
		}
	}
	calculateSingleInput(numbersStr) {
		let number = Number(numbersStr);
		return number;
	}

	isCustomDelimiter(numbers) {
		return numbers.startsWith('//');
	}

	isCommaAndNewLine(numbers) {
		return numbers.include('\n|,');
	}

	getCustomDelimiter(numbers) {
		return numbers.slice(2, 3);
	}

	calculateNumbers(numbers, delimiter = ',') {
		const arr = numbers.split(delimiter).map(Number);
		console.log(numbers, arr);

		return arr.reduce((sum, num) => sum + num, 0);
	}
}
