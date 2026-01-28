const toggle = document.getElementById("themeToggle");
const modeLabel = document.getElementById("modeLabel");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Update UI
function updateThemeUI() {
  const isDark = document.body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  modeLabel.textContent = isDark ? "Dark mode" : "Light mode";
}

updateThemeUI();

// Toggle theme
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
  updateThemeUI();
});

// Copy email
function copyEmail() {
  navigator.clipboard.writeText("alhumaidinamdar@gmail.com");
  const msg = document.getElementById("copyMsg");
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 2000);
}
