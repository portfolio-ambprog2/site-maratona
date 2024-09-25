function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}
window.onload = function () {
    showSection('home');
}

function mudarSrc(novoSrc) {
    document.getElementById('meuIFrame').src = novoSrc;
}