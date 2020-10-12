
//Generate Page based off the URL 

//Parse URL to see what wallpaper object we are grabbing
let mID = url.indexOf('=')+1
mID = url[mID]

const mDateEl = document.getElementById('mdate')
const mWallpaper = document.getElementById('mwallpaper')
const mTagsEl = document.getElementById('mtags')
const mAspectRatioEl = document.getElementById('maspect-ratio')
const mFullsize = document.getElementById('mfull-size')

function CreatePage ({image, aspectRatio, tags, dateAdded}) {
    mDateEl.innerHTML = dateAdded
    mWallpaper.src = image 
    mAspectRatioEl.innerHTML = aspectRatio
    mFullsize.href = image;
    tags.forEach(tag => {
        mTagsEl.innerHTML += `
        <a href="./index.html?tags=${tag}"><button class="tag">${tag}</button></a>
        `
    })
    document.querySelectorAll('.wallpaper-link').forEach(link => link.href=`${image}`)
}

CreatePage(wallpapers[mID])