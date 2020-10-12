// How to use > DONT TOUCH THIS FILE. Just use the variable tag and make sure that it is ahead of your other js file in the HTML files.
// Overview: This will grab the url and see if there are any tags in the query

// This Grabs a collection of all tags in the wallpapers array.
let tag_collection = [] 

function FilterResults() {
    wallpapers.forEach( ({tags}) => {
        tags.forEach( tag => tag_collection.push(tag)) // Pushes all tags into the array
    })
    
    tag_collection = [...new Set(tag_collection)] // Erases all duplicates
    tag_collection.sort()
    
    //Generate Page based for each Tag when clicked
    let url = window.location.href; //Get URL
    
    //Parse URL to see what wallpaper object we are grabbing
    let tag_index = url.indexOf('?tags=')+6 // Grabs the index of the start of the tag
    if (tag_index == 5) { //If it doesnt exist its the normal page
        return
    }
    const tag = url.slice(tag_index, url.length) // Will grab us the tag
    alert(tag)
}

FilterResults()


// Notes
// What if we have multiple tags? > I'll maybe do this

// Generate searchpage but with search query of Tag to filter out irrelevant wallpapers > Different File
