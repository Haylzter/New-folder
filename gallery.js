const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  const scrollContainer = item.querySelector(".image-scroll");
  const scrollLeftBtn = document.createElement("button");
  const scrollRightBtn = document.createElement("button");

  scrollLeftBtn.classList.add("scroll-btn", "scroll-btn-left");
  scrollRightBtn.classList.add("scroll-btn", "scroll-btn-right");

  scrollLeftBtn.innerHTML = "&lt;";
  scrollRightBtn.innerHTML = "&gt;";

  item.appendChild(scrollLeftBtn);
  item.appendChild(scrollRightBtn);

  item.addEventListener("mouseenter", () => {
    scrollLeftBtn.style.opacity = 1;
    scrollRightBtn.style.opacity = 1;
  });

  item.addEventListener("mouseleave", () => {
    scrollLeftBtn.style.opacity = 0;
    scrollRightBtn.style.opacity = 0;
  });

  scrollLeftBtn.addEventListener("click", function () {
    scrollContainer.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  scrollRightBtn.addEventListener("click", function () {
    scrollContainer.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });
});