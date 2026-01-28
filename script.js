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

// ===== ACTIVE NAV LINK HANDLER =====
(function setActiveNav() {
  const links = document.querySelectorAll(".nav-links a");
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;

  links.forEach(link => {
    const linkHref = link.getAttribute("href");

    // Match normal pages
    if (
      (linkHref === "index.html" && (currentPath.endsWith("/") || currentPath.endsWith("index.html")) && !currentHash) ||
      (linkHref === "projects.html" && currentPath.endsWith("projects.html")) ||
      (linkHref === "about.html" && currentPath.endsWith("about.html"))
    ) {
      link.classList.add("active");
    }

    // Match Contacts (index.html#contacts)
    if (linkHref.includes("#contacts") && currentHash === "#contacts") {
      link.classList.add("active");
    }
  });
})();
