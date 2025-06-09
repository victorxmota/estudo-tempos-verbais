function speak(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'en-GB';
    window.speechSynthesis.speak(msg);
}

function checkAnswer(id, correctAnswer) {
    const userInput = document.getElementById('answer-' + id).value.trim().toLowerCase();
    const feedback = document.getElementById('feedback-' + id);

    if (userInput === correctAnswer.toLowerCase()) {
        feedback.textContent = "✅ Correto!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "❌ A resposta correta é: " + correctAnswer;
        feedback.style.color = "red";
    }
}