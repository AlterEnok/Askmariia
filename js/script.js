// PRELOADER
window.addEventListener("load", function () {
    setTimeout(() => {
        document.querySelector(".preloader").classList.add("hidden");
    }, 2000);
});

// ARROW-SCROLLDOWN
document.addEventListener("DOMContentLoaded", function () {
    const scrollArrow = document.querySelector(".scroll-down");

    scrollArrow.addEventListener("click", function () {
        const nextSection = document.querySelector(".hero").nextElementSibling;

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// SCROLLBAR
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    function handleScroll() {
        if (window.scrollY > window.innerHeight * 0.1) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleScroll);
});

// Анимации для about
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");
    const aboutTitle = document.querySelector(".about__title");
    const aboutText = document.querySelector(".about__text");
    const aboutImages = document.querySelector(".about__images");
    const aboutServices = document.querySelector(".about__services");

    const secondSection = document.querySelector(".about");

    if (!secondSection) {
        console.error("Ошибка: не найдена вторая секция! Проверь класс в HTML.");
        return;
    }

    function isElementInViewport(el, threshold = 0.75) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight * threshold;
    }

    function handleScroll() {
        if (isElementInViewport(secondSection, 0.9)) {
            setTimeout(() => aboutTitle?.classList.add("visible"), 200);
            setTimeout(() => aboutText?.classList.add("visible"), 400);
            setTimeout(() => aboutImages?.classList.add("visible"), 600);
            setTimeout(() => aboutServices?.classList.add("visible"), 800);
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Проверка при загрузке
});

