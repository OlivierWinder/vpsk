// Get the header element
const header = document.querySelector('header');
const headerNav = document.querySelector('.header__nav__list');
const headerLogo = document.querySelector('.header__logo__heading');
const headerModalButton = document.querySelector('.header__modal-button');

// Function to handle the scroll event
function handleScroll() {
  // Add a CSS class to the header when the client starts scrolling
  if (window.pageYOffset > 30) {
    header.classList.add('header--active');
    headerNav.classList.add('nav--active');
    headerLogo.classList.add('header__logo--active');
    headerModalButton.classList.add('header__modal-button--black');
  } else {
    header.classList.remove('header--active');
    headerNav.classList.remove('nav--active')
    headerLogo.classList.remove('header__logo--active');
    headerModalButton.classList.remove('header__modal-button--black');
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);