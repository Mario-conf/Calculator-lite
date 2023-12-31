let darkTheme = false;

function clearDisplay() {
  document.getElementById('display').value = '';
}

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculateResult() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function calculateSquareRoot() {
  document.getElementById('display').value = Math.sqrt(eval(document.getElementById('display').value));
}

function calculateSin() {
  document.getElementById('display').value = Math.sin(eval(document.getElementById('display').value));
}

function calculateCos() {
  document.getElementById('display').value = Math.cos(eval(document.getElementById('display').value));
}

function toggleTheme() {
  darkTheme = !darkTheme;
  updateTheme();
}

function updateTheme() {
  const body = document.body;
  const calculator = document.querySelector('.calculator');
  const buttons = document.querySelectorAll('button');
  const input = document.getElementById('display');

  if (darkTheme) {
    body.style.backgroundColor = '#333';
    calculator.style.backgroundColor = '#444';
    calculator.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.1)';
    input.style.border = '1px solid #666';

    buttons.forEach(button => {
      button.style.backgroundColor = '#555';
      button.style.color = '#fff';
    });
  } else {
    body.style.backgroundColor = '#f8f9fa';
    calculator.style.backgroundColor = '#ffffff'; // Cambiado a blanco en modo claro
    calculator.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    input.style.border = '1px solid #ccc';

    buttons.forEach(button => {
      button.style.backgroundColor = 'rgb(40, 0, 58)';
      button.style.color = '#fff';
    });
  }

  input.style.color = darkTheme ? '#fff' : '#000'; // Agregado para el color de texto en modo oscuro y claro
}

updateTheme();
