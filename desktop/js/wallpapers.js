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
  {
    image:
      "https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?cs=srgb&dl=pexels-pixabay-531321.jpg&fm=jpg",
    aspectRatio: "1920x1080",
    tags: ["Dark", "Forest", "Road", "Relaxing"],
    dateAdded: "10-09-20",
    id: "4",
  },
  {
    image:
      "https://images.pexels.com/photos/4429509/pexels-photo-4429509.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4429509.jpg&fm=jpg",
    aspectRatio: "1920x1080",
    tags: ["Bad Driving", "Cars", "Woman", "Asian"],
    dateAdded: "10-09-20",
    id: "5",
  },
  {
    image:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg",
    aspectRatio: "1920x1080",
    tags: ["Nature", "Beautifle", "Relaxing", "Lake"],
    dateAdded: "10-09-20",
    id: "6",
  },
  {
    image:
      "https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?cs=srgb&dl=pexels-george-lebada-567540.jpg&fm=jpg",
    aspectRatio: "1920x1080",
    tags: ["Colorful", "Animals", "Close-up"],
    dateAdded: "10-09-20",
    id: "7",
  },
  {
    image: "https://wallpapercave.com/wp/ca0lRWb.jpg",
    aspectRatio: "1920x1080",
    tags: ["Anime", "Cool", "Tech", "Art"],
    dateAdded: "10-09-20",
    id: "8",
  },
  {
    image: "https://wallpapercave.com/wp/kItH6DZ.jpg",
    aspectRatio: "1920x1080",
    tags: ["Nature", "Anime", "Grassland", "Tree"],
    dateAdded: "10-09-20",
    id: "9",
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
