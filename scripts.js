document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thanks, ${name}! Your message has been sent successfully.`);
    console.log(`Message from ${name} (${email}): ${message}`);
});
