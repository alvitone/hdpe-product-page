document.addEventListener("DOMContentLoaded", function () {

  /* DOWNLOAD MODAL */

  const downloadModal = document.getElementById("downloadModal");
  const openDownload = document.getElementById("openModal");
  const closeDownload = document.getElementById("closeDownloadModal");

  if (openDownload) {
    openDownload.addEventListener("click", function (e) {
      e.preventDefault();
      downloadModal.classList.add("active");
    });
  }

  if (closeDownload) {
    closeDownload.addEventListener("click", function () {
      downloadModal.classList.remove("active");
    });
  }


  /* REQUEST CALLBACK MODAL */

  const requestModal = document.getElementById("requestModal");
  const openRequest = document.getElementById("openRequestModal");
  const closeRequest = document.getElementById("closeRequestModal");

  if (openRequest) {
    openRequest.addEventListener("click", function () {
      requestModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeRequest) {
    closeRequest.addEventListener("click", function () {
      requestModal.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }


  /* CLOSE WHEN CLICKING OUTSIDE */

  [downloadModal, requestModal].forEach(modal => {
    if (!modal) return;

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

});


document.addEventListener("DOMContentLoaded", function () {

  const stickyHeader = document.getElementById("stickyHeader");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {

    const currentScrollY = window.scrollY;
    const firstFold = window.innerHeight;

    if (currentScrollY > firstFold) {

      if (currentScrollY < lastScrollY) {
        // Scrolling UP
        stickyHeader.classList.add("active");
      } else {
        // Scrolling DOWN
        stickyHeader.classList.remove("active");
      }

    } else {
      stickyHeader.classList.remove("active");
    }

    lastScrollY = currentScrollY;

  });

});

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

const zoomSlides = document.querySelectorAll(".zoom-wrapper");

zoomSlides.forEach(wrapper => {

  const img = wrapper.querySelector("img");

  wrapper.addEventListener("mousemove", (e) => {

    const rect = wrapper.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(1.6)";
  });

  wrapper.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });

});


document.addEventListener("DOMContentLoaded", function () {

  const openBtn = document.getElementById("openRequestModal");
  const modal = document.getElementById("requestModal");
  const closeBtn = document.getElementById("closeModal");

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // close when clicking outside modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

});