// ===== THEME PERSISTENCE (FINAL FIX) =====
const toggle = document.getElementById("themeToggle");
const modeLabel = document.getElementById("modeLabel");

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// Update toggle UI
function updateThemeUI() {
  const isDark = document.body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  modeLabel.textContent = isDark ? "Dark mode" : "Light mode";
}

// Initialize UI
if (toggle) {
  updateThemeUI();

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Save preference
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateThemeUI();
  });
}

// ===== COPY EMAIL =====
function copyEmail() {
  navigator.clipboard.writeText("alhumaidinamdar@gmail.com");
  const msg = document.getElementById("copyMsg");
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 2000);
}
