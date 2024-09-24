function filterGallery() {
    const filterValue = document.getElementById('filter').value;
    const galleryItems = document.querySelectorAll('.gallery-item');

    for (const item of galleryItems)  { /*loop to get each item checked */
        const category = item.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    };
}

function sortGallery() {
    const sortValue = document.getElementById('sort').value;
    const gallery = document.getElementById('gallery');
    const galleryItems = Array.from(gallery.querySelectorAll('.gallery-item'));

    const sortedItems = galleryItems.sort((a, b) => {
        if (sortValue === 'name') {
            return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
        } else if (sortValue === 'date') {
            return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
        }
    });

    sortedItems.forEach(item => gallery.appendChild(item));
}
