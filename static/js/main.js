const headerBurgerButton = document.getElementById("header-burger-btn");
const headerNavbar = document.getElementById("header-navbar");

headerBurgerButton.addEventListener("click", () => {
  if (headerNavbar.classList.contains("-right-full")) {
    headerNavbar.classList.replace("-right-full", "right-0");
  } else {
    headerNavbar.classList.replace("right-0", "-right-full");
  }
});
