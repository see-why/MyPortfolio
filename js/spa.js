// SPA Navigation functionality
document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main.flex-grow');
  const privacyTemplate = document.getElementById('privacy-template');
  const termsTemplate = document.getElementById('terms-template');

  // Store original sections for easy restoration
  const originalSections = Array.from(main.children);

  // Create containers for privacy and terms content
  const privacyContainer = document.createElement('div');
  privacyContainer.id = 'privacy-container';
  privacyContainer.className = 'hidden';
  privacyContainer.appendChild(privacyTemplate.content.cloneNode(true));

  const termsContainer = document.createElement('div');
  termsContainer.id = 'terms-container';
  termsContainer.className = 'hidden';
  termsContainer.appendChild(termsTemplate.content.cloneNode(true));

  // Add containers to main
  main.appendChild(privacyContainer);
  main.appendChild(termsContainer);

  function showTemplate(containerId) {
    // Hide all original sections
    originalSections.forEach(section => section.classList.add('hidden'));
    // Hide other template containers
    document.getElementById('privacy-container').classList.add('hidden');
    document.getElementById('terms-container').classList.add('hidden');
    // Show the requested container
    document.getElementById(containerId).classList.remove('hidden');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function restoreHome() {
    // Show all original sections
    originalSections.forEach(section => section.classList.remove('hidden'));
    // Hide template containers
    document.getElementById('privacy-container').classList.add('hidden');
    document.getElementById('terms-container').classList.add('hidden');
    window.location.hash = '';
  }

  function handleHash() {
    if (window.location.hash === '#privacy') {
      showTemplate('privacy-container');
    } else if (window.location.hash === '#terms') {
      showTemplate('terms-container');
    } else {
      restoreHome();
    }
  }

  // Footer SPA links
  document.querySelectorAll('a.spa-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.hash = this.getAttribute('href');
    });
  });

  // Listen for hash changes
  window.addEventListener('hashchange', handleHash);

  // Initial load
  handleHash();

  // Delegate back-to-home buttons
  main.addEventListener('click', function (e) {
    if (e.target && (e.target.id === 'back-to-home-privacy' || e.target.id === 'back-to-home-terms')) {
      restoreHome();
    }
  });
}); 