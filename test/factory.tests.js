//Still working on it, this is just setup

// import { art_factory } from "../js/factory.js";

describe("Working with selected values", function () {
    it("should test to see if Venus de Milo selected that the data will be retriced for Venus", function () {
        const art_item = art_factory();
        art_item.selected_art(2);
        assert.deepEqual(
            {
                id: 2,
                title: "Venus de Milo",
                artist: "Unknown",
                description: "This ancient Greek statue, believed to represent Aphrodite, the Greek goddess of love and beauty, dates from between 130 and 100 BC. It was discovered on the island of Milos. It's one of the most famous ancient Greek statues, notable for its missing arms.",
                img: "images/venus_de_milo.jpg",
                rating: 9,
                category: "Ancient Greece",
                location: "Exhibhition room B",
            },
            art_item.new_art_item()[0]
        ); // Access the first item of the array
    });

    it("should test to see if Liberty Leading the People selected that the data will be retriced for Venus", function () {
        const art_item = art_factory();
        art_item.selected_art(4);
        assert.deepEqual(
            {
                id: 4,
                title: "Liberty Leading the People",
                artist: "Eugène Delacroix",
                description: "Completed in 1830, this painting commemorates the July Revolution of the same year. It depicts Liberty as a female allegorical figure leading the people forward over the bodies of the fallen, holding the French tricolor flag in one hand and a bayoneted musket in the other.",
                img: "images/liberty_leading_the_people.jpg",
                rating: 9,
                category: "French Romanticism",
                location: "Atrium",
            },
            art_item.new_art_item()[0]
        ); // Access the first item of the array
    });

    it("should track the number of French Romanticism art pieces category that have been scanned", function () {
        const art_item = art_factory();
        art_item.selected_art(4);
        assert.equal("1 out of 3 French Romanticism has been scanned", art_item.get_scanned_count_by_category());

        art_item.selected_art(7);
        assert.equal("2 out of 3 French Romanticism has been scanned", art_item.get_scanned_count_by_category());
    });

    it("should track the number of Jacques-Louis David artist art pieces that have been scanned", function () {
        const art_item = art_factory();
        art_item.selected_art(3);
        assert.equal("1 out of 3 Jacques-Louis David has been scanned", art_item.get_scanned_count_by_Artist());

        art_item.selected_art(13);
        assert.equal("2 out of 3 Jacques-Louis David has been scanned", art_item.get_scanned_count_by_Artist());
    });

    it("should add the selected art to own art collection", function () {
        const art_item = art_factory();
        art_item.selected_art(3);
        art_item.art_collection(3);
        assert.equal(1, art_item.get_user_collection().length);

        art_item.selected_art(13);
        art_item.art_collection(13);
        assert.equal(2, art_item.get_user_collection().length);
    });

    // it("should get all category items", function () {
    //     const art_item = art_factory();
    //     art_item.catorgorize_items();

    //     assert.equal(1, art_item.get_all_items_by_category());

    //     art_item.selected_art(13);
    //     art_item.art_collection(13);

    //     console.log(art_item.get_user_collection())
    //     assert.equal(2, art_item.get_user_collection().length);
    // });

    it("should get all the locations of art work with the same category of the scanned art ", function () {
        const artPiece = art_factory();
        const myScanned = [
            {
                id: 34,
                title: "The Cityscape",
                artist: "Mmakgabo Mapula Helen Sebidi",
                description: "This vibrant painting, created in the 2000s, captures the bustling energy and dynamic architecture of a South African cityscape. Through bold brushwork and expressive colors, Sebidi conveys the vibrancy and complexity of urban life in the country.",
                img: "images/the_cityscape.jpg",
                rating: 7,
                category: "South African Contemporary Art",
                location: "Exhibhition room A",
            },
        ];

        artPiece.setLocations(myScanned);
        assert.deepEqual(["Exhibhition room B", "Exhibhition room B", "Exhibhition room A", "Exhibhition room B", "Atrium", "Atrium", "Exhibhition room A"], artPiece.getLocations());
    });

    it("should get all the locations of art work with the same category of the scanned art ", function () {
        const artPiece = art_factory();
        const myScanned = [
            {
                id: 15,
                title: "Saint George and the Dragon",
                artist: "Raphael",
                description: "Created around 1506, this artwork shows the Saint George slaying a dragon to save a princess, according to the Golden Legend. The scene is set against a landscape with a town, illustrating the Saint's bravery and gallantry.",
                img: "images/saint_george.jpg",
                rating: 8,
                category: "High Renaissance",
                location: "Exhibhition room C",
            },
        ];

        artPiece.setLocations(myScanned);
        assert.deepEqual([ "Exhibhition room C", "Exhibhition room B" ], artPiece.getLocations());
    });

    it("should get the current location of the user", function () {
        const artPiece = art_factory();
        const myScanned = [
            {
                id: 34,
                title: "The Cityscape",
                artist: "Mmakgabo Mapula Helen Sebidi",
                description: "This vibrant painting, created in the 2000s, captures the bustling energy and dynamic architecture of a South African cityscape. Through bold brushwork and expressive colors, Sebidi conveys the vibrancy and complexity of urban life in the country.",
                img: "images/the_cityscape.jpg",
                rating: 7,
                category: "South African Contemporary Art",
                location: "Exhibhition room A",
            },
        ];

        artPiece.setCurrentLocation(myScanned);

        assert.equal("Exhibhition room A", artPiece.getCurrentlocation());
    });

    it("should get the current location of the user", function () {
        const artPiece = art_factory();
        const myScanned = [
            {
                id: 32,
                title: "The Silent Protest",
                artist: "Zanele Muholi",
                description: "Photographed in the 2000s, this powerful series of black-and-white images documents the lives and struggles of the LGBTQ+ community in South Africa. Through portraiture and self-representation, Muholi sheds light on the resilience and challenges faced by marginalized individuals.",
                img: "images/the_silent_protest.jpg",
                rating: 9,
                category: "South African Contemporary Art",
                location: "Atrium",
            },
        ];

        artPiece.setCurrentLocation(myScanned);

        assert.equal("Atrium", artPiece.getCurrentlocation());
    });
});
mocha.run();
