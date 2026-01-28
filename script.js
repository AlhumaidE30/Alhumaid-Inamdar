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


// Copy site link (Share button)
function copySiteLink() {
  const url = window.location.origin;
  navigator.clipboard.writeText(url);

  const msg = document.getElementById("copyMsg");
  msg.textContent = "Link copied";
  msg.classList.add("show");

  setTimeout(() => {
    msg.classList.remove("show");
    msg.textContent = "Email address copied"; // reset for email
  }, 2000);
}

// ===== ACTIVE NAV LINK HANDLER (HOME STAYS ACTIVE FOR CONTACTS) =====
(function setActiveNav() {
  const links = document.querySelectorAll(".nav-links a");
  const path = window.location.pathname;
  const isHome =
    path.endsWith("/") || path.endsWith("index.html");

  links.forEach(link => {
    const href = link.getAttribute("href");

    // Clear any existing active state
    link.classList.remove("active");

    // Home page (even when #contacts is used)
    if (isHome && href === "index.html") {
      link.classList.add("active");
    }

    // Projects page
    if (path.endsWith("projects.html") && href === "projects.html") {
      link.classList.add("active");
    }

    // About page
    if (path.endsWith("about.html") && href === "about.html") {
      link.classList.add("active");
    }
  });
})();


