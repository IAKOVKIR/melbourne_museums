// Import the Museum class so we can make new Museum objects.
import Museum from "./Museum.js";

// Create new Museum object
const melbourneMuseum = new Museum(
    "museum01",
    "Melbourne Museum",
    "Carlton",
    "11 Nicholson St, Carlton VIC 3053",
    "+61 3 8341 7777",
    "mvbookings@museum.vic.gov.au",
    true,
    1854,
    "./assets/images/melb_museum.jpeg"
);

// Create new Museum object
const immigrationMuseum = new Museum(
    "museum02",
    "Immigration Museum",
    "Melbourne CBD",
    "400 Flinders St, Melbourne VIC 3000",
    "+61 3 8341 7777",
    "mvbookings@museum.vic.gov.au",
    false,
    1998,
    "./assets/images/immi_museum.jpg"
);

// Create new Museum object
const scienceworks = new Museum(
    "museum03",
    "Scienceworks",
    "Spotswood",
    "2 Booker St, Spotswood VIC 3015",
    "+61 3 8341 7777",
    "mvbookings@museum.vic.gov.au",
    false,
    1992,
    "./assets/images/scienceworks.jpeg"
);

// Create new Museum object
const nationalGalleryOfVictoria = new Museum(
    "museum04",
    "National Gallery of Victoria",
    "Melbourne CBD",
    "180 St Kilda Rd, Melbourne VIC 3006",
    "+61 3 8341 7777",
    "mvbookings@museum.vic.gov.au",
    true,
    1861,
    "./assets/images/national_museum.jpeg"
);

// Add Museum objects into an array
const museumObjectArray = [melbourneMuseum, immigrationMuseum, scienceworks, nationalGalleryOfVictoria];

// Export the array to be used in other files
export default museumObjectArray;
