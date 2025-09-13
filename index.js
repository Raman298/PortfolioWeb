
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Contact form handling
        // document.querySelector('.contact-form').addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     const name = document.getElementById('name').value;
        //     const email = document.getElementById('email').value;
        //     const message = document.getElementById('message').value;
            
        //     if (name && email && message) {
        //         alert('Thank you for your message! I\'ll get back to you soon.');
        //         this.reset();
        //     } else {
        //         alert('Please fill in all fields.');
        //     }
        // });
        // Initialize EmailJS
emailjs.init("9eTR6K_w51MYfqyF_"); // Replace with your actual public key

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Send email using EmailJS
        emailjs.send(
            "service_m3294np", // Replace with your EmailJS service ID
            "template_v8obfrh", // Replace with your EmailJS template ID
            {
                from_name: name,
                from_email: email,
                message: message,
            }
        ).then(
            function() {
                alert('Thank you for your message! I\'ll get back to you soon.');
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
                this.reset();
            },
            function(error) {
                alert('Sorry, there was an error sending your message. Please try again.');
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
                console.error('EmailJS error:', error);
            }
        );
    } else {
        alert('Please fill in all fields.');
    }
});

        // Add subtle hover effects to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
