document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent, Thank you!');
    window.location.href = '../html/index.html'; // This line redirects to another page, so it is commented out.
});
