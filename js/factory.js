// import { louvre_items } from "./data.js";
// rating function

// export function art_factory(collection_input, scanned_count_input, scanned_id_input) {


function art_factory(collection_input, scanned_count_input, scanned_id_input) {
    let louvre_items = data().getData() ;

    const art_item = [];
    const scanned_count =  scanned_count_input ? scanned_count_input : {};
    const user_collection = collection_input || [];
    const all_items_by_category = {};
    let locations = [];
    let currentLocation = "";
    let scanned_ids = scanned_id_input ? new Set(scanned_id_input) : new Set();
   
    let last_scanned_category;
    let last_scanned_artist;

    //   Finds and selects an art piece based on the provided ID (e.g., from a QR code scan).
    function selected_art(input) {
        let found_item = louvre_items.find((item) => item.id === input);

        if (found_item) {
            // Add the found item to the art_item array regardless of whether it has been scanned before
            art_item.push(found_item);

            // Update the last scanned category and artist
            last_scanned_category = found_item.category;
            last_scanned_artist = found_item.artist;

            // Only update the count and add the ID to the set if the item hasn't been previously selected
            if (!scanned_ids.has(input)) {
                scanned_ids.add(input); // add the ID to the set
                scanned_count[found_item.category] = (scanned_count[found_item.category] || 0) + 1;
                scanned_count[found_item.artist] = (scanned_count[found_item.artist] || 0) + 1;
                console.log('scanned_count inside selected_art after updating:', scanned_count);
            }

           
        }
    }

    //   This will add art pieces to the collection
    function art_collection(input) {
        let found_item = louvre_items.find((item) => item.id === input);

        if (found_item && !user_collection.includes(found_item)) {
            user_collection.push(found_item);
        }
    }

    function catorgorize_items() {
        for (let item of louvre_items) {
            if (!all_items_by_category[item.category]) {
                all_items_by_category[item.category] = [];
            }
            all_items_by_category[item.category].push(item);
        }
    }

    //   This will track the number of art pieces scanned per that category
    function get_scanned_count_by_category() {
        if (last_scanned_category) {
            console.log('scanned_count inside get_scanned_count_by_category:', scanned_count);
            return `${scanned_count[last_scanned_category] || 0} out of ${louvre_items.filter((item) => item.category === last_scanned_category).length} ${last_scanned_category} has been scanned`;
        } else {
            return "No items have been scanned yet.";
        }
    }

    //   This will track the number of art pieces scanned per that artist
    function get_scanned_count_by_Artist() {
        if (last_scanned_artist) {
            return `${scanned_count[last_scanned_artist] || 0} out of ${louvre_items.filter((item) => item.artist === last_scanned_artist).length} ${last_scanned_artist} has been scanned`;
        } else {
            return "No items have been scanned yet.";
        }
    }
    
    function new_art_item() {
        return art_item;
    }

    function get_user_collection() {
        return user_collection;
    }

    function get_all_items_by_category() {
        return all_items_by_category;
    }


    function scanned__category_count() {
        return scanned_count;
    }

    function get_scan_id() {
        return scanned_ids;
    }

    /*
  create an empty array of locations 
  loop through data 
  loop through the data to find all the items with the category as the scanned item  
  find their location and push into array 
  
  
  */
    function setLocations(scanned) {
        for (let i = 0; i < louvre_items.length; i++) {
            if (louvre_items[i].category === scanned[0].category) locations.push(louvre_items[i].location);
        }
    }

    function setCurrentLocation(scanned) {
        currentLocation = scanned[0].location;
    }

    function getCurrentlocation() {
        return currentLocation;
    }

    function getLocations() {
        return locations;
    }
    return {
        selected_art,
        new_art_item,
        get_scanned_count_by_category,
        get_scanned_count_by_Artist,
        art_collection,
        get_user_collection,
        catorgorize_items,
        scanned__category_count,
        get_all_items_by_category,
        setCurrentLocation,
        getCurrentlocation,
        setLocations,
        getLocations,
        get_scan_id,
    };
}
