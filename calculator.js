function calculate(a, b, op) {
  if (isNaN(a) || isNaN(b)) return 'Please enter two numbers';
  return op === '+' ? a + b : a - b;
}
function handleCalculate(op) {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').textContent = calculate(a, b, op);
}

if (typeof module !== 'undefined') module.exports = { calculate };
