
//Generate Page based off the URL 
const url = window.location.href; //Get URL

//Parse URL to see what wallpaper object we are grabbing
let id = url.indexOf('=')+1
id = url[id]

const dateEl = document.getElementById('date')
const wallpaperEl = document.getElementById('wallpaper')
const tagsEl = document.getElementById('tags')
const aspectRatioEl = document.getElementById('aspect-ratio')
const fullsize = document.getElementById('full-size')

function CreatePage ({image, aspectRatio, tags, dateAdded}) {
    dateEl.innerHTML = dateAdded
    wallpaperEl.src = image 
    aspectRatioEl.innerHTML = aspectRatio
    fullsize.href = image;
    tags.forEach(tag => {
        tagsEl.innerHTML += `
        <button class="tag">${tag}</button>
        `
    })
    document.querySelectorAll('.wallpaper-link').forEach(link => link.href=`${image}`)
}

CreatePage(wallpapers[id])