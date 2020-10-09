
//Generate Page based off the URL 
const url = window.location.href; //Get URL

//Parse URL to see what wallpaper object we are grabbing
let id = url.indexOf('=')+1
id = url[id]

let dateEl = document.getElementById('date')
let wallpaperEl = document.getElementById('wallpaper')
let tagsEl = document.getElementById('tags')
let aspectRatioEl = document.getElementById('aspect-ratio')

function CreatePage ({image, aspectRatio, tags, dateAdded}) {
    dateEl.innerHTML = dateAdded
    wallpaperEl.src = image 
    aspectRatioEl.innerHTML = aspectRatio
    tags.forEach(tag => {
        tagsEl.innerHTML += `
        <button class="tag">${tag}</button>
        `
    })
}

CreatePage(wallpapers[id])