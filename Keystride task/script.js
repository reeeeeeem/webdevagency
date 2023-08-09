document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.container');
  
    function loadPage(pageName) {
      fetch(`${pageName}.html`)
      .then(response => response.text())
        .then(html => {
          content.innerHTML = html;
        })
        .catch(error => {
          content.innerHTML = `<p>Error loading ${pageName} page.</p>`;
        });
    }
  
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const pageName = this.getAttribute('href').substring(1); // Remove '#'
        loadPage(pageName);
      });
    });
  
    loadPage('projects');
  });
  