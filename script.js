
function playAudio(id) {
  document.getElementById(id).play();
}

function checkAnswers(event) {
  event.preventDefault();
  const answer = document.getElementById('q1').value.trim().toLowerCase();
  const feedback = document.getElementById('feedback');
  if (answer === 'goes') {
    feedback.textContent = 'Correct! ✅';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = 'Try again. ❌';
    feedback.style.color = 'red';
  }
  return false;
}
