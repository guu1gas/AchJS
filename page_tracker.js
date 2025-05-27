// tracker.js

function sendProductVisitToServer(productName) {
  fetch('http://127.0.0.1:8000/trackPageView', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product: productName,
      timestamp: new Date().toISOString()
    })
  }).then(response => {
    if (!response.ok) {
      console.error('Failed to track visit:', response.statusText);
    }
  }).catch(error => {
    console.error('Network error:', error);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const productName = document.querySelector('h2')?.innerText?.trim();
  if (productName) {
    sendProductVisitToServer(productName);
  }
});

