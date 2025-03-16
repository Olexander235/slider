document.addEventListener("DOMContentLoaded", () => {
   const slider = document.querySelector(".slider__input");
   const image = document.querySelector(".slider__image");

   // Функція, яка змінює розмір зображення
   const resizeImage = (event) => {
       const size = event.target.value;
       image.style.transform = `scale(${size / 150})`; // Пропорційне масштабування
   };

   // Використовуємо debounce, щоб обмежити частоту виклику функції
   const debouncedResize = _.debounce(resizeImage, 100); // 100 мс затримка

   // Додаємо обробник події
   slider.addEventListener("input", debouncedResize);
});
