// Opening Animation
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("opening-animation").style.display = "none";
        document.getElementById("login-box").style.display = "flex";
    }, 2000); // Display for 2 seconds
});

// Validate Login
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "s8rounty" && password === "el mezyana") {
        document.getElementById("login-box").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("login-error").style.display = "block";
    }
}

// Slideshow Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 3 seconds
}
function openGiftBox() {
    // Show the gift items when the gift box is clicked
    const giftItems = document.getElementById('gift-items');
    giftItems.classList.remove('hidden');
}

function showGiftMessage(item) {
    // Show a message based on the item clicked
    const messageText = document.getElementById('message-text');
    switch(item) {
        case 'chocolate':
            messageText.textContent = "hathii 7ajaaa bninaa ya bninaaaa ❤️‍🩹";
            break;
        case 'doll':
            messageText.textContent = "esmou boubou w i7bkk brchaa🥹";
            break;
        case 'shirt':
            messageText.textContent = "el mezyan ma yo5rj 3lihh kn el mezyann 🥹❤️‍🩹";
            break;
        case 'flowers':
            messageText.textContent = "hathi wardaa ya wardaaaa 🥹";
            break;
    }
    // Show the message pop-up
    const messagePopup = document.getElementById('gift-message');
    messagePopup.classList.remove('hidden');
}

function closeMessage() {
    // Close the gift message pop-up
    const messagePopup = document.getElementById('gift-message');
    messagePopup.classList.add('hidden');
}


// Function to close the message
function closeMessage() {
    document.getElementById("gift-message").classList.add("hidden");
}
