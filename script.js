let MenuBtn = document.getElementById('MenuBtn');
MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
});
function downloadCV(){
    // Replace the URL below with the link to your CV file (PDF or any other format)
    const cvUrl = 'resume.png';
    window.open(cvUrl, '_blank');
}
function Alert() {
    alert("Your message has been successfully sent,Thankyou...!"
    );
    return true; // Allows the form to be submitted after the alert.
}