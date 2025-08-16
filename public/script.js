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
  "ANCHOR-FASTENERS-supplier-in-Chennai%0a": {
    title: "Anchor Fasteners Supplier in Chennai%0a",
    text: "SF Hardwares and Suppliers is the leading supplier of  Chemical Anchors, Wedge Anchors, Rawal Type Anchors, Bolt Type Anchors, Shell Anchors, Pin type Anchors all across Chennai%0a"
  },
  "ANCHOR-FASTENERS-supplier-in-tamil-nadu": {
    title: "Anchor Fasteners Supplier in Tamil Nadu",
    text: "SF Hardwares and Suppliers is the leading supplier of  Chemical Anchors, Wedge Anchors, Rawal Type Anchors, Bolt Type Anchors, Shell Anchors, Pin type Anchors all across Tamil Nadu and South India%0a"
  },
  "Fasteners-For-Boiler-Manufacturing": {
    title: "Fasteners For Boiler Manufacturing",
    text: "SF Hardwares and Suppliers is the Leading Supplier of All Types of Fasteners for Boiler Manufacturing like MS High Tensile Fasteners, Bolts & Nuts accross Chennai, Tamil Nadu and South India%0a"
  },
  "Fasteners-For-Bridge-Manufacturing": {
    title: "Fasteners For Bridge Manufacturing",
    text: "SF Hardwares and Suppliers is the Leading Supplier of All Types of Fasteners for Bridge Manufacturing like Structural / Heavy Duty Bolts and Hot Dip Fasteners  accross Chennai, Tamil Nadu and South India%0a"
  },
  "Fasteners-For-Chimney-Manufacturing": {
    title: "Fasteners For Chimney Manufacturing",
    text: "SF Hardwares and Suppliers is the Leading Supplier of All Types of Fasteners for Chimney Manufacturing like Hot Dip Fasteners accross Chennai, Tamil Nadu and South India%0a"
  },
  "Fasteners-For-Industrial-Fans-Manufacturing": {
    title: "Fasteners For Industrial Fans Manufacturing",
    text: "SF Hardwares and Suppliers is the Leading Supplier of All Types of Fasteners for Industrial Fans Manufacturing like SS Fasteners accross Chennai, Tamil Nadu and South India%0a"
  },
  "Fasteners-For-Industrial-Shed-Construction": {
    title: "Fasteners For Industrial Shed Construction",
    text: "SF Hardwares and Suppliers is the Leading Supplier of All Types of Fasteners for Industrial Shed Construction like MS, GI, Foundation Bolts and Nuts accross Chennai, Tamil Nadu and South India%0a"
  },
  "Fasteners-For-Precast-Concrete-Structures": {
    title: "Fasteners For Precast Concrete Structures",
    text: "SF Hardwares and Suppliers is the Leading Supplier of All Types of Fasteners for Construction of Precast Concrete Structures like Hot Dip Fasteners and MS Fasteners accross Chennai, Tamil Nadu and South India%0a"
  },
  "Fasteners-For-Transmisson-Towers": {
    title: "Fasteners For Transmisson Towers",
    text: "SF Hardwares and Suppliers is the Leading Supplier of All Types of Fasteners for Construction of Transmission Towers like Hot Dip Fasteners accross Chennai, Tamil Nadu and South India%0a"
  },
  "Fasteners-For-Under-Water-Construction": {
    title: "Fasteners For Under Water Construction",
    text: "SF Hardwares and Suppliers is the Leading Supplier of All Types of Fasteners for Underwater Construction like SS Fasteners accross Chennai, Tamil Nadu and South India%0a"
  },
  "Fasteners-For-Windmills-Manufacturing": {
    title: "Fasteners For Windmills Manufacturing",
    text: "SF Hardwares and Suppliers is the Leading Supplier of All Types of Fasteners for Windmills Manufacturing like High Tensile and MS Bolts with Plating accross Chennai, Tamil Nadu and South India%0a"
  },
  "FOUNDATION-BOLT-supplier-in-Chennai%0a": {
    title: "Foundation Bolt Supplier in Chennai%0a",
    text: "SF Hardwares and Suppliers is the leading supplier of  Garde 4.6 and 8.8 L, J, T and Square Type Foundation Bolts and Sag Rods all accross Chennai%0a"
  },
  "FOUNDATION-BOLT-supplier-in-tamil-nadu": {
    title: "Foundation Bolt Supplier in Tamil Nadu",
    text: "SF Hardwares and Suppliers is the leading supplier of  Garde 4.6 and 8.8 L, J, T, and Square Type Foundation Bolts and Sag Rods all accross Tamil Nadu and South India%0a"
  },
  "GI-NUT-BOLT-supplier-in-Chennai%0a": {
    title: "GI Nut Bolt Supplier in Chennai%0a",
    text: "SF Hardwares and Suppliers is the leading supplier of  GI (Electro Plated) Garde 4.6 and 5.6 Bolts, Nuts, Spring Washers and Round Washers all across Chennai%0a"
  },
  "GI-NUT-BOLT-supplier-in-tamil-nadu": {
    title: "GI Nut Bolt Supplier in Tamil Nadu",
    text: "SF Hardwares and Suppliers is the leading supplier of  GI (Electro Plated) Garde 4.6 and 5.6 Bolts, Nuts, Spring Washers and Round Washers all across Tamil Nadu and South India%0a"
  },
  "GOLDEN-YELLOW-PLATING-FASTENERS-supplier-in-Chennai%0a": {
    title: "Golden Yellow Plating Fasteners Supplier in Chennai%0a",
    text: "SF Hardwares and Suppliers is the leading supplier of  Garde 4.6 and 5.6 Golden (Yellow) Plated Bolts, Nuts, Spring Washers and Round Washers all across Chennai%0a"
  },
  "GOLDEN-YELLOW-PLATING-FASTENERS-supplier-in-tamil-nadu": {
    title: "Golden Yellow Plating Fasteners Supplier in Tamil Nadu",
    text: "SF Hardwares and Suppliers is the leading supplier of  Garde 4.6 and 5.6  Golden (Yellow) Plated Bolts, Nuts, Spring Washers and Round Washers all across Tamil Nadu and South India%0a"
  },
  "high-ten-fast-in-chen": {
    title: "High Tensile Fasteners Supplier in Chennai%0a",
    text: "SF Hardwares and Suppliers is the leading supplier of  Garde 8.8, 10.9 High Tensile Bolts and Nuts  Bolts, Nuts, Spring Washers and Round Washers all across Chennai%0a"
  },
  "high-ten-fast-in-tn": {
    title: "High Tensile Fasteners Supplier in Tamil Nadu",
    text: "SF Hardwares and Suppliers is the leading supplier of  Garde 8.8, 10.9 High Tensile Bolts and Nuts  Bolts, Nuts, Spring Washers and Round Washers all across Tamil Nadu and South India%0a"
  },
  "HILLSIDE-WASHER-supplier-in-Chennai%0a": {
    title: "Hillside Washer Supplier in Chennai%0a",
    text: "SF Hardwares and Suppliers is the leading supplier of  Garde 4.6 Hillside Washers all accross Chennai%0a"
  },
  "HILLSIDE-WASHER-supplier-in-tamil-nadu": {
    title: "Hillside Washer Supplier in Tamil Nadu",
    text: "SF Hardwares and Suppliers is the leading supplier of  Garde 4.6 Hillside Washers all accross Tamil Nadu and South India%0a"
  },
  "HOT-DIP-GALVANIZED-BOLTS-AND-NUTS-supplier-in-Chennai%0a": {
    title: "Hot Dip Galvanized Bolts and Nuts Supplier in Chennai%0a",
    text: "SF Hardwares and Suppliers is the leading supplier of  Garde 4.6, 5.6 and 8.8 Hot Dip Galvanized Bolts and Nuts  Bolts, Nuts, Spring Washers and Round Washers all across Chennai%0a"
  },
  "HOT-DIP-GALVANIZED-BOLTS-AND-NUTS-supplier-in-tamil-nadu": {
    title: "Hot Dip Galvanized Bolts and Nuts Supplier in Tamil Nadu",
    text: "SF Hardwares and Suppliers is the leading supplier of  Garde 4.6, 5.6 and 8.8 Hot Dip Galvanized Bolts and Nuts  Bolts, Nuts, Spring Washers and Round Washers all across Tamil Nadu and South India%0a"
  },
  "MS-NUT-BOLT-supplier-in-Chennai%0a": {
    title: "MS Nut Bolt Supplier in Chennai%0a",
    text: "SF Hardwares and Suppliers is the leading supplier of  MS Garde 4.6 and 5.6 Bolts, Nuts, Spring Washers and Round Washers all across Chennai%0a"
  },
  "MS-NUT-BOLT-supplier-in-tamil-nadu": {
    title: "MS Nut Bolt Supplier in Tamil Nadu",
    text: "SF Hardwares and Suppliers is the leading supplier of  MS Garde 4.6 and 5.6 Bolts, Nuts, Spring Washers and Round Washers all across Tamil Nadu and South India%0a"
  },
  "SS-FASTENERS-supplier-in-Chennai%0a": {
    title: "SS Fasteners Supplier in Chennai%0a",
    text: "SF Hardwares and Suppliers is the leading supplier of  SS Garde 202, 304, and 316 Bolts and Nuts  Bolts, Nuts, Spring Washers and Round Washers all across Chennai%0a"
  },
  "SS-FASTENERS-supplier-in-tamil-nadu": {
    title: "SS Fasteners Supplier in Tamil Nadu",
    text: "SF Hardwares and Suppliers is the leading supplier of  SS Garde 202, 304, and 316 Bolts and Nuts  Bolts, Nuts, Spring Washers and Round Washers all across Tamil Nadu and South India%0a"
  },
  "TAPER-WASHER-supplier-in-Chennai%0a": {
    title: "Taper Washer Supplier in Chennai%0a",
    text: "SF Hardwares and Suppliers is the leading supplier of  Garde 4.6 Taper Washers all accross Chennai%0a"
  },
  "TAPER-WASHER-supplier-in-tamil-nadu": {
    title: "Taper Washer Supplier in Tamil Nadu",
    text: "SF Hardwares and Suppliers is the leading supplier of  Garde 4.6 Taper Washers all accross Tamil Nadu and South India%0a"
  }
};


// Share handler
document.getElementById("shareBtn").addEventListener("click", () => {
  const currentUrl = window.location.href;
  const parts = currentUrl.split("/");
  let lastPart = parts.pop() || parts.pop(); // handle trailing slash
  let data = pageData[lastPart];

  // If no data found, try removing .html
  if (!data && lastPart.endsWith(".html")) {
    lastPart = lastPart.replace(/\.html$/, "");
    data = pageData[lastPart];
  }

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
