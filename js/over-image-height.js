
function setHeight(){
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; // check screenwidth

    if (screenWidth < 950) {
      return; // Exit the function if the condition is not met
    }

    let height = document.querySelector('.opleidingen__text').clientHeight;
    const imageContainer = document.querySelector('.opleidingen__image');
    const image = document.querySelector('.opleidingen__image__img')
    imageContainer.style.height = `${height}px`;
    image.style.height = `${height}px`;
}

window.addEventListener('DOMContentLoaded', function() {
  // Function to execute when the page loads
  setHeight();
});

window.addEventListener('resize', function() {
  // Function to execute when the window is resized
  setHeight();
});



