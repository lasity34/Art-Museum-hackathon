let art_collection = [];
if (localStorage["user_collection"]) {
    art_collection = JSON.parse(localStorage["user_collection"]) 
}



const collectionTemplate = document.querySelector(".collection-template").innerHTML;


const collectionTemplateDisplay = document.querySelector(".collection_display");

const template = Handlebars.compile(collectionTemplate);


collectionTemplateDisplay.innerHTML = template(art_collection);

console.log(art_collection);

// display_user_collection()
