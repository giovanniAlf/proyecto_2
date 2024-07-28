document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product img[data-image-type="fallback"]');

    products.forEach(product => {
        const originalSrc = product.src;
        const fallbackSrc = product.getAttribute('data-fallback');

        product.addEventListener('mouseover', () => {
            product.src = fallbackSrc;
        });

        product.addEventListener('mouseout', () => {
            product.src = originalSrc;
        });
    });
});
