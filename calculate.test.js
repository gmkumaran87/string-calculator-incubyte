const Calculate = require('./calculate');
// import { Calculate } from './calculate';
const calculate = new Calculate();

describe('Calculate', function () {
	test('Should throw an error for empty input', () => {
		expect(() => calculate.validateInput('')).toThrow('Input is required');
	});

	test('Should calculate sum of positive numbers', () => {
		expect(calculate.add('1,2,3')).toBe(6);
	});

	test('Should calculate sum of positive numbers with custom delimiter', () => {
		expect(calculate.add('//;\\n1;2;3')).toBe(6);
	});

	test('Should handle numbers with new line delimiter', () => {
		expect(calculate.add('1\\n2,3')).toBe(6);
	});
	test('Should throw exception if array contains negative numbers', () => {
		expect(() => calculate.checkNegativeNumber([1, 2, 3, -4])).toThrow('negative numbers not allowed -4');
	});
	test('Should return true if string contains new line delimiter', () => {
		expect(calculate.isCommaAndNewLine('1\\n3,4')).toBe(true);
	});
});
