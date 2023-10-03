function submitFeedback(event) {
    event.preventDefault();
    const name = document.getElementById("participant-name").value;
    const feedback = document.getElementById("trainer-feedback").value;

    if (feedback >= 1 && feedback <= 5) {
        alert(`Feedback rating of ${name} is ${feedback}`);
    } else {
        alert("Please select a valid feedback rating.");
    }
}

function clearForm() {
    document.getElementById("feedback-form").reset();
}
