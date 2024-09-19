document.addEventListener('DOMContentLoaded', function () {
    const messagesContainer = document.getElementById('messages');

    function sendMessage(event) {
        if (event.key === 'Enter') {
            const userInput = document.getElementById('user-input');
            const userMessage = userInput.value.trim();
            if (userMessage) {
                appendMessage('You', userMessage);
                userInput.value = '';

                // Simulating AI response
                setTimeout(function () {
                    appendMessage('AI Buddy', 'Let me find the best learning tips for you...');
                }, 1000);
            }
        }
    }

    function appendMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = `${sender}: ${message}`;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    window.sendMessage = sendMessage;

    // Toggle chatbot visibility
    window.toggleChatbot = function () {
        const chatBox = document.getElementById('chat-box');
        if (chatBox.classList.contains('hidden')) {
            chatBox.classList.remove('hidden');
        } else {
            chatBox.classList.add('hidden');
        }
    };
});
