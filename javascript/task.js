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
