document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelectorAll(".best_li");
  let index = 0;

  function firstShow() {
    list.forEach((li) => li.classList.remove("active"));
    list[index].classList.add("active");
    index = (index + 1) % list.length;
  }

  firstShow();

  setInterval(firstShow, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  const liNavDiv = document.querySelector(".li_nav_div");
  const hiddenContainer = document.querySelector(".hidden_container");

  liNavDiv.addEventListener("click", function () {
    hiddenContainer.style.display =
      hiddenContainer.style.display === "none" ? "block" : "none";
  });
});

const bannerWrap = document.querySelector(".banner-wrap");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const images = document.querySelectorAll(".banner-img");
let currentIndex = 0;

function showControls() {
  prevButton.style.display = "block";
  nextButton.style.display = "block";
}

function hideControls() {
  prevButton.style.display = "none";
  nextButton.style.display = "none";
}

function showImage(index) {
  const width = images[0].clientWidth;
  bannerBox.style.transform = `translateX(-${index * width}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

bannerWrap.addEventListener("mouseenter", showControls);
bannerWrap.addEventListener("mouseleave", hideControls);
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showImage(currentIndex);
