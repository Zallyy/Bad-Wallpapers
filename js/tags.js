// This Grabs a collection of all tags in the wallpapers array.
let tag_collection = [] 

wallpapers.forEach( ({tags}) => {
    tags.forEach( tag => tag_collection.push(tag)) // Pushes all tags into the array
})

tag_collection = [...new Set(tag_collection)] // Erases all duplicates
tag_collection.sort()

//Generate Page based for each Tag when clicked
const url = window.location.href; //Get URL

//Parse URL to see what wallpaper object we are grabbing
let tag_index = url.indexOf('?tags=')+6 // Grabs the index of the start of the tag
let tag = url.slice(tag_index, url.length) // Will grab us the tag

// What if we have multiple tags? > I'll maybe do this

// Generate Index.html but with search query of Tag to filter out irrelevant wallpapers