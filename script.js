function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Défilement fluide vers la section
    }
}

// Ajoutez un événement pour détecter le clic sur "Home" et effectuer un défilement fluide vers le haut
document.querySelector('a[href="#"]').addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement fluide vers le haut
});

// Ajoutez un événement pour détecter le clic sur "Gallery" et effectuer un défilement stylé à travers toutes les collections
document.querySelector('a[href="#gallery"]').addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const sections = ['section-homme', 'section-femme', 'section-fille', 'section-garcon'];
    let delay = 0;

    sections.forEach((sectionId) => {
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' }); // Défilement fluide vers chaque section
                // Ajoutez une animation de zoom temporaire
                section.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                section.style.transform = 'scale(1.05)';
                section.style.opacity = '1';

                setTimeout(() => {
                    section.style.transform = 'scale(1)';
                }, 500); // Réinitialise le zoom après l'animation
            }
        }, delay);
        delay += 1500; // Ajoute un délai progressif entre chaque section
    });
});

// Ajoutez un événement pour ouvrir les liens des réseaux sociaux dans un nouvel onglet
document.querySelectorAll('.social-link').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut
        const url = link.getAttribute('href'); // Récupère l'URL du lien
        if (url) {
            window.open(url, '_blank'); // Ouvre le lien dans un nouvel onglet
        }
    });
});

// Ajoutez un événement pour les boutons de paiement
document.querySelectorAll('.payment-button').forEach((button) => {
    button.addEventListener('click', () => {
        const paymentMethod = button.textContent.trim();
        alert(`Vous avez choisi de payer avec ${paymentMethod}. Veuillez suivre les instructions pour finaliser votre commande.`);
    });
});

// Ajoutez un événement pour basculer entre le mode sombre et le mode clair
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('.footer').classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
