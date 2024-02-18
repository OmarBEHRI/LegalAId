document.getElementById("chat-input").addEventListener("keypress", function(event) {
    // Check if Enter key is pressed (key code 13)
    if (event.keyCode === 13) {
        sendMessage();
    }
});

let role = 0;

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

    var iconContainer = document.createElement("div");
    iconContainer.className = "icon-container";
    // Set the text content to the message
    paragraph.textContent = message;
     if (role % 2 == 0){
        var userImage = document.createElement("img");
        iconContainer.appendChild(userImage);
        userImage.src = "./user-image.webp";
        userImage.className = "img-icon";
     }
     else{
        var botImage = document.createElement("img");
        iconContainer.appendChild(botImage);
        botImage.src = "./bot-image.svg";
        botImage.className = "img-icon";
     }

     messageBox.appendChild(iconContainer);


    messageBox.appendChild(paragraph);

    // Get the chat content container
    var chatContent = document.getElementById("chat-content");
    // Append the new paragraph to the container
    if (chatContent.firstChild){
        chatContent.insertBefore(messageBox, chatContent.firstChild);
    }
    else{
        chatContent.appendChild(messageBox);
    }
    role++;
    // Clear the input field after sending the message
    document.getElementById("chat-input").value = "";
}