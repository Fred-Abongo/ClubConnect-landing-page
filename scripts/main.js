// Function to handle form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (more complex validation can be added as needed)
    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Example: Send form data to server (this is a placeholder, replace with actual server request)
    console.log('Form submitted with values:', { name, email, password });

    // Simulate successful submission
    alert('Sign up successful!');

    // Reset form
    document.getElementById('signup-form').reset();
});

// Function to scroll to the sign-up form
document.querySelector('#cta button').addEventListener('click', function() {
    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
});