document.getElementById('email-input').addEventListener('focus', function() {
    if (this.value === '') {
        this.value = 'username@email.com'; 
    }
});

document.getElementById('email-input').addEventListener('blur', function() {
    if (this.value === 'username@email.com') {
        this.value = ''; 
    }
});
