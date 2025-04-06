const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Image Slider
const slides = document.querySelectorAll('.slide');
let index = 0;

function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

setInterval(nextSlide, 3000);

// Form Validation

const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === '' || email === '' || phone === '') {
        message.textContent = "All fields are required!";
        message.style.color = "red";
    } 
    else if (!email.match(emailPattern)) {
        message.textContent = "Enter a valid Email!";
        message.style.color = "red";
    }
    else if (phone.length !== 10 || isNaN(phone)) {
        message.textContent = "Phone must be 10 digits!";
        message.style.color = "red";
    }
    else {
        message.textContent = "Form Submitted Successfully!";
        message.style.color = "green";
        form.reset();
    }
});
