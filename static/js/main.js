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

// navigate to section dynamicly
const headerLinks = document.querySelectorAll(".header-link");

headerLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // close headerNavbar in mobile size
    if (headerNavbar.classList.contains("right-0")) {
      headerBurgerButton.click();
    }

    // scroll dynamicly in current section
    const href = e.currentTarget.getAttribute("href");
    const activeSection = document.getElementById(href);
    const header = document.getElementById("main-header");
    const headerHeight = header.getBoundingClientRect().height;

    if (activeSection) {
      e.preventDefault();

      if (window.innerHeight <= 768) {
        window.scrollTo({
          top: activeSection.offsetTop - headerHeight - 15,
        });
      } else {
        window.scrollTo({
          top: activeSection.offsetTop - 15,
        });
      }
    }
  });
});
