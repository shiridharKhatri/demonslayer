let playBtn = document.getElementById("play-btn");
let audio = document.getElementById("audio");
playBtn.onclick = function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

// header autoplay
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//onclick menu

let changeIcon = (icon) => {
  icon.classList.toggle("fa-times");
};
