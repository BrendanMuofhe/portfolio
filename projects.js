document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    const projectSections = document.querySelectorAll('.projects');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            const target = category.getAttribute('data-category');
            projectSections.forEach(section => {
                if (section.id === target) {
                    section.classList.remove('hidden');
                    window.scrollTo({
                        top: section.offsetTop,
                        behavior: 'smooth'
                    });
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });
});
