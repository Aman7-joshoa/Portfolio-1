



 // Navigation items Visibility when Menu is clicked
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarResponsive = document.querySelector('#navbarResponsive');

    navbarToggle.addEventListener('click', () => {
        navbarResponsive.classList.toggle('show');
    });

    const navItems = document.querySelectorAll('#navbarResponsive .nav-link');
    navItems.forEach((navItem) => {
        navItem.addEventListener('click', () => {
            if (navbarResponsive.classList.contains('show')) {
                navbarResponsive.classList.remove('show');
            }
        });
    });
});


  // Changing / Rotating dynamic text
const textValues = ["It's Nice To Meet You", "Front End Developer"];
let currentIndex = 0;
const dynamicText = document.getElementById("dynamicText");

function updateText() {
dynamicText.style.opacity = 0;
setTimeout(() => {
    dynamicText.textContent = textValues[currentIndex];
    currentIndex = (currentIndex + 1) % textValues.length;
    dynamicText.style.opacity = 1;
}, 0);
}
setInterval(updateText, 3000);


  // ABOUT ME BUTTON
function showSection(sectionId) {
const allContents = document.querySelectorAll('.content');

allContents.forEach((content) => {
    if (content.classList.contains(sectionId + '-content')) {
    content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
    } else {
    content.style.display = 'none';
    }
});
}



  // Contact Form Validation
document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    resetErrorMessages();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name) {
    displayErrorMessage('name', 'Please enter your name!');
    }

    if (!phone) {
    displayErrorMessage('phone', 'Please enter your phone number!');
    }

    if (!email) {
    displayErrorMessage('email', 'Please enter your email address!');
    } else if (!isValidEmail(email)) {
    displayErrorMessage('email', 'Please enter a valid email address!');
    }

    if (!message) {
    displayErrorMessage('message', 'Please enter your message.');
    }

    if (!hasErrors()) {
    alert('Form submitted successfully!');
    resetInputValues();
    }
});

function resetErrorMessages() {
    const errorElements = document.querySelectorAll('.text-danger');
    errorElements.forEach((element) => {
    element.textContent = '';
    });
}

function displayErrorMessage(fieldName, message) {
    const errorElement = document.getElementById(`${fieldName}Error`);
    errorElement.textContent = message;
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function hasErrors() {
    const errorElements = document.querySelectorAll('.text-danger');
    return Array.from(errorElements).some((element) => element.textContent !== '');
}

function resetInputValues() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
});


window.addEventListener('DOMContentLoaded', () => {
// Navbar shrink function
const navbarShrink = () => {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
    return;
    }
    navbarCollapsible.classList.toggle('navbar-shrink', window.scrollY !== 0);
};

// Shrink the navbar 
navbarShrink();

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink);
});