# Resume Landing Page + Cloudflare Worker

Hi there! This is my personal resume landing page built with HTML, CSS, and JavaScript — now enhanced with a custom Cloudflare Worker that serves fun facts about me!

## 🌐 What It Is

This project started as a clean, simple resume site hosted on Cloudflare Pages. I later connected it to a Cloudflare Worker that returns random personal facts when you click the "Get a Fun Fact" button. It’s a small but meaningful way to bring personality and interactivity into a traditionally static resume.

## ⚙️ Technologies Used

- HTML / CSS / JavaScript
- Cloudflare Pages (for hosting the static site)
- Cloudflare Workers (for serverless backend)
- GitHub (for version control and automatic deployments)

## 💡 Features

- Responsive, mobile-friendly design
- Smooth scrolling and toggleable mobile navigation
- Random personal fact generator using a serverless API
- Fully deployed and publicly accessible via Pages and Workers

## 🔗 Live Demo Links

- **Resume Site (Pages):** [https://resume-landing-page.pages.dev](https://resume-landing-page.pages.dev)
- **Worker Endpoint:** [https://resume-worker.alessandra-pastor.workers.dev/fact](https://resume-worker.alessandra-pastor.workers.dev/fact)

## 🚀 How to Run Locally

1. Clone the repo  
2. Open `index.html` in your browser  
3. Click the “Get a Fun Fact” button — you’ll see one of many random facts about me returned from the Worker!

## 🤖 Worker Code

The Worker uses a basic `fetch()` handler to return a random JSON fact from a small array. It’s stored in `/worker/index.js` in this repo and deployed through the Cloudflare dashboard. I added CORS headers so it plays nicely with my Pages front-end.

---

Thanks for checking it out!  
– Alessandra
