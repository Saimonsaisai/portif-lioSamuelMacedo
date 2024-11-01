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

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");
        footer.classList.toggle("dark-mode");
        toggleButton.classList.toggle("dark-mode");

        const links = document.querySelectorAll("a");
        links.forEach(link => {
            link.classList.toggle("dark-mode");
        });
    });
});

