// script.js
function appendValue(value) {
    document.getElementById('result').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('result').value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    const display = document.getElementById('result');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  