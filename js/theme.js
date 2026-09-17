const themeSelect = document.querySelector("#theme-select");
const supportedThemes = new Set(["system", "dark", "light"]);

if (themeSelect) {
  let selectedTheme = "system";

  try {
    const savedTheme = localStorage.getItem("color-theme");
    if (savedTheme && supportedThemes.has(savedTheme)) {
      selectedTheme = savedTheme;
    }
  } catch (error) {
    console.warn("Unable to read the saved color theme.", error);
  }

  const applyTheme = (theme) => {
    if (theme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.dataset.theme = theme;
    }
  };

  themeSelect.value = selectedTheme;
  applyTheme(selectedTheme);

  themeSelect.addEventListener("change", () => {
    const theme = supportedThemes.has(themeSelect.value) ? themeSelect.value : "system";
    applyTheme(theme);

    try {
      localStorage.setItem("color-theme", theme);
    } catch (error) {
      console.warn("Unable to save the color theme.", error);
    }
  });
}
