document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== 'assets/cv.pdf') {
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelector('.formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const mensaje = document.querySelector('#mensaje').value;

    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    alert('¡Tu respuesta ha sido enviada!');
    this.reset();
});
