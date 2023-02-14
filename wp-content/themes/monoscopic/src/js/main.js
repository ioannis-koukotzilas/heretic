/*
Intersection Observer
*/

(function () {
  const observerElements = document.querySelectorAll('.observe');

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  };

  const options = {
    threshold: 0,
  };

  const observer = new IntersectionObserver(callback, options);

  observerElements.forEach((observerElement) => {
    observer.observe(observerElement);
  });
})();

/*
Scroll Header
*/

(function () {
  const doc = document.documentElement;
  const w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;

  const header = document.querySelector('.site-header');

  const checkScroll = function () {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  const toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 275) {
      //replace 275 with the height of your header in px

      header.classList.add('hide');
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);
})();

/*
Espa Banner
*/

(function () {
  const espaModal = document.querySelector('.espa-modal');
  const espaModalToggle = document.querySelector('.espa-modal-toggle');

  if (localStorage.getItem('hereticEspaModal')) {
    espaModal.classList.remove('active');
  } else {
    espaModal.classList.add('active');
  }

  espaModalToggle.addEventListener('click', function (e) {
    e.preventDefault();
    espaModal.classList.add('active');
  });

  const espaModalClose = document.querySelector('.espa-modal-close');

  espaModalClose.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.setItem('hereticEspaModal', true);
    espaModal.classList.remove('active');
  });
})();

/*
Featured Video
*/

(function () {
  document.querySelectorAll(':is(.featured-video) button').forEach((button) =>
    button.addEventListener('click', () => {
      const video = button.previousElementSibling;
      video.src = video.dataset.src;
      const cover = document.querySelector(':is(.featured-video) img');
      cover.remove();
    })
  );
})();

/*
Swiper
*/

(function () {
  const spotlightSwiper = new Swiper('.spotlight .swiper', {
    watchSlidesVisibility: true,
    preloadImages: false,
    lazy: false,
    navigation: {
      nextEl: '.spotlight .swiper-button-next',
      prevEl: '.spotlight .swiper-button-prev',
    },
    autoplay: {
      delay: 7000,
    },
  });
})();

(function () {
  const postersSwiper = new Swiper('.popular-now .swiper', {
    watchSlidesVisibility: true,
    preloadImages: false,
    lazy: false,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
      nextEl: '.popular-now .swiper-button-next',
      prevEl: '.popular-now .swiper-button-prev',
    },
    breakpoints: {
      540: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
})();

(function () {
  const filmsSwiper = new Swiper('.featured .swiper', {
    watchSlidesVisibility: true,
    preloadImages: false,
    lazy: false,
    spaceBetween: 24,
    navigation: {
      nextEl: '.featured .swiper-button-next',
      prevEl: '.featured .swiper-button-prev',
    },
    breakpoints: {
      960: {
        slidesPerView: 2,
      },
    },
  });
})();

/*
Truncate
*/

(function () {
  function truncate(element) {
    if (element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth) {
      const button = document.createElement('div');
      button.textContent = `View more`;
      button.classList.add('read-more');
      container.appendChild(button);

      button.addEventListener('click', () => {
        container.classList.toggle('truncate');

        if (container.classList.contains('truncate')) {
          button.textContent = `View more`;
        } else {
          button.textContent = `View less`;
        }
      });
    }
  }

  const container = document.querySelector('.festivals .container');

  if (container) {
    container.classList.add('truncate');
    const elementToCheck = document.querySelector('.festivals .content');
    truncate(elementToCheck);
  }
})();

/*
Lightbox
*/

(function () {
  const gallery = document.querySelector('.gallery');

  if (gallery) {
    fsLightbox.props.toolbarButtons.thumbs = {
      width: '24px',
      height: '24px',
      viewBox: '0 0 48 48',
      d: 'M5 38q-1.25 0-2.125-.875T2 35V13q0-1.25.875-2.125T5 10h22q1.25 0 2.125.875T30 13v22q0 1.25-.875 2.125T27 38Zm31-16q-.85 0-1.425-.575Q34 20.85 34 20v-8q0-.85.575-1.425Q35.15 10 36 10h8q.85 0 1.425.575Q46 11.15 46 12v8q0 .85-.575 1.425Q44.85 22 44 22Zm1-3h6v-6h-6ZM5 35h22V13H5v22Zm3-5h16l-5.25-7L15 28l-2.75-3.65Zm28 8q-.85 0-1.425-.575Q34 36.85 34 36v-8q0-.85.575-1.425Q35.15 26 36 26h8q.85 0 1.425.575Q46 27.15 46 28v8q0 .85-.575 1.425Q44.85 38 44 38Zm1-3h6v-6h-6ZM5 35V13v22Zm32-16v-6 6Zm0 16v-6 6Z',
      title: 'Thumbnails',
    };

    fsLightbox.props.toolbarButtons.close = {
      width: '24px',
      height: '24px',
      viewBox: '0 0 48 48',
      d: 'm12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z',
      title: 'Close',
    };

    fsLightbox.props.toolbarButtons.fullscreen.enter = {
      width: '24px',
      height: '24px',
      viewBox: '0 0 48 48',
      d: 'M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z',
      title: 'Fullscreen',
    };

    fsLightbox.props.toolbarButtons.fullscreen.exit = {
      width: '24px',
      height: '24px',
      viewBox: '0 0 48 48',
      d: 'M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z',
      title: 'Fullscreen Exit',
    };

    fsLightbox.props.slideButtons.next = {
      width: '24px',
      height: '24px',
      viewBox: '0 0 48 48',
      d: 'm18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z',
      title: 'Navigate Next',
    };

    fsLightbox.props.slideButtons.previous = {
      width: '24px',
      height: '24px',
      viewBox: '0 0 48 48',
      d: 'M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z',
      title: 'Navigate Before',
    };

    fsLightbox.props.disableLocalStorage = true;
    fsLightbox.props.exitFullscreenOnClose = false;
    fsLightbox.props.loadOnlyCurrentSource = true;
  }
})();

/**
 * Mobile Nav
 */

(function () {
  const btnMobileNavToggle = document.getElementById('btn-mobile-nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const btnMobileNavClose = document.getElementById('btn-mobile-nav-close');

  btnMobileNavToggle.onclick = function () {
    btnMobileNavToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
  };

  btnMobileNavClose.onclick = function () {
    mobileNav.classList.remove('active');
  };

  document.addEventListener('click', function (event) {
    if (event.target.closest('#btn-mobile-nav-toggle') || event.target.closest('#mobile-nav')) return;
    btnMobileNavToggle.classList.remove('active');
    mobileNav.classList.remove('active');
  });
})();
