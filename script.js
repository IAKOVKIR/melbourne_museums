
import museumObjectArray from "./components/data.js";

/**
 * Add event listener to the lid-toggle button.
 */
const lidToggle = function (event, button, newArg) {
    console.log(event);
    console.log(newArg);

    // Find the current backpack object in backpackObjectArray
    let museumObject = museumObjectArray.find(
        ({ id }) => id === button.parentElement.id
    );

    // Toggle isOpen status
    museumObject.isOpen === true
        ? (museumObject.isOpen = false)
        : (museumObject.isOpen = true);

    // Toggle button text
    button.innerText === "Open Museum"
        ? (button.innerText = "Close Museum")
        : (button.innerText = "Open Museum");

    // Set visible property status text
    let status = button.parentElement.querySelector(".backpack__lid span");
    status.innerText === "closed"
        ? (status.innerText = "open")
        : (status.innerText = "closed");
};

const backpackList = museumObjectArray.map((museum) => {
    let backpackArticle = document.createElement("article");
    backpackArticle.classList.add("museum");
    backpackArticle.setAttribute("id", museum.id);

    backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${museum.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${museum.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Suburb:<span> ${
        museum.suburb
    }l</span></li>
      <li class="feature backpack__color">Address:<span> ${
        museum.address
    }</span></li>
      <li class="feature backpack__age">Phone:<span> ${museum.phoneNumber}</span></li>
      <li class="feature backpack__pockets">Email:<span> ${
        museum.email
    }</span></li>
      <li class="feature backpack__lid">Status: <span>${
        museum.isOpen ? "open" : "closed"
    }</span></li>
    </ul>
    <button class="lid-toggle">Open Museum</button>
  `;

    // Find the two list items with the .backpack__strap class
    let strapLengths = backpackArticle.querySelectorAll(".backpack__strap");

    let button = backpackArticle.querySelector(".lid-toggle");
    let newArg = "The argument I want to pass to the callback function!";

    // Add event listener
    button.addEventListener("click", (event) => {
        lidToggle(event, button, newArg);
    });

    return backpackArticle;
});

// Append each backpack item to the main
const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
    main.append(backpack);
});
