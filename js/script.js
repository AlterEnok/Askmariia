// PRELOADER
window.addEventListener("load", function () {
    setTimeout(() => {
        document.querySelector(".preloader").classList.add("hidden");
    }, 2000);
});

// Плавная прокрутка к секции
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

// PRELOADER
window.addEventListener("load", function () {
    setTimeout(() => {
        const preloader = document.querySelector(".preloader");
        if (preloader) {
            preloader.classList.add("hidden");
        }
    }, 2000);
});

// Плавная прокрутка к секции
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

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

    if (scrollArrow) {
        scrollArrow.addEventListener("click", function () {
            const nextSection = document.querySelector(".hero")?.nextElementSibling;

            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerNav = document.querySelector('.burger-nav');
    const navLinks = document.querySelectorAll('.burger-nav a, .nav-menu a');
    const sections = document.querySelectorAll('section[id]');

    // Функция переключения бургер-меню
    if (burgerBtn && burgerNav) {
        burgerBtn.addEventListener('click', function () {
            const isOpen = burgerNav.classList.toggle('show');
            burgerBtn.classList.toggle('_active');

            document.body.style.overflow = isOpen ? "hidden" : "";
            document.documentElement.style.overflow = isOpen ? "hidden" : "";
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                const targetHref = this.getAttribute('href');


                if (targetHref.startsWith('http') || targetHref.startsWith('https')) {
                    burgerNav.classList.remove('show');
                    burgerBtn.classList.remove('_active');
                    document.body.style.overflow = "";
                    document.documentElement.style.overflow = "";
                    return;
                }


                e.preventDefault();
                const targetId = targetHref.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    burgerNav.classList.remove('show');
                    burgerBtn.classList.remove('_active');
                    document.body.style.overflow = "";
                    document.documentElement.style.overflow = "";

                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // Функция для подсветки активного пункта меню при скролле
    const scrollActive = () => {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - window.innerHeight / 2;
            const sectionId = current.getAttribute('id');

            const menuLinks = document.querySelectorAll(`.nav-menu a[href="#${sectionId}"], .burger-nav a[href="#${sectionId}"]`);

            menuLinks.forEach(link => {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    link.classList.add('active-link');
                } else {
                    link.classList.remove('active-link');
                }
            });
        });

        // Проверка последней секции (контакт)
        const lastSection = document.querySelector('section:last-of-type');
        const lastMenuLinks = document.querySelectorAll('.nav-menu a[href="#contact"], .burger-nav a[href="#contact"]');

        if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 10) {
            lastMenuLinks.forEach(link => link.classList.add('active-link'));
        } else {
            lastMenuLinks.forEach(link => link.classList.remove('active-link'));
        }
    };

    window.addEventListener('scroll', scrollActive);
});

// Анимации для about
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");
    const aboutTitle = document.querySelector(".about__title");
    const aboutText = document.querySelector(".about__text");
    const aboutImages = document.querySelector(".about__images");
    const aboutServices = document.querySelector(".about__services");

    if (!aboutSection) {
        console.error("Ошибка: не найдена секция about! Проверь класс в HTML.");
        return;
    }

    function isElementInViewport(el, threshold = 0.75) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight * threshold;
    }

    function handleScroll() {
        if (isElementInViewport(aboutSection, 0.9)) {
            setTimeout(() => aboutTitle?.classList.add("visible"), 200);
            setTimeout(() => aboutText?.classList.add("visible"), 400);
            setTimeout(() => aboutImages?.classList.add("visible"), 600);
            setTimeout(() => aboutServices?.classList.add("visible"), 800);
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

// LANGUAGE CHOOSE
const translations = {
    en: {
        nav_about: "ABOUT US",
        nav_services: "SERVICES",
        nav_reviews: "REVIEWS",
        nav_contact: "CONTACT",
        hero_title: "Beauty by Mariia",
        book_button: "BOOK",
        about_title: "About Mariia",
        about_year: "WORKING FROM 2024",
        about_desc: "Maria Y. Askander, RN, BSN Aesthetic Nurse Specialist | Expert in Non-Surgical Cosmetic Treatments.Maria Y.Askander is an aesthetic nurse specializing in non- surgical treatments like neurotoxins,fillers, Sculptra, Radiesse, and thread lifts.She combines artistry with precision to enhancenatural beauty.Originally from Ukraine, Maria holds a nursing degree and dental education.In the U.S., she became a Registered Nurse(RN), earned a BSN, and is now preparing for Nurse Practitioner(NP)school.With a patient- focused approach, she prioritizes safety and delivers expert care with acommitmentto excellence in aesthetics.",
        services_subtitle: "SELF-CARE TARIFF",
        service1: "Lip augmentation ",
        service2: "Cheek filler",
        service3: "Nasolabial fold correction",
        service4: "Jawline correction",
        service5: "Full face correction",
        service6: "Radiesse lifting",
        services_footer_title: "Look Beautiful",
        services_footer_subtitle: "Feel Beautiful",
        service1_title: "Contour plastic surgery and facial correction",
        service1_desc: " Enjoy a complete beauty experience with facial contouring, hydration, and lifting—all in one place.Save time and indulge in professional skincare.",
        service2_title: "Skin rejuvenation and moisturizing",
        service2_desc: "We use only certified, premium-quality products that are safe for your skin and provide long- lasting results.Your health is our top priority.",
        service3_title: "Lifting and skin firming",
        service3_desc: "Our specialists have years of expertise in cosmetology, master advanced rejuvenation techniques, and offer a personalized approach for every client.",
        services_title: "WHAT CAN WE HELP WITH?",
        services_bg1: "SKIN",
        services_bg2: "BEAUTY",
        services_bg3: "CARE",
        services_btn: "DIVE IN",
        reviews_title: "What say about Mariia",
        review1_text: "I really liked how you did it ❤️❤️ Thank you ❤️❤️",
        review2_text: "With such a cosmetologist, you can definitely shine like a star!!! 😅😃😃😃✨✨✨✨ Restored lips and Botox are out there bringing BEAUTY to the world!!! 💃💃💃💋💋💋 Thank you again, they are wonderful! ❤️❤️",
        review3_text: "Mariia, saying that I’m thrilled with my reflection is an understatement, I justlook stunning 😍 Thank you so much for my beauty! You truly have golden hands, thank you 🙏😘❤️ I am soooo happy!❤️",
        working_hours_subtitle: "Booking & Opening Hours",
        working_hours_title: "Book an appointment at your convenience <br> and let us take care of you.",
        monday: "Monday",
        monday_hours: "10:00 AM – 4:30 PM",
        wednesday: "Wednesday",
        wednesday_hours: "10:00 AM – 4:30 PM",
        wednesday_hours: "10:00 – 16:30 PM",
        thursday: "Thursday",
        thursday_hours: "10:00 AM – 4:30 PM",
        saturday: "Saturday",
        saturday_hours: "10:00 AM – 4:30 PM",
        sunday: "Sunday",
        sunday_hours: "10:00 AM – 4:30 PM",
        working_hours_note: "If you need an appointment outside these hours, please contact us—we will do our best to accommodate you.",
        footer_about: "About us",
        footer_services: "Services",
        footer_reviews: "Reviews",
        footer_contact: "Contacts",
        footer_title: " GET IN TOUCH",
        footer_text: " Choose a time convenient for you and make an appointment with your favorite nail technician",
        footer_button: "BOOK ONLINE",
    },
    ua: {
        nav_about: "ПРО НАС",
        nav_services: "ПОСЛУГИ",
        nav_reviews: "ВІДГУКИ",
        nav_contact: "КОНТАКТИ",
        hero_title: "Beauty by Mariia",
        book_button: "ЗАПИС",
        about_title: "Про Марію",
        about_year: "ПРАЦЮЄМО З 2024 РОКУ",
        about_desc: "Марія Аскандер, RN, BSN Естетична медсестра, спеціаліст з естетичної медсестри | Експерт з нехірургічних косметичних лікування.Марія Аскандер - естетична медсестра, що спеціалізується на нехірургічних методах лікування, таких якнейротоксини,філери, Sculptra, Radiesse та підтяжки нитками.Вона поєднує артистизм з точністю, щоб підкреслити природну красу.Марія родом з України, має диплом медсестри та стоматологічну освіту.У США вонастала дипломованою медсестрою(RN), отримала ступінь бакалавра медсестринства(BSN) і зараз готується до навчання на медсестру- практикантку(NP). до школи практикуючих медсестер(NP).Орієнтуючись на пацієнта, вона надає пріоритет безпеці та надає кваліфіковану допомогу зпрагненням до досконалості в естетиці.",
        services_title: "ЧИМ МИ МОЖЕМО ДОПОМОГТИ?",
        service1: "Збільшення губ",
        service2: "Філлер для щік",
        service3: "Корекція носогубних складок",
        service4: "Корекція лінії підборіддя",
        service5: " Повна корекція обличчя",
        service6: "Радіальний ліфтинг",
        services_footer_title: "Виглядай гарно",
        services_footer_subtitle: "Відчуйте себе прекрасною",
        service1_title: "Контурна пластика та корекція обличчя",
        service1_desc: " Насолоджуйтесь комплексними косметичними процедурами з контурною пластикою, зволоженням та ліфтингом - і все це в одному місці. Заощаджуйте час і насолоджуйтеся професійним доглядом за шкірою.",
        service2_title: "Омолодження та зволоження шкіри",
        service2_desc: "Ми використовуємо лише сертифіковані продукти преміум-класу, які безпечні для вашої шкіри та забезпечують довготривалий результат. Ваше здоров'я - наш головний пріоритет.",
        service3_title: "Ліфтинг і зміцнення шкіри",
        service3_desc: "Наші фахівці мають багаторічний досвід роботи в косметології, володіють передовими методиками омолодження і пропонують індивідуальний підхід до кожного клієнта.",
        services_btn: "ЗАНУРИТИСЬ",
        reviews_title: "Що кажуть про Марію",
        review1_text: "Мені дуже сподобалося, як ви це зробили ❤️❤️ Дякую ❤️❤️",
        review2_text: "З таким косметологом ви точно зможете сяяти як зірка!!! 😅😃😃😃✨✨✨✨Відновлені губи та ботокс несуть у світ КРАСУ!!! 💃💃💃💋💋💋 Ще раз дякую, вони чудові! ❤️❤️",
        review3_text: "Маріє, сказати, що я в захваті від свого відображення - це нічого не сказати, я простовиглядаю приголомшливо 😍 Величезне тобі спасибі за мою красу! У тебе дійсно золоті руки,дякую 🙏😘❤️ Я дуууже щаслива!",
        working_hours_subtitle: "Запис та години роботи",
        working_hours_title: "Запишіться на зручний для вас час  і дозвольте нам подбати про вас.",
        working_hours_note: "Якщо вам потрібна зустріч у неробочий час, будь ласка, зв'яжіться з нами - ми зробимо все можливе, щоб допомогти вам.",
        monday: "Понеділок",
        monday_hours: "10:00 – 16:30",
        wednesday: "Середа",
        wednesday_hours: "10:00 – 16:30",
        thursday: "Четвер",
        thursday_hours: "10:00 – 16:30",
        saturday: "Cубота",
        saturday_hours: "10:00 – 16:30",
        sunday: "Неділя",
        sunday_hours: "10:00 – 16:30",
        footer_about: "О нас",
        footer_services: "Послуги",
        footer_reviews: "Відгуки",
        footer_contact: "Контакти",
        footer_title: "ЗВ'ЯЗАТИСЬ",
        footer_text: " Обирайте зручний для вас час і записуйтеся на прийом до  майстра",
        footer_button: "Замовити онлайн",
    },
    ru: {
        nav_about: "О НАС",
        nav_services: "УСЛУГИ",
        nav_reviews: "ОТЗЫВЫ",
        nav_contact: "КОНТАКТЫ",
        hero_title: "Beauty by Mariia",
        book_button: "ЗАПИСЬ",
        about_title: "О Марии",
        about_year: "РАБОТАЕМ С 2024 ГОДА",
        about_desc: "Мария Аскандер, RN, BSN Эстетическая медсестра, специалист по эстетической медсестры | Эксперт по нехирургическим косметических лечения.Мария Аскандер - эстетическая медсестра, специализирующаяся на нехирургических методах лечения, таких как нейротоксины, филлеры, Sculptra, Radiesse и подтяжки нитями.Она сочетает артистизм с точностью, чтобы подчеркнуть естественную красоту. Мария родом из Украины, имеет диплом медсестры и стоматологическое образование. в США она стала дипломированной медсестрой (RN), получила степень бакалавра медсестринства (BSN) и сейчас готовится к обучению на медсестру- практикантку (NP). в школу практикующих медсестер (NP). ориентируясь на пациента, она предоставляет приоритет безопасности и оказывает квалифицированную помощь с стремлением к совершенству в эстетике.",
        service1_title: "Контурная пластика и коррекция лица",
        service1_desc: " Наслаждайтесь комплексными косметическими процедурами с контурной пластикой, увлажнением и лифтингом - и все это в одном месте. Экономьте время и наслаждайтесь профессиональным уходом за кожей.",
        service2_title: "Омоложение и увлажнение кожи",
        service2_desc: "Мы используем только сертифицированные продукты премиум-класса, которые безопасны для вашей кожи и обеспечивают долговременный результат. Ваше здоровье - наш главный приоритет.",
        service3_title: "Лифтинг и укрепление кожи",
        service3_desc: "Наши специалисты имеют многолетний опыт работы в косметологии, владеют передовыми методиками омоложения и предлагают индивидуальный подход к каждому клиенту.",
        service1: "Увеличение губ",
        service2: "Филлер для щек",
        service3: "Коррекция носогубных складок",
        service4: "Коррекция линии подбородка",
        service5: " Полная коррекция лица",
        service6: "Радиальный лифтинг",
        services_footer_title: "Выгляди красиво",
        services_footer_subtitle: "Почувствуйте себя прекрасной",
        services_title: "ЧЕМ  МОЖЕМ ПОМОЧЬ?",
        services_btn: "ПОГРУЗИТЬСЯ",
        reviews_title: "Что говорят про Марию",
        review1_text: "Мне очень понравилось, как вы сделали ❤️❤️ Спасибо ❤️❤️",
        review2_text: "С таким косметологом вы точно сможете сиять как звезда!!! 😅😅😃😃😃😃✨✨✨✨Відновленные губы и ботокс несут в мир КРАСОТУ!!! 💃💃💃💃💋💋💋💋💋 Еще раз спасибо, они замечательные! ❤️❤️",
        review3_text: "Мария, сказать, что я в восторге от своего отражения - это ничего не сказать, я просто выгляжу потрясающе 😍 Огромное тебе спасибо за мою красоту! У тебя действительно золотые руки,спасибо 🙏😘❤️ Я оооочень счастлива!",
        working_hours_subtitle: "Запись и часы работы",
        working_hours_title: "Запишитесь на удобное для вас время <br> и позвольте нам позаботиться о вас.",
        working_hours_note: "Если вам нужна встреча в нерабочее время, пожалуйста, свяжитесь с нами - мы сделаем все возможное, чтобы помочь вам.",
        monday: "Понедельник",
        monday_hours: "10:00 – 16:30",
        wednesday: "Среда",
        wednesday_hours: "10:00 – 16:30",
        thursday: "Четверг",
        thursday_hours: "10:00 – 16:30",
        saturday: "Cуббота",
        saturday_hours: "10:00 – 16:30",
        sunday: "Воскресенье",
        sunday_hours: "10:00 – 16:30",
        footer_about: "О нас",
        footer_services: "Услуги",
        footer_reviews: "Отзывы",
        footer_contact: "Контакты",
        footer_title: "Связаться",
        footer_text: " Выбирайте удобное для вас время и записывайтесь на прием к мастеру",
        footer_button: "Заказать онлайн",
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.querySelector(".lang-btn");
    const langMenu = document.querySelector(".lang-menu");
    const langOptions = document.querySelectorAll(".lang-menu li");
    const elementsToTranslate = document.querySelectorAll("[data-key]");

    function setLanguage(lang) {
        if (!translations[lang]) return;

        localStorage.setItem("selectedLang", lang);

        elementsToTranslate.forEach(el => {
            const key = el.dataset.key;
            if (translations[lang][key]) {
                if (el.tagName === "SPAN" || el.tagName === "P" || el.tagName === "H1" || el.tagName === "H2") {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        langBtn.textContent = lang.toUpperCase();
    }

    langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        langMenu.classList.toggle("show");
    });

    langOptions.forEach(option => {
        option.addEventListener("click", (e) => {
            e.stopPropagation();
            const selectedLang = option.dataset.lang;
            setLanguage(selectedLang);
            langMenu.classList.remove("show");
        });
    });

    document.addEventListener("click", (e) => {
        if (!langMenu.contains(e.target) && e.target !== langBtn) {
            langMenu.classList.remove("show");
        }
    });

    const savedLang = localStorage.getItem("selectedLang") || "en";
    setLanguage(savedLang);
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
    handleScroll();
});

// ANIMATIONS FOR SERVICES
const serviceCards = document.querySelectorAll('.services__card');

const revealServices = () => {
    const triggerBottom = window.innerHeight * 0.85;

    serviceCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 200);
        }
    });
};

window.addEventListener('scroll', revealServices);
revealServices();

// REVIEWS SLIDER
const swiper = new Swiper('.reviews__slider', {
    navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    spaceBetween: 20,
});

// SCROLL-UP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (!scrollUp) return;

    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);
