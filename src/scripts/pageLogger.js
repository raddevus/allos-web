// src/scripts/pagelogger.js

function logPageView() {
  console.log("Navigated to:", window.location.pathname);
    const metadata = {
    path: window.location.pathname,
    fullURL: window.location.href,
    referrer: document.referrer || "No referrer",
    userAgent: navigator.userAgent,
  };

  console.log("🔍 Page Metadata:", metadata);
}

// Initial load
logPageView();

// Listen for Astro navigation events
document.addEventListener('astro:after-swap', logPageView);

