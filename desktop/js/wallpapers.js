const wallpapers = [
  {
    image: "https://w.wallhaven.cc/full/zm/wallhaven-zml77y.jpg",
    aspectRatio: "1920x1080",
    tags: ["Anime", "Cat", "Street", "Digital"],
    dateAdded: "10-09-20",
    id: "0",
  },
  {
    image: "https://w.wallhaven.cc/full/0j/wallhaven-0jxowm.png",
    aspectRatio: "1920x1080",
    tags: ["Vector", "Purple", "Urban"],
    dateAdded: "10-09-20",
    id: "1",
  },
  {
    image: "https://w.wallhaven.cc/full/nk/wallhaven-nkyk5q.png",
    aspectRatio: "1920x1080",
    tags: ["Anime", "Snow", "School Uniform", "Headphones"],
    dateAdded: "10-09-20",
    id: "2",
  },
  {
    image: "https://w.wallhaven.cc/full/4x/wallhaven-4xjrel.jpg",
    aspectRatio: "1920x1080",
    tags: ["Cherry Blossom", "Nature", "Snow", "Sunset"],
    dateAdded: "10-09-20",
    id: "3",
  },
];

//Random Button Functionality
const randomButton = document.querySelectorAll(".fa-random");
randomButton.forEach((button) =>
  button.addEventListener("click", () => {
    window.location.href = `./wallpaper.html?=${Math.floor(
      Math.random() * wallpapers.length + 0
    )}`;
  })
);
