
function runCode(inputId, outputId) {
  const code = document.getElementById(inputId).value;
  const output = document.getElementById(outputId);
  try {
    const result = eval(code);
    output.textContent = result ?? '✅ Код виконано без помилок';
  } catch (err) {
    output.textContent = '❌ Помилка: ' + err.message;
  }
};

