// Set up the Museum class
class Museum {
    constructor(
        id,
        name,
        suburb,
        address,
        phoneNumber,
        email,
        isOpen,
        yearBuild,
        image
    ) {
        this.id = id;
        this.name = name;
        this.suburb = suburb;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.isOpen = isOpen;
        this.yearBuild = yearBuild;
        this.image = image;
    }
    opened(openStatus) {
        this.isOpen = openStatus;
    }
}

// Export the Museum class to be used by other files
export default Museum;
