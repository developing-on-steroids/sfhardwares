window.onload = function () {
  const loaderHolder = document.querySelector('.loader_holder');
  const loader = document.querySelector('.loader');
  const content = document.getElementById('content');

  content.style.opacity = 0;
  content.style.display = 'none';

  setTimeout(function () {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const nutSize = 48;
    const scaleFactor = Math.max(viewportWidth, viewportHeight) / (nutSize / 4);

    // Apply the zoom-in scale dynamically
    loader.style.transform = `scale(${scaleFactor})`;
    loader.classList.add('zoom-in');

    // After the zoom-in animation completes, hide the loader and fade in the content
    setTimeout(function () {
      loaderHolder.style.display = 'none';
      content.style.display = 'block';

      let opacity = 0;
      const fadeInInterval = setInterval(function () {
        opacity += 0.07; // Increase opacity of the nut gradually (change this value for speed)
        content.style.opacity = opacity;

        if (opacity >= 1) {
          clearInterval(fadeInInterval);


          // carousel code 

          // Industries thumbnail (top selector) slider
          var thumbSlider = new Swiper('.thumb-slider', {
            slidesPerView: 'auto',
            spaceBetween: 5,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            centerInsufficientSlides: true,
          });

          // Industries main slider
          var mainSlider = new Swiper('.main-slider', {
            loop: true,
            autoplay: {
              delay: 4000,
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
            loop: true,
            autoplay: {
              delay: 5000,
            }
          });

          AOS.init({});
        }
      }, 30); // Adjust this value for smoother transition of nut to content (lower values will make it smoother)

    }, 1000);
  }, 1500);
};

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.hero-content h1 span').classList.add('animate');
  }, 4500); //
});

function openModal(el) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const imgSrc = el.querySelector("img").src;

  modal.style.display = "flex";
  modalImg.src = imgSrc;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const isExpanded = btn.getAttribute("aria-expanded") === "true";

    // Close all
    document.querySelectorAll(".faq-question").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      b.nextElementSibling.classList.remove("open");
    });

    // Open clicked if not already expanded
    if (!isExpanded) {
      btn.setAttribute("aria-expanded", "true");
      btn.nextElementSibling.classList.add("open");
    }
  });
});
