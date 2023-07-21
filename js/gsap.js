let header = document.querySelector('.header')
gsap.registerPlugin(ScrollTrigger);


// Check if the screen size is bigger than 949px
const mediaQuery = window.matchMedia('(min-width: 950px)');

// Function to handle the media query changes
function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {

      gsap.to(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top top', // Trigger animation as soon as the top of the header hits the top of the viewport
        end: '+=100', // Animation ends after scrolling 100px
        scrub: true, // Smoothly transition between the start and end values
      },
      backgroundColor: '#FDFDFD',
      color: '#1f1f1f',
    });
  }
  else{
    return;
  }
}

// Attach the listener to the media query
mediaQuery.addListener(handleMediaQuery);

// Call the handleMediaQuery function initially to check the media query status
handleMediaQuery(mediaQuery);
