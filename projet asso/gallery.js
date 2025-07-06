document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const thumbs = document.querySelectorAll('.thumb');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let intervalId;

    function showSlide(index) {
        // Masquer toutes les slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Désactiver toutes les miniatures
        thumbs.forEach(thumb => {
            thumb.classList.remove('active');
        });
        
        // Afficher la slide courante
        slides[index].classList.add('active');
        thumbs[index].classList.add('active');
        currentIndex = index;
    }

    function nextSlide() {
        const newIndex = (currentIndex + 1) % slides.length;
        showSlide(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    // Navigation avec les boutons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Navigation avec les miniatures
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });

    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
            resetInterval();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
            resetInterval();
        }
    });

    // Défilement automatique
    function startInterval() {
        intervalId = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(intervalId);
        startInterval();
    }

    // Initialisation
    showSlide(0);
    startInterval();
});