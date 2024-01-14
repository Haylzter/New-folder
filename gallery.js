document.addEventListener("DOMContentLoaded", function () {
  const galleryRows = document.querySelectorAll(".gallery-row");

  galleryRows.forEach((row) => {
      const galleryItems = row.querySelectorAll(".gallery-item");

      galleryItems.forEach((item) => {
          const scrollContainer = item.querySelector(".image-scroll");
          
          // Set the height of the scroll container to match other gallery items
          scrollContainer.style.height = "200px";

          const firstImage = scrollContainer.querySelector("img");
          const firstImageHeight = firstImage.clientHeight;

          const galleryPhotos = scrollContainer.querySelectorAll("img");
          galleryPhotos.forEach((photo) => {
              photo.style.height = `${firstImageHeight}px`;
          });

          const scrollLeftBtn = document.createElement("button");
          const scrollRightBtn = document.createElement("button");

          scrollLeftBtn.classList.add("scroll-btn", "scroll-btn-left");
          scrollRightBtn.classList.add("scroll-btn", "scroll-btn-right");

          scrollLeftBtn.innerHTML = "&lt;";
          scrollRightBtn.innerHTML = "&gt;";

          item.appendChild(scrollLeftBtn);
          item.appendChild(scrollRightBtn);

          item.addEventListener("mousemove", (event) => {
              const mouseX = event.clientX - item.getBoundingClientRect().left;

              if (mouseX < item.clientWidth / 2) {
                  // Hover on the left side
                  scrollLeftBtn.style.opacity = 1;
                  scrollRightBtn.style.opacity = 0;
              } else {
                  // Hover on the right side
                  scrollLeftBtn.style.opacity = 0;
                  scrollRightBtn.style.opacity = 1;
              }
          });

          item.addEventListener("mouseleave", () => {
              scrollLeftBtn.style.opacity = 0;
              scrollRightBtn.style.opacity = 0;
          });

          const buttonStyle = {
              background: "#FFFFFF",
              border: "1px",
              borderRadius: "60%",
              color: "#000000ed",
              cursor: "pointer",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "20px",
              height: "35px",
              fontSize: "14px",
              fontWeight: "bold",
              lineHeight: "15px",
              lineWidth: "40px",
              transition: "background 0.3s",
          };

          Object.assign(scrollLeftBtn.style, buttonStyle, {
              left: "0",
          });

          Object.assign(scrollRightBtn.style, buttonStyle, {
              right: "0",
          });

          Object.assign(scrollContainer.style, {
              display: "flex",
              overflowX: "hidden",
              scrollSnapType: "x mandatory",
              position: "relative",
          });

          scrollLeftBtn.addEventListener("click", function () {
              scrollContainer.scrollBy({
                  left: -285,
                  behavior: "smooth",
              });
          });

          scrollRightBtn.addEventListener("click", function () {
              scrollContainer.scrollBy({
                  left: 285,
                  behavior: "smooth",
              });
          });
      });
  });
});
