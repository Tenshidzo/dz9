//task1
let radios = document.querySelectorAll('input[name="width"]');
let image = document.getElementById('image');

radios.forEach(radio => {
    radio.addEventListener('change', function() {
    image.style.width = this.value + 'px';
    });
});

//task2
function formatText() {
    let text = document.getElementById('messageTextarea').value;
  
    let bold = document.getElementById('boldCheckbox').checked ? 'bold' : 'normal';
    let italic = document.getElementById('italicCheckbox').checked ? 'italic' : 'normal';
    let color = document.querySelector('input[name="color"]:checked') ? document.querySelector('input[name="color"]:checked').value : 'black';
  
    let formattedText = document.getElementById('formattedText');
    formattedText.innerHTML = ''; // Очищаем содержимое
    formattedText.style.fontWeight = bold;
    formattedText.style.fontStyle = italic;
    formattedText.style.color = color;
    formattedText.textContent = text.trim() === '' ? 'Текст не введен' : text;
  }
  
  let colorCheckbox = document.getElementById('colorCheckbox');
  colorCheckbox.addEventListener('change', function() {
    let colorOptions = document.getElementById('colorOptions');
    colorOptions.style.display = this.checked ? 'block' : 'none';
    if (!this.checked) {
      let formattedText = document.getElementById('formattedText');
      formattedText.style.color = 'black';
      let selectedColor = document.querySelector('input[name="color"]:checked');
      if (selectedColor) {
        selectedColor.checked = false;
      }
    }
  });
//task 3
let totalScore = 0;
let currentQuestion = 1;
let questions = document.querySelectorAll('.question');
let totalQuestions = questions.length;
let nextButton = document.querySelector('button[type="button"]');

function showNextQuestion() {
  let selectedAnswer = document.querySelector(`input[name="answer${currentQuestion}"]:checked`);
  if (!selectedAnswer) {
    alert('Подумайте еще');
    return;
  }

  totalScore += parseInt(selectedAnswer.value);
  questions[currentQuestion - 1].style.display = 'none';
  currentQuestion++;

  if (currentQuestion > totalQuestions) {
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('getResultBtn').style.display = 'inline-block';
  } else {
    questions[currentQuestion - 1].style.display = 'block';
  }
  if(currentQuestion > totalQuestions){
    document.getElementById('nextBtn').style.display = 'none';
  }
}

function showResult() {
  document.getElementById('result').textContent = `Вы набрали ${totalScore} баллов из ${totalQuestions * 10}`;
}