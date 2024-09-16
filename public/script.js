window.onload = function () {
  // Get the loader and content elements
  const loaderHolder = document.querySelector('.loader_holder');
  const loader = document.querySelector('.loader');
  const content = document.getElementById('content');

  // Initially hide the content (opacity 0)
  content.style.opacity = 0;
  content.style.display = 'none'; // Ensure the content is initially hidden

  // Wait for the page to load completely, then add a slight delay
  setTimeout(function () {
    // Calculate the scale factor to cover the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const nutSize = 48; // Width and height of the nut in pixels
    const scaleFactor = Math.max(viewportWidth, viewportHeight) / (nutSize / 4);

    // Apply the zoom-in scale dynamically
    loader.style.transform = `scale(${scaleFactor})`;
    loader.classList.add('zoom-in');

    // After the zoom-in animation completes, hide the loader and fade in the content
    setTimeout(function () {
      loaderHolder.style.display = 'none'; // Hide the loader
      content.style.display = 'block'; // Show the content

      // Apply fade-in effect using opacity transition
      let opacity = 0; // Start opacity
      const fadeInInterval = setInterval(function () {
        opacity += 0.07; // Increase opacity gradually (change this value for speed)
        content.style.opacity = opacity;

        if (opacity >= 1) {
          clearInterval(fadeInInterval); // Stop the fade-in when opacity reaches 1


          // carousel code 

          // Initialize thumbnail (top selector) slider
          var thumbSlider = new Swiper('.thumb-slider', {
            slidesPerView: 'auto',
            spaceBetween: 5,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            centerInsufficientSlides: true,
          });

          // Initialize main slider
          var mainSlider = new Swiper('.main-slider', {
            loop: true,
            autoplay: {
              delay: 3000,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            thumbs: {
              swiper: thumbSlider,
            }
          });


          // hero carousel

          const mySwiper = new Swiper('.my-swiper-container', {
            loop: true, // Infinite loop
            autoplay: {
              delay: 5000, // Autoplay delay of 2 seconds
            }
          });

          AOS.init({});
        }
      }, 30); // Adjust this value for smoother transition (lower values make it smoother)

    }, 1000); // Matches the 1.5s zoom-in transition
  }, 1500); // Wait for a few seconds (e.g., 3 bounces) before starting the zoom-in
};