document.querySelectorAll('li[data-target]').forEach(item => {
    item.addEventListener('click', function() {
        const targetSection = document.querySelector(this.getAttribute('data-target'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const backToTopButton = document.getElementById('backToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.5
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
