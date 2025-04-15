# Research Summary

### 1. What is a Cloudflare Worker?  
A Cloudflare Worker is a small piece of JavaScript (or TypeScript) code that runs on Cloudflare's global edge network. It’s a serverless function that can handle HTTP requests without needing a traditional backend server.

---

### 2. How does a Worker handle HTTP requests and return responses?  
A Worker listens for a `fetch()` event. Inside that handler, it can read the incoming request, run logic, and return a custom `Response` object with any content (JSON, text, HTML, etc.).

---

### 3. What is Cloudflare D1? What are some pros and cons of using it?  
Cloudflare D1 is their new SQLite-based database that works at the edge. It's great for quick, simple apps that need persistent data. Pros: easy to use, no setup, low latency. Cons: limited advanced querying, still in early release stages.

---

### 4. How does client-side JavaScript call an external API?  
Client-side JS uses the `fetch()` function to send an HTTP request to an API URL. It can then process the returned data (usually JSON) and display it in the browser.

---

### 5. What is the benefit of deploying APIs to the edge instead of traditional servers?  
Edge deployment means the code runs close to the user — all around the world. It results in faster response times, better scalability, and no need to manage a centralized server.

