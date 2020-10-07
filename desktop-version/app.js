const wallpaperContainerNode = document.getElementsByClassName(
  "wallpaper-container"
);

const aspectRatioContainerNode = document.getElementsByClassName(
  "aspect-ratio-container"
);

const wallpaperContainers = Array.from(wallpaperContainerNode);
const aspectRatioContainers = Array.from(aspectRatioContainerNode);

wallpaperContainers.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    item.lastElementChild.classList.add("visible");
  });
  item.addEventListener("mouseout", (e) => {
    item.lastElementChild.classList.remove("visible");
  });
});
