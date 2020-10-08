// swapped to query selectors, also changed what they were selecting, most of the code is changed

const images = document.querySelectorAll(".wallpaper-container img");

images.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const aspectRatioContainers = document.querySelectorAll(
      ".aspect-ratio-container"
    );
    aspectRatioContainers.forEach((item) => {
      const img = item.previousElementSibling;
      console.log(img.width);
      item.style.width = img.width + "px";
    });
    item.nextElementSibling.classList.add("visible");
  });
  item.addEventListener("mouseout", (e) => {
    item.nextElementSibling.classList.remove("visible");
  });
});

// end of changed code
