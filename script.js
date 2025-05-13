document.addEventListener('DOMContentLoaded', () => {
    const sortButton = document.getElementById('sortPrice');
    const resetButton = document.getElementById('resetView');
    const motoItems = Array.from(document.querySelectorAll('.moto-item'));

    if (sortButton) {
        sortButton.addEventListener('click', () => {
            const sortedMotos = motoItems.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('p').textContent.replace('R$ ', '').replace('.', '').replace(',', '.'));
                const priceB = parseFloat(b.querySelector('p').textContent.replace('R$ ', '').replace('.', '').replace(',', '.'));
                return priceA - priceB;
            });

            const motoGrid = document.querySelector('.moto-grid');
            motoGrid.innerHTML = '';
            sortedMotos.forEach(moto => motoGrid.appendChild(moto));
        });
    }

    if (resetButton) {
        resetButton.addEventListener('click', () => {
            motoItems.forEach(moto => moto.style.display = 'block');
        });
    }

    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            motoItems.forEach(moto => {
                if (filter === 'all' || moto.dataset.brand === filter) {
                    moto.style.display = 'block';
                } else {
                    moto.style.display = 'none';
                }
            });
        });
    });
});
