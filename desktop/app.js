const images = document.querySelectorAll(".wallpaper-container img");
const aspectRatioContainers = document.querySelectorAll(
  ".aspect-ratio-container"
);

aspectRatioContainers.forEach((item) => {
  let img = item.previousElementSibling;
  console.log(img.width);
  item.style.width = img.width + "px";
});
images.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    item.nextElementSibling.classList.add("visible");
  });
  item.addEventListener("mouseout", (e) => {
    item.nextElementSibling.classList.remove("visible");
  });
});
