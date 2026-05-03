function calculate(a, b, op) {
  if (isNaN(a) || isNaN(b)) return 'Please enter two numbers';
  console.log("a,b",a,b)
  console.log("op",op)
  if (op === '+') return a / b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
}
function handleCalculate(op) {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').textContent = calculate(a, b, op);
}

if (typeof module !== 'undefined') module.exports = { calculate };
