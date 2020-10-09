const results = document.getElementById('result');

results.innerHTML = wallpapers.length;
wallpapers.forEach( ({image, aspectRatio, id}) => {
    document.querySelector('#images-container').innerHTML += `            
    <a id='wallpaper-link' href="http://127.0.0.1:5500/wallpaper.html?=${id}">
        <div class="wallpaper-container">
            <div class="image-container">
                <img class="wallpaper" src="${image}" alt="wallpaper" width="200px" height="auto">
            </div>
            <div class="aspect-ratio-container">
                <h3 class="aspect-ratio">${aspectRatio}</h3>
            </div>
        </div>
    </a>`
})