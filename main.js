// ======= Mobile Menu Toggle =======
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  toggle.setAttribute("aria-expanded", isOpen);
});

// Close menu on link click (mobile UX)
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    toggle.setAttribute("aria-expanded", false);
  })
);


// ======= Contact Form Handler =======
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});


// ======= Scroll Animations =======
const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));


// ======= Testimonials Carousel =======
const track = document.getElementById("testimonial-track");
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial() {
  index = (index + 1) % testimonials.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showTestimonial, 4000); // Rotate every 4 seconds
