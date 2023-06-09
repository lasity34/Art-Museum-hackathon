// import { art_factory } from "./factory.js";

let art_collection = localStorage.getItem("user_collection") ? JSON.parse(localStorage.getItem("user_collection")) : [];
let scanned_count = localStorage.getItem("scanned_count") ? JSON.parse(localStorage.getItem("scanned_count")) : {};
let scanned_id = localStorage.getItem("scanned_id") ? JSON.parse(localStorage.getItem("scanned_id")) : [];
// console.log(scanned_count)

let art_inst = art_factory(art_collection, scanned_count, scanned_id);

let artItems = [];

let readerElem = document.querySelector("#reader");

function onScanSuccess(decodedText, decodedResult) {
    art_inst.selected_art(Number(decodedText));

    html5QrcodeScanner.clear();
    displayScannedItem();
}

var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250,
});
html5QrcodeScanner.render(onScanSuccess);

// ******************************* Display SCANNED ITEM DATA USING TEMPLATE *****************************

let scannerWrapper = document.querySelector(".scanner-wrapper");

function displayScannedItem() {
    scannerWrapper.style.display = "none";

    let singleArtItem = art_inst.new_art_item();
    // Ensure that singleArtItem is not already an array or already nested
    if (singleArtItem[0]) {
        singleArtItem = singleArtItem[0];
    }

    singleArtItem = {
        ...singleArtItem,
        count: art_inst.get_scanned_count_by_category(),
    };

    scanned_id = art_inst.get_scan_id();

    let scanned_id_array = Array.from(scanned_id);
    localStorage.setItem("scanned_id", JSON.stringify(scanned_id_array));

    scanned_count = art_inst.scanned__category_count();

    localStorage.setItem("scanned_count", JSON.stringify(scanned_count));

    let scannedInfoWrapper = document.querySelector(".scanned-text-info-wrapper");

    let scannedInfoTemplate = document.querySelector(".scanned-text-info-template").innerHTML;

    let compiledTemplate = Handlebars.compile(scannedInfoTemplate);

    art_inst.setLocations([singleArtItem]) ;

    singleArtItem.locations = art_inst.getLocations()

    console.log(singleArtItem);
    // pass singleArtItem wrapped in an array directly to compiledTemplate
    scannedInfoWrapper.innerHTML = compiledTemplate([singleArtItem]);
}

// ***************************

// ************************** Display category items

function display_all_categories() {
    art_inst.catorgorize_items();
    const dataForRendering = art_inst.get_all_items_by_category();

    const source = document.getElementById("artwork-template").innerHTML;
    const template = Handlebars.compile(source);
    const html = template(dataForRendering);

    const artPeriodDisplay = document.getElementById("art_period_display");
    artPeriodDisplay.innerHTML = html;

    // Add click event listener to each category box
    const categoryBoxes = artPeriodDisplay.getElementsByClassName("category-box");
    for (let i = 0; i < categoryBoxes.length; i++) {
        categoryBoxes[i].addEventListener("click", function (e) {
            const category = e.currentTarget.getElementsByTagName("h2")[0].innerText;
            display_details_for_category(category);
        });
    }
}

function display_details_for_category(category) {
    const dataForDetails = art_inst.get_all_items_by_category()[category];

    const source = document.getElementById("details-template").innerHTML;
    const template = Handlebars.compile(source);
    const html = template(dataForDetails);

    // Create modal and modal overlay
    const modal = document.createElement("div");
    const modalOverlay = document.createElement("div");

    modal.className = "modal";
    modalOverlay.className = "modal-overlay";

    modal.innerHTML = html;

    // Remove modal when overlay is clicked
    modalOverlay.addEventListener("click", function () {
        modal.remove();
        modalOverlay.remove();
    });

    // Append modal and overlay to root
    const modalRoot = document.getElementById("modal-root");
    modalRoot.appendChild(modalOverlay);
    modalRoot.appendChild(modal);
}

function display_user_collection() {
    art_collection = art_inst.get_user_collection();
    localStorage.setItem("user_collection", JSON.stringify(art_collection));

    const source = document.getElementById("collection-template").innerHTML;
    const collection_display = document.getElementById("collection_display");
    const template = Handlebars.compile(source);
    const html = template(art_collection);

    collection_display.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (e) {
        // check if the clicked element is the collection button
        if (e.target && e.target.id === "collection_button") {
            const artId = e.target.getAttribute("data-art-id");

            art_inst.art_collection(Number(artId));
            display_user_collection(); // update the displayed collection
        }
    });
});
document.addEventListener("DOMContentLoaded", display_all_categories());
