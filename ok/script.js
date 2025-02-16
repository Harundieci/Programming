// Feedback functionality
document.addEventListener('DOMContentLoaded', function() {
    const submitFeedbackBtn = document.getElementById('submitFeedback');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const feedbackContainer = document.getElementById('feedbackContainer');

    if (submitFeedbackBtn && feedbackMessage && feedbackContainer) {
        submitFeedbackBtn.addEventListener('click', function() {
            const message = feedbackMessage.value.trim();
            
            if (message) {
                // Create new feedback item
                const feedbackItem = document.createElement('div');
                feedbackItem.className = 'feedback-item';
                feedbackItem.textContent = message;
                
                // Add timestamp
                const timestamp = document.createElement('small');
                timestamp.textContent = new Date().toLocaleString();
                feedbackItem.appendChild(document.createElement('br'));
                feedbackItem.appendChild(timestamp);
                
                // Add to container
                feedbackContainer.prepend(feedbackItem);
                
                // Clear input
                feedbackMessage.value = '';
                
                // Scroll to show new feedback
                feedbackContainer.scrollTop = 0;
            } else {
                alert('Please enter your feedback before submitting.');
            }
        });
    }
});
