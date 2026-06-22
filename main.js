// Animation loading vòng tròn
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card');
    

    });

    // Cải thiện cho mobile - Remove hover effect trên touch device
    const isTouchDevice = () => {
        return (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                (navigator.msMaxTouchPoints > 0));
    };

    if (isTouchDevice()) {
        document.body.classList.add('touch-device');
        
        // Tối ưu cho mobile
        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('touchstart', function(e) {
                this.classList.add('pressed');
            }, {passive: true});
            card.addEventListener('touchend', function(e) {
                this.classList.remove('pressed');
            });
            card.addEventListener('touchcancel', function() {
                this.classList.remove('pressed');
            });
        });
    }
;
