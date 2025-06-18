// Main functionality
document.addEventListener('DOMContentLoaded', function () {
  // Populate skills
  const skillsContainer = document.querySelector('.grid-cols-2.md\\:grid-cols-3.lg\\:grid-cols-6');
  skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all';
    skillElement.innerHTML = `
      <i class="${skill.icon} text-3xl text-primary-600 dark:text-primary-400 mb-2"></i>
      <span class="text-sm font-medium">${skill.name}</span>
    `;
    skillsContainer.appendChild(skillElement);
  });

  // Populate experience
  const experienceContainer = document.querySelector('#experience .space-y-12');
  experiences.forEach((exp, index) => {
    const expElement = document.createElement('div');
    expElement.className = `flex flex-col md:flex-row gap-8 animate-fade-in delay-${(index + 1) * 100}`;
    expElement.innerHTML = `
      <div class="md:w-1/3">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">${exp.title}</h3>
        <p class="text-primary-600 dark:text-primary-400 font-medium"><a class="hover:text-gray-500" href=${exp.url} target="_blank" rel="noopener noreferrer">${exp.company}</a></p>
        <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">${exp.period}</p>
      </div>
      <div class="md:w-2/3">
        <p class="text-gray-600 dark:text-gray-300 mb-4">${exp.description}</p>
        <div class="flex flex-wrap gap-2">
          ${exp.skills.map(skill => `<span class="skill-pill px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm transition-colors">${skill}</span>`).join('')}
        </div>
      </div>
    `;
    experienceContainer.appendChild(expElement);
  });

  // Populate projects
  const projectsContainer = document.querySelector('#projects .grid');
  projects.forEach((project, index) => {
    const projectElement = document.createElement('div');
    projectElement.className = `project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in delay-${(index + 1) * 100}`;
    projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${project.title}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.technologies.map(tech => `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">${tech}</span>`).join('')}
        </div>
        <a href="${project.link}" class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium transition-colors" target="_blank" rel="noopener noreferrer">
          View Project <i class="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    `;
    projectsContainer.appendChild(projectElement);
  });

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });

  // Form submission
  const contactForm = document.getElementById('contact-form');
  const submitButton = document.getElementById('submit-button');
  const buttonText = document.getElementById('button-text');
  const loadingSpinner = document.getElementById('loading-spinner');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Show loading state
      submitButton.disabled = true;
      buttonText.textContent = 'Sending...';
      loadingSpinner.classList.remove('hidden');
      formStatus.classList.add('hidden');

      try {
        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
        };

        // Initialize EmailJS with public key from environment
        emailjs.init("jHNgutk0_Z9moTyyG");

        await emailjs.send(
          "portfolio_email_service",
          "portfolio_website_emails",
          formData
        );

        // Show success message
        formStatus.textContent = 'Message sent successfully!';
        formStatus.className = 'p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800';
        formStatus.classList.remove('hidden');

        // Reset form
        contactForm.reset();
      } catch (error) {
        // Show error message
        formStatus.textContent = `Failed to send message. Please try again. Error: ${error}`;
        formStatus.className = 'p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800';
        formStatus.classList.remove('hidden');
        console.error('Error:', error);
      } finally {
        // Reset button state
        submitButton.disabled = false;
        buttonText.textContent = 'Send Message';
        loadingSpinner.classList.add('hidden');
      }
    });
  }

  // Check for saved theme preference
  if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}); 