const images = document.querySelectorAll(".wallpaper-container img");

// renamed item to img
images.forEach((img) => {
  img.addEventListener("mouseover", (e) => {
    //removed aspect ratio selector

    //this is selecting the aspect ratio container
    img.parentElement.nextElementSibling.style.width = 320 + "px";
    img.parentElement.nextElementSibling.classList.add("visible");
  });
  img.addEventListener("mouseout", (e) => {
    img.parentElement.nextElementSibling.classList.remove("visible");
  });
});

// end of changed code
