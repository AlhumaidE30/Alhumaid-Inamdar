document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const label = document.getElementById("modeLabel");

  if (!toggle || !label) return;

  function updateUI() {
    const isDark = document.body.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";
    label.textContent = isDark ? "Dark mode" : "Light mode";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateUI();
  });

  updateUI();
});
