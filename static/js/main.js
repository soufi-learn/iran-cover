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
    e.preventDefault();
    // close headerNavbar in mobile size
    if (headerNavbar.classList.contains("right-0")) {
      headerBurgerButton.click();
    }
  });
});
