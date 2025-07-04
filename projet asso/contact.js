// Gestion de l'affichage des champs de don
document.getElementById('subject').addEventListener('change', function() {
            const donFields = document.getElementById('don-fields');
            if (this.value === 'don') {
                donFields.style.display = 'block';
            } else {
                donFields.style.display = 'none';
            }
        });