// PRELOADER
window.addEventListener("load", function () {
    setTimeout(() => {
        document.querySelector(".preloader").classList.add("hidden");
    }, 2000);
});

// Плавная прокрутка к секции

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Отмена стандартного поведения ссылки

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
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

document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const floatingImage = document.querySelector(".floating-image");

    floatingImage.style.transform = `translate(-50%, ${scrollY * 0.3}px)`;
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

// REVIEWS SLIDER
const swiper = new Swiper('.reviews__slider', {
    navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
    },
    pagination: {
        el: '.swiper-pagination', // Контейнер для точек
        clickable: true, // Позволяет кликать по точкам для навигации
    },
    loop: true,
    spaceBetween: 20,
});

// SCROLL-UP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (!scrollUp) return; // Защита от ошибок

    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);
