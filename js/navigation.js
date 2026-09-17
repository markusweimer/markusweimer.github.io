const navigation = document.querySelector(".site-nav");
const menuButton = navigation?.querySelector(".menu-icon");
const menu = navigation?.querySelector(".trigger");
const mobileViewport = window.matchMedia("(max-width: 600px)");

if (navigation && menuButton && menu) {
  const setMenuState = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menu.hidden = mobileViewport.matches && !open;
  };

  navigation.classList.add("nav-enhanced");
  setMenuState(!mobileViewport.matches);

  menuButton.addEventListener("click", () => {
    setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
      menuButton.focus();
    }
  });

  mobileViewport.addEventListener("change", () => setMenuState(!mobileViewport.matches));
}
