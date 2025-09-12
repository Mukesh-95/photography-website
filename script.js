const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Counter animation on scroll
const counters = document.querySelectorAll(".counters span");
let started = false; // to run only once

function animateCounters() {
  if (!started && window.scrollY + window.innerHeight > document.querySelector(".counter").offsetTop) {
    counters.forEach(counter => {
      let target = +counter.getAttribute("data-count"); // target value
      let count = 0;
      let speed = target / 100; // control speed
      
      let update = setInterval(() => {
        if (count < target) {
          count += Math.ceil(speed);
          counter.textContent = count;
        } else {
          counter.textContent = target; // final number
          clearInterval(update);
        }
      }, 20);
    });
    started = true;
  }
}

window.addEventListener("scroll", animateCounters);

