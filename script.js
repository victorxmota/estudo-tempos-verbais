
function speak(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'en-GB';  // voz britânica
    window.speechSynthesis.speak(msg);
}

function checkAnswer() {
    const userInput = document.getElementById('userAnswer').value.trim().toLowerCase();
    const correctAnswer = "goes";
    const feedback = document.getElementById('feedback');

    if (userInput === correctAnswer) {
        feedback.textContent = "✅ Correto! 'He goes to the gym every day.'";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "❌ Tente novamente. A resposta correta é: goes.";
        feedback.style.color = "red";
    }
}
