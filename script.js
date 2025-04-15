// Toggle mobile nav menu
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fetch a random fact from the Cloudflare Worker
const factBtn = document.getElementById('factBtn');
const factDisplay = document.getElementById('factDisplay');

// Replace with your actual deployed Worker URL
const WORKER_URL = "https://resume-worker.alessandra-pastor.workers.dev/fact";

factBtn.addEventListener("click", async () => {
  try {
    const res = await fetch(WORKER_URL);
    if (!res.ok) {
      factDisplay.textContent = "Oops! Something went wrong.";
      return;
    }
    const data = await res.json();
    factDisplay.textContent = data.fact;
  } catch (err) {
    factDisplay.textContent = "Network error. Please try again.";
  }
});
