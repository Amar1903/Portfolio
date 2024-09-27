let MenuBtn = document.getElementById('MenuBtn');
MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
});
function downloadCV() {
    // Replace the URL below with the link to your CV file (PDF or any other format)
    const cvUrl = 'file:///C:/Users/Hi/Documents/Portfolio/Resume-Amar.pdf';
    window.open(cvUrl, '_blank');
}
