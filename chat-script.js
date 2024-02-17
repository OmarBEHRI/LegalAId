document.getElementById("chat-input").addEventListener("keypress", function(event) {
    // Check if Enter key is pressed (key code 13)
    if (event.keyCode === 13) {
        sendMessage();
    }
});

function sendMessage() {
    // Get the input value
    var message = document.getElementById("chat-input").value;

    if (message.trim() === "") {
        // Don't proceed if the message is empty or only whitespace
        return;
    }

    var messageBox = document.createElement("div");
    messageBox.className = "message-box";

    
    // Create a new paragraph element
    var paragraph = document.createElement("p");
    // Set the id to 'message'
    paragraph.className = "message";
    // Set the text content to the message
    paragraph.textContent = message;

    // Get the chat content container
    var chatContent = document.getElementById("chat-content");
    // Append the new paragraph to the container
    if (chatContent.firstChild){
        chatContent.insertBefore(paragraph, chatContent.firstChild);
    }
    else{
        chatContent.appendChild(paragraph);
    }

    // Clear the input field after sending the message
    document.getElementById("chat-input").value = "";
}