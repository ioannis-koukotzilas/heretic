// Video

document.querySelectorAll(':is(.featured-video) button').forEach((button) =>
  button.addEventListener('click', () => {
    const video = button.previousElementSibling;
    video.src = video.dataset.src;
    const cover = document.querySelector(':is(.featured-video) img');
    cover.remove();
  })
);

// Init swiper
const filmsSlider = new Swiper('.related-films .swiper', {
  watchSlidesVisibility: true,
  preloadImages: false,
  lazy: false,
  slidesPerView: 4,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  freeMode: {
    enabled: true,
  },
//   breakpoints: {
//     720: {
//       slidesPerView: 6,
//       spaceBetween: 20,
//     },
//   },
});
