// Основные функции для географического сайта

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌍 Geography site loaded');
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Инициализация карты (если будет)
    initGeoFeatures();
});

function initGeoFeatures() {
    // Можно добавить интерактивные элементы позже
    console.log('Geographical features initialized');
}

// Функция для поиска
function searchCountries() {
    const searchTerm = document.getElementById('search-input').value;
    alert(`Поиск: ${searchTerm}`);
}

// Таймер обновления
setInterval(() => {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = new Date().toLocaleTimeString('ru-RU');
    }
}, 1000);
