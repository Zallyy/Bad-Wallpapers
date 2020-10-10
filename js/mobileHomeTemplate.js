const mResults = document.getElementById('mresult');

mResults.innerHTML = wallpapers.length;
wallpapers.forEach( ({image, aspectRatio, id}) => {
    document.querySelector('#mimages-container').innerHTML += `            
    <a class='wallpaper-link' href="./wallpaper.html?=${id}">
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
