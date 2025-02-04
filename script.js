// Плавний скрол для навігації
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});


// Анімації при скролі
const observerOptions = {
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    } else {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(20px)';
    }
  });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach((element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'all 0.6s ease-out';
  observer.observe(element);
});


// Зміна фону навігації при скролі
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.навігація');
  if (window.scrollY > 50) {
    nav.style.background = 'rgb(0, 0, 0)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0.98)';
  }
});


// Плавне появлення та зникнення для елементів з класом 'услуги'
const servicesObserverOptions = {
  threshold: 0.3,
};

const servicesObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    } else {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(20px)';
    }
  });
}, servicesObserverOptions);

document.querySelectorAll('.послуга, .контейнер').forEach((element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'all 0.6s ease-out';
  servicesObserver.observe(element);
});


// Перемещение к началу страницы при нажатии на якорь с id "головне"
document
  .querySelector('a[href="#головне"]')
  .addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: -1,
      behavior: 'smooth',
    });
  });


// Вибір елементів
const logo = document.getElementById('logoToggle'); // Лого
const navLinks = document.getElementById('navLinks'); // Посилання

// Функція для додавання/видалення класу 'active'
logo.addEventListener('click', () => {
  // Перевіряємо, чи має меню клас 'active'
  if (navLinks.classList.contains('active')) {
    // Якщо так, закриваємо його
    navLinks.classList.remove('active');
  } else {
    // Якщо ні, відкриваємо його
    navLinks.classList.add('active');
  }
});
