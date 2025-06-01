// common.js

function loadHeaderAndFooter() {
  const headerHTML = `
      <header>
        <img src="./assets/img/logo.png"
        alt="DevsCrew Logo" class="logo" />
        <nav>
            <a href="index.html" id="nav-home">Home</a>
            <a href="about.html" id="nav-about">About</a>
            <a href="services.html" id="nav-services">Services</a>
            <a href="netsuite.html" id="nav-netsuite">NetSuite</a>
            <a href="contact.html" id="nav-contact">Contact</a>
        </nav>
      </header>
    `;

  const footerHTML = `
      <footer>
        <p>&copy; 2025 DevsCrew Inc. All rights reserved.</p>
      </footer>
    `;

  document.getElementById('header-container').innerHTML = headerHTML;
  document.getElementById('footer-container').innerHTML = footerHTML;

  // Highlight the active nav link
  const currentPage = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  //set favicon
  document.head.append('<link rel="icon" href="./assets/img/favicon.ico" type="image/x-icon">')
}