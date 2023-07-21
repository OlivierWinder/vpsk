// Get the current page URL
var currentPageUrl = window.location.href;

// Check if the current page URL contains "over.html"
if (currentPageUrl.includes("over.html")) {
  // Find the navigation menu item and change its color to red
  var menuItem = document.querySelector(".header__nav__list__item--over");
  var mobileMenuItem = document.querySelector(".nav-modal__list__item__link--over");
  menuItem.style.color = "#55C1BF";
  mobileMenuItem.style.color = "#55C1BF";
  mobileMenuItem.style.color = "#55C1BF";
}
if (currentPageUrl.includes("contact.html")) {
  // Find the navigation menu item and change its color to red
  var menuItem = document.querySelector(".header__nav__list__item--contact");
  var mobileMenuItem = document.querySelector(".nav-modal__list__item__link--contact");
  menuItem.style.color = "#55C1BF";
  mobileMenuItem.style.color = "#55C1BF";
}
if (currentPageUrl.includes("vertrouwenspersoon.html")) {
  // Find the navigation menu item and change its color to red
  var menuItem = document.querySelector(".header__nav__list__item--vertrouwenspersoon");
  var mobileMenuItem = document.querySelector(".nav-modal__list-item__link--vertrouwenspersoon");
  menuItem.style.color = "#55C1BF";
  mobileMenuItem.style.color = "#55C1BF";
}
if (currentPageUrl.includes("feed.html")) {
  // Find the navigation menu item and change its color to red
  var menuItem = document.querySelector(".header__nav__list__item--feed");
  var mobileMenuItem = document.querySelector(".nav-modal__list__item__link--feed");
  menuItem.style.color = "#55C1BF";
  mobileMenuItem.style.color = "#55C1BF";
}
if (currentPageUrl.includes("/feed/")) {
  // Find the navigation menu item and change its color to #55C1BF
  var menuItem = document.querySelector(".header__nav__list__item--feed");
  var mobileMenuItem = document.querySelector(".nav-modal__list__item__link--feed");
  menuItem.style.color = "#55C1BF";
  mobileMenuItem.style.color = "#55C1BF";
}

