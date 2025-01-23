const headerBurgerButton = document.getElementById("header-burger-btn");
const headerNavbar = document.getElementById("header-navbar");

headerBurgerButton.addEventListener("click", () => {
  if (headerNavbar.classList.contains("-right-full")) {
    headerNavbar.classList.replace("-right-full", "right-0");
    headerBurgerButton.classList.add("active");
  } else {
    headerNavbar.classList.replace("right-0", "-right-full");
    headerBurgerButton.classList.remove("active");
  }
});

// run slider for header section
const headerSlider = new Swiper("#header-slider-wrapper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1200,
});

// run slider for work samples section
const workSampleSlider = new Swiper("#work-sample-slider-wrapper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 20,
  speed: 1200,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// run slider for weblog section
const weblogSlider = new Swiper("#weblog-slider-wrapper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 20,
  speed: 1200,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
