// hidden_main_container를 나타내고 감추는 함수
function toggleHiddenContainer() {
  var hiddenContainer = document.querySelector(".hidden_main_container");
  // hiddenContainer가 보이는지 확인하고 보이면 감추고, 아니면 나타내기
  if (hiddenContainer.style.display === "block") {
    hiddenContainer.style.display = "none";
  } else {
    hiddenContainer.style.display = "block";
  }
}

// hbtn 버튼에 클릭 이벤트 리스너 추가
document.querySelector(".hbtn").addEventListener("click", function () {
  toggleHiddenContainer();
});

//자동 슬라이드
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
//banner 슬라이드
const bannerWrap = document.querySelector(".banner-wrap");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const images = document.querySelectorAll(".banner-img");
const bannerBox = document.querySelector(".banner-box");
let currentIndex = 0;
let intervalId; // 변수 추가

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

function startAutoSlide() {
  intervalId = setInterval(nextSlide, 3000); // 3초마다 자동 슬라이드
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

bannerWrap.addEventListener("mouseenter", () => {
  showControls();
  stopAutoSlide(); // 마우스가 들어오면 자동 슬라이드 중지
});

bannerWrap.addEventListener("mouseleave", () => {
  hideControls();
  startAutoSlide(); // 마우스가 나가면 자동 슬라이드 재개
});

prevButton.addEventListener("click", () => {
  prevSlide();
  stopAutoSlide(); // 수동으로 슬라이드할 때 자동 슬라이드 중지
});

nextButton.addEventListener("click", () => {
  nextSlide();
  stopAutoSlide(); // 수동으로 슬라이드할 때 자동 슬라이드 중지
});

startAutoSlide(); // 페이지 로드 시 자동 슬라이드 시작
showImage(currentIndex);

//이런 사진 찾고 있는지에 대한 슬라이드
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".action_2_prev");
  const nextButton = document.querySelector(".action_2_next");
  const itemList = document.querySelector(".item-list");
  let currentIndex = 0;

  prevButton.addEventListener("click", function () {
    currentIndex =
      currentIndex === 0 ? itemList.children.length - 1 : currentIndex - 1;
    updateSlider();
  });

  nextButton.addEventListener("click", function () {
    currentIndex =
      currentIndex === itemList.children.length - 1 ? 0 : currentIndex + 1;
    updateSlider();
  });

  function updateSlider() {
    const itemWidth = itemList.children[0].offsetWidth;
    itemList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // 이전(prev) 버튼 표시
    prevButton.style.display = "block";
    // 다음(next) 버튼 표시
    nextButton.style.display = "block";

    // 슬라이드가 첫 번째인 경우 이전(prev) 버튼 숨기기
    if (currentIndex === 0) {
      prevButton.style.display = "none";
    }
    // 슬라이드가 마지막인 경우 다음(next) 버튼 숨기기
    if (currentIndex === itemList.children.length - 1) {
      nextButton.style.display = "none";
    }
  }
});

//오늘의 기획적 슬라이드

document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev-button-1");
  const nextButton = document.querySelector(".next-button-1");
  const today_2_ul = document.querySelector(".today_2_ul");
  const slideWidth = 360; // 각 슬라이드의 너비
  let currentIndex = 0;

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < today_2_ul.children.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  function updateSlider() {
    const offset = -currentIndex * slideWidth;
    today_2_ul.style.transform = `translateX(${offset}px)`;

    // 이전(prev) 버튼 표시
    prevButton.style.display = currentIndex === 0 ? "none" : "block";
    // 다음(next) 버튼 표시
    nextButton.style.display =
      currentIndex === today_2_ul.children.length - 1 ? "none" : "block";
  }
});
//베스트 카테고리 배경색과 글씨 색 변경
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev-best-1");
  const nextButton = document.querySelector(".next-best-1");
  const listItems = document.querySelectorAll(".best_button_li");

  // 이전 버튼 클릭 시
  prevButton.addEventListener("click", function () {
    prevButton.classList.add("clicked");
    nextButton.classList.remove("clicked");
    listItems.forEach((li) => li.classList.remove("clicked"));
  });

  // 다음 버튼 클릭 시
  nextButton.addEventListener("click", function () {
    nextButton.classList.add("clicked");
    prevButton.classList.remove("clicked");
    listItems.forEach((li) => li.classList.remove("clicked"));
  });

  // 각 li 클릭 시
  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      listItems.forEach((li) => li.classList.remove("clicked"));
      item.classList.add("clicked");
    });
  });
});

//베스트 슬라이드
document.addEventListener("DOMContentLoaded", function () {
  const BestPrev = document.querySelector(".prev-best-1");
  const BestNext = document.querySelector(".next-best-1");
  const itemList = document.querySelector(".best_button_ul");
  const container = document.querySelector(".best_container_1");

  BestPrev.addEventListener("click", function () {
    slideItems("prev");
  });

  BestNext.addEventListener("click", function () {
    slideItems("next");
  });

  function slideItems(direction) {
    const containerWidth = container.clientWidth;
    const itemWidth = itemList.scrollWidth / itemList.children.length;
    const numVisibleItems = Math.floor(containerWidth / itemWidth);

    let newScrollLeft;
    if (direction === "prev") {
      newScrollLeft = Math.max(
        0,
        itemList.scrollLeft - itemWidth * numVisibleItems
      );
    } else if (direction === "next") {
      newScrollLeft = Math.min(
        itemList.scrollWidth - containerWidth,
        itemList.scrollLeft + itemWidth * numVisibleItems
      );
    }

    itemList.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  }

  itemList.addEventListener("scroll", function () {
    const containerWidth = container.clientWidth;
    const itemWidth = itemList.scrollWidth / itemList.children.length;
    const maxScrollLeft = itemList.scrollWidth - containerWidth;
    const numVisibleItems = Math.floor(containerWidth / itemWidth);

    BestPrev.style.display = itemList.scrollLeft === 0 ? "none" : "block";
    BestNext.style.display =
      itemList.scrollLeft >= maxScrollLeft - 1 ? "none" : "block";
  });

  // 초기 슬라이드 상태 설정
  itemList.dispatchEvent(new Event("scroll"));
});
