document.addEventListener('DOMContentLoaded', function () {
  const galleryContainer = document.querySelector('.gallery');

  if (galleryContainer) {
    for (let i = 1; i <= 50; i++) {
      // Генеруємо HTML для 50 зображень
      let photoHTML = `
        <a href="public/work${i}.jpg" data-fancybox="gallery">
            <img src="public/work${i}-thumb.jpg" alt=" foto${i}" loading="lazy">
        </a>
      `;
      galleryContainer.innerHTML += photoHTML;
    }

    // Ініціалізуємо Fancybox (без дублювання)
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: { autoStart: true }, // Відображення мініатюр
      Toolbar: { display: ['zoom', 'close'] }, // Кнопки в тулбарі
      loop: true, // Циклічний перегляд фото
    });
  }
});

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  form.reset();
});
