// Theme toggle
const toggle = document.getElementById("themeToggle");
const modeLabel = document.getElementById("modeLabel");

function updateThemeUI() {
  const isDark = document.body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  modeLabel.textContent = isDark ? "Dark mode" : "Light mode";
}

if (toggle) {
  updateThemeUI();
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateThemeUI();
  });
}

// Copy email
function copyEmail() {
  navigator.clipboard.writeText("alhumaidinamdar@gmail.com");
  const msg = document.getElementById("copyMsg");
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 2000);
}

