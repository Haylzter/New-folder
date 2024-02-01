

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    const galleryRows = document.querySelectorAll(".gallery-row");

    
    for (const item of galleryData) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        galleryRows[0].appendChild(galleryItem);

 
        const galleryPhoto = document.createElement('div');
        galleryPhoto.className = 'gallery-photo';
        galleryItem.appendChild(galleryPhoto);

        const imageScroll = document.createElement('div');
        imageScroll.className = 'image-scroll';
        galleryPhoto.appendChild(imageScroll);

        
        for (const imageUrl of item.photos) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = item.name; // Use the property name for alt text
            imageScroll.appendChild(img);
        }

        

 
  
        const imageText = document.createElement('div');
        imageText.className = 'image-text';

        
        

        // Create individual elements for each piece of text content
        const nameText = document.createElement('p');
        nameText.textContent = item.name;

        const descriptionText = document.createElement('p');
        descriptionText.textContent = item.propertyDescription;

        const datesText = document.createElement('p');
        datesText.textContent = item.datesAvailable;

        const starsText = document.createElement('p');
        starsText.textContent = `${'$'.repeat(item.stars)} ${item.stars.toFixed(1)}`;

        const costText = document.createElement('p');
        costText.textContent = item.cost;

        
        imageText.appendChild(nameText);
        imageText.appendChild(descriptionText);
        imageText.appendChild(datesText);
        imageText.appendChild(starsText);
        imageText.appendChild(costText);

        
        galleryPhoto.appendChild(imageScroll);
        galleryPhoto.appendChild(imageText);
        galleryItem.appendChild(galleryPhoto);

        /**
        galleryContainer.appendChild(galleryItem);
      */
    }

    
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
