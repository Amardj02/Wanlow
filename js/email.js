document.getElementById('email-input').addEventListener('focus', function() {
    if (this.value === '') {
        this.value = 'username@email.com'; // Show sample email when clicked
    }
});

document.getElementById('email-input').addEventListener('blur', function() {
    if (this.value === 'username@email.com') {
        this.value = ''; // Remove the sample email when focus is lost and nothing was entered
    }
});
