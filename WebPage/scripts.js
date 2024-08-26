document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.send('service_0xvwfmg', 'template_py9c5z7', {
            from_name: name,
            from_email: email,
            message: message
        })
        .then((response) => {
            console.log('Email sent successfully:', response);
            alert(`Thank you for contacting us!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
            form.reset(); // Optionally, reset the form
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert('There was a problem sending your message. Please try again later.');
        });
    });

    // Fade-in effect for elements
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing the element after it becomes visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Header shrink on scroll
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust the scroll position threshold as needed
            header.classList.add('header-small');
        } else {
            header.classList.remove('header-small');
        }
    });
});
