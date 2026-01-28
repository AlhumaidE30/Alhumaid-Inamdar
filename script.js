// ===== THEME PERSISTENCE (FINAL, CORRECT) =====
const toggle = document.getElementById("themeToggle");
const modeLabel = document.getElementById("modeLabel");
const root = document.documentElement; // <html>

// Apply saved theme already handled by head script

function updateThemeUI() {
  const isDark = root.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  modeLabel.textContent = isDark ? "Dark mode" : "Light mode";
}

if (toggle) {
  updateThemeUI();

  toggle.addEventListener("click", () => {
    root.classList.toggle("dark");

    const isDark = root.classList.contains("dark");
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

