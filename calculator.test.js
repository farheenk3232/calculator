// Unit tests for calculator logic (run with: node calculator.test.js)
const { calculate } = require('./calculator.js');

let passed = 0;
let failed = 0;

function test(description, actual, expected) {
  if (actual === expected) {
    console.log(`  PASS  ${description}`);
    passed++;
  } else {
    console.log(`  FAIL  ${description}`);
    console.log(`        expected: ${expected}, got: ${actual}`);
    failed++;
  }
}

console.log('\nAddition');
test('adds two positive numbers',       calculate(3, 4, '+'),    7);
test('adds negative numbers',           calculate(-2, -3, '+'), -5);
test('adds zero',                       calculate(0, 5, '+'),    5);
test('adds decimals',                   calculate(1.5, 2.5, '+'), 4);

console.log('\nSubtraction');
test('subtracts two positive numbers',  calculate(10, 4, '-'),   6);
test('subtracts to a negative result',  calculate(3, 7, '-'),   -4);
test('subtracts zero',                  calculate(5, 0, '-'),    5);
test('subtracts decimals',              calculate(3.5, 1.5, '-'), 2);

console.log('\nInvalid input');
test('NaN first arg',  calculate(NaN, 5, '+'),   'Please enter two numbers');
test('NaN second arg', calculate(5, NaN, '-'),   'Please enter two numbers');
test('both NaN',       calculate(NaN, NaN, '+'), 'Please enter two numbers');

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
