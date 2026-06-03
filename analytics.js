// Vercel Web Analytics for TeluguHelp
// This script initializes Vercel Analytics for vanilla HTML sites
// Automatically tracks page views and web vitals

(function() {
  // Inject Vercel Analytics script
  const script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  
  // Append to head when DOM is ready
  if (document.head) {
    document.head.appendChild(script);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(script);
    });
  }
})();
