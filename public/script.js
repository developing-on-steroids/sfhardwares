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

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".product-page-products");

  sections.forEach(section => {
    const heading = section.querySelector("h3");

    heading.addEventListener("click", () => {
      // Collapse all other sections
      sections.forEach(s => {
        if (s !== section) s.classList.remove("active");
      });

      // Toggle clicked section
      section.classList.toggle("active");
    });
  });
});



const pageData = {
  "ANCHOR-FASTENERS-supplier-in-chennai": {
    title: "Anchor Fasteners Supplier in Chennai",
    text: "We Supply: Chemical Anchors, Wedge Anchors, Rawal Type Anchors, Bolt Type Anchors, Shell Anchors, Pin type Anchors all across Chennai"
  },
  "ANCHOR-FASTENERS-supplier-in-tamil-nadu": {
    title: "Anchor Fasteners Supplier in Tamil Nadu",
    text: "We Supply: Chemical Anchors, Wedge Anchors, Rawal Type Anchors, Bolt Type Anchors, Shell Anchors, Pin type Anchors all across Tamil Nadu and South India"
  },
  "Fasteners-For-Boiler-Manufacturing": {
    title: "Fasteners For Boiler Manufacturing",
    text: "We are Suppliers of All Types of Fasteners for Boiler Manufacturing like MS High Tensile Fasteners, Bolts & Nuts accross Chennai, Tamil Nadu and South India"
  },
  "Fasteners-For-Bridge-Manufacturing": {
    title: "Fasteners For Bridge Manufacturing",
    text: "We are Suppliers of All Types of Fasteners for Bridge Manufacturing like Structural / Heavy Duty Bolts and Hot Dip Fasteners  accross Chennai, Tamil Nadu and South India"
  },
  "Fasteners-For-Chimney-Manufacturing": {
    title: "Fasteners For Chimney Manufacturing",
    text: "We are Suppliers of All Types of Fasteners for Chimney Manufacturing like Hot Dip Fasteners accross Chennai, Tamil Nadu and South India"
  },
  "Fasteners-For-Industrial-Fans-Manufacturing": {
    title: "Fasteners For Industrial Fans Manufacturing",
    text: "We are Suppliers of All Types of Fasteners for Industrial Fans Manufacturing like SS Fasteners accross Chennai, Tamil Nadu and South India"
  },
  "Fasteners-For-Industrial-Shed-Construction": {
    title: "Fasteners For Industrial Shed Construction",
    text: "We are Suppliers of All Types of Fasteners for Industrial Shed Construction like MS, GI, Foundation Bolts and Nuts accross Chennai, Tamil Nadu and South India"
  },
  "Fasteners-For-Precast-Concrete-Structures": {
    title: "Fasteners For Precast Concrete Structures",
    text: "We are Suppliers of All Types of Fasteners for Construction of Precast Concrete Structures like Hot Dip Fasteners and MS Fasteners accross Chennai, Tamil Nadu and South India"
  },
  "Fasteners-For-Transmisson-Towers": {
    title: "Fasteners For Transmisson Towers",
    text: "We are Suppliers of All Types of Fasteners for Construction of Transmission Towers like Hot Dip Fasteners accross Chennai, Tamil Nadu and South India"
  },
  "Fasteners-For-Under-Water-Construction": {
    title: "Fasteners For Under Water Construction",
    text: "We are Suppliers of All Types of Fasteners for Underwater Construction like SS Fasteners accross Chennai, Tamil Nadu and South India"
  },
  "Fasteners-For-Windmills-Manufacturing": {
    title: "Fasteners For Windmills Manufacturing",
    text: "We are Suppliers of All Types of Fasteners for Windmills Manufacturing like High Tensile and MS Bolts with Plating accross Chennai, Tamil Nadu and South India"
  },
  "FOUNDATION-BOLT-supplier-in-chennai": {
    title: "Foundation Bolt Supplier in Chennai",
    text: "We Supply: Garde 4.6 and 8.8 L, J, T and Square Type Foundation Bolts and Sag Rods all accross Chennai"
  },
  "FOUNDATION-BOLT-supplier-in-tamil-nadu": {
    title: "Foundation Bolt Supplier in Tamil Nadu",
    text: "We Supply: Garde 4.6 and 8.8 L, J, T, and Square Type Foundation Bolts and Sag Rods all accross Tamil Nadu and South India"
  },
  "GI-NUT-BOLT-supplier-in-chennai": {
    title: "GI Nut Bolt Supplier in Chennai",
    text: "We Supply: GI (Electro Plated) Garde 4.6 and 5.6 Bolts, Nuts, Spring Washers and Round Washers all across Chennai"
  },
  "GI-NUT-BOLT-supplier-in-tamil-nadu": {
    title: "GI Nut Bolt Supplier in Tamil Nadu",
    text: "We Supply: GI (Electro Plated) Garde 4.6 and 5.6 Bolts, Nuts, Spring Washers and Round Washers all across Tamil Nadu and South India"
  },
  "GOLDEN-YELLOW-PLATING-FASTENERS-supplier-in-chennai": {
    title: "Golden Yellow Plating Fasteners Supplier in Chennai",
    text: "We Supply: Garde 4.6 and 5.6 Golden (Yellow) Plated Bolts, Nuts, Spring Washers and Round Washers all across Chennai"
  },
  "GOLDEN-YELLOW-PLATING-FASTENERS-supplier-in-tamil-nadu": {
    title: "Golden Yellow Plating Fasteners Supplier in Tamil Nadu",
    text: "We Supply: Garde 4.6 and 5.6  Golden (Yellow) Plated Bolts, Nuts, Spring Washers and Round Washers all across Tamil Nadu and South India"
  },
  "high-ten-fast-in-chen": {
    title: "High Tensile Fasteners Supplier in Chennai",
    text: "We Supply: Garde 8.8, 10.9 High Tensile Bolts and Nuts  Bolts, Nuts, Spring Washers and Round Washers all across Chennai"
  },
  "high-ten-fast-in-tn": {
    title: "High Tensile Fasteners Supplier in Tamil Nadu",
    text: "We Supply: Garde 8.8, 10.9 High Tensile Bolts and Nuts  Bolts, Nuts, Spring Washers and Round Washers all across Tamil Nadu and South India"
  },
  "HILLSIDE-WASHER-supplier-in-chennai": {
    title: "Hillside Washer Supplier in Chennai",
    text: "We Supply: Garde 4.6 Hillside Washers all accross Chennai"
  },
  "HILLSIDE-WASHER-supplier-in-tamil-nadu": {
    title: "Hillside Washer Supplier in Tamil Nadu",
    text: "We Supply: Garde 4.6 Hillside Washers all accross Tamil Nadu and South India"
  },
  "HOT-DIP-GALVANIZED-BOLTS-AND-NUTS-supplier-in-chennai": {
    title: "Hot Dip Galvanized Bolts and Nuts Supplier in Chennai",
    text: "We Supply: Garde 4.6, 5.6 and 8.8 Hot Dip Galvanized Bolts and Nuts  Bolts, Nuts, Spring Washers and Round Washers all across Chennai"
  },
  "HOT-DIP-GALVANIZED-BOLTS-AND-NUTS-supplier-in-tamil-nadu": {
    title: "Hot Dip Galvanized Bolts and Nuts Supplier in Tamil Nadu",
    text: "We Supply: Garde 4.6, 5.6 and 8.8 Hot Dip Galvanized Bolts and Nuts  Bolts, Nuts, Spring Washers and Round Washers all across Tamil Nadu and South India"
  },
  "MS-NUT-BOLT-supplier-in-chennai": {
    title: "MS Nut Bolt Supplier in Chennai",
    text: "We Supply: MS Garde 4.6 and 5.6 Bolts, Nuts, Spring Washers and Round Washers all across Chennai"
  },
  "MS-NUT-BOLT-supplier-in-tamil-nadu": {
    title: "MS Nut Bolt Supplier in Tamil Nadu",
    text: "We Supply: MS Garde 4.6 and 5.6 Bolts, Nuts, Spring Washers and Round Washers all across Tamil Nadu and South India"
  },
  "SS-FASTENERS-supplier-in-chennai": {
    title: "SS Fasteners Supplier in Chennai",
    text: "We Supply: SS Garde 202, 304, and 316 Bolts and Nuts  Bolts, Nuts, Spring Washers and Round Washers all across Chennai"
  },
  "SS-FASTENERS-supplier-in-tamil-nadu": {
    title: "SS Fasteners Supplier in Tamil Nadu",
    text: "We Supply: SS Garde 202, 304, and 316 Bolts and Nuts  Bolts, Nuts, Spring Washers and Round Washers all across Tamil Nadu and South India"
  },
  "TAPER-WASHER-supplier-in-chennai": {
    title: "Taper Washer Supplier in Chennai",
    text: "We Supply: Garde 4.6 Taper Washers all accross Chennai"
  },
  "TAPER-WASHER-supplier-in-tamil-nadu": {
    title: "Taper Washer Supplier in Tamil Nadu",
    text: "We Supply: Garde 4.6 Taper Washers all accross Tamil Nadu and South India"
  }
};


// Share handler
document.getElementById("shareBtn").addEventListener("click", () => {
  const currentUrl = window.location.href;
  const parts = currentUrl.split("/");
  const lastPart = parts.pop() || parts.pop();
  const data = pageData[lastPart];

  if (!data) {
    alert("No share data found for this page.");
    return;
  }

  if (navigator.share) {
    navigator.share({
        title: data.title,
        text: data.text,
        url: currentUrl
      })
      .then(() => console.log("Share successful"))
      .catch((error) => console.error("Error sharing", error));
  } else {
    alert("Web Share API is not supported in this browser.");
  }
});