document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const themeToggle = document.getElementById("theme-toggle");
  const scrollTopBtn = document.getElementById("scroll-top");
  

  // Load theme from local storage
  if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light-mode");
      themeToggle.textContent = "☀️";
  }

  // Smooth Scrolling
  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });

          // Close mobile menu after clicking
          if (navLinks.classList.contains("active")) {
              navLinks.classList.remove("active");
          }
      });
  });

  // Toggle Mobile Menu
  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  });

  // Theme Toggle
  themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("light-mode");

      if (document.body.classList.contains("light-mode")) {
          localStorage.setItem("theme", "light");
          themeToggle.textContent = "☀️";
      } else {
          localStorage.setItem("theme", "dark");
          themeToggle.textContent = "🌙";
      }
  });

  // Scroll to Top Button
  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          scrollTopBtn.style.display = "block";
      } else {
          scrollTopBtn.style.display = "none";
      }
  });

  scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY < window.innerHeight) {
            navbar.classList.add("transparent");
        } else {
            navbar.classList.remove("transparent");
        }
    });
});
window.scrollcontact = function () {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error("Element with ID 'contact' not found.");
    }
};
