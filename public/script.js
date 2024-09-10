window.onload = function() {
  // Get the loader and content elements
  const loader = document.querySelector('.loader');
  const content = document.getElementById('content');

  // Wait for the page to load completely, then add a slight delay
  setTimeout(function() {
    // Calculate the scale factor to cover the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const nutSize = 48; // Width and height of the nut in pixels
    const scaleFactor = Math.max(viewportWidth, viewportHeight) / (nutSize / 4);

    // Apply the zoom-in scale dynamically
    loader.style.transform = `scale(${scaleFactor})`;
    loader.classList.add('zoom-in');

    // After the zoom-in animation completes, hide the loader and show the content
    setTimeout(function() {
      loader.style.display = 'none';  // Hide the loader
      content.style.display = 'block';  // Show the content
    }, 1500); // Matches the 1.5s zoom-in transition
  }, 1500); // Wait for a few seconds (e.g., 3 bounces) before starting the zoom-in
};



// carousel code 

  // Initialize thumbnail (top selector) slider
  var thumbSlider = new Swiper('.thumb-slider', {
    slidesPerView: 'auto',
    slidesPerView: 8,
    spaceBetween: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  // Initialize main slider
  var mainSlider = new Swiper('.main-slider', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: thumbSlider, // Connect to the thumbnail slider
    }
  });