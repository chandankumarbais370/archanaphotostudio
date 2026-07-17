// Smooth scroll for menu links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 30) {
    nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
  } else {
    nav.style.boxShadow = "none";
  }
});
