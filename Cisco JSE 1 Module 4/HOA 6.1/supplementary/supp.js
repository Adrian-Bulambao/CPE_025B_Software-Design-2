let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

while (true) {

    let option = prompt(`Contact Manager
Type one of the following:
show   - Display a contact by index
all    - Display all contacts
add    - Add a new contact
search - Search contact by name
quit   - Exit program`);

    // If user presses Cancel
    if (option === null) {
        console.log("Returning to menu.");
        continue;
    }

    option = option.toLowerCase();

    // EXIT PROGRAM
    if (option === "quit") {
        console.log("Program ended.");
        break;
    }

    // SHOW SPECIFIC CONTACT
    else if (option === "show") {

        let index = prompt("Enter contact index (0 to " + (contacts.length - 1) + "):");

        if (index === null) continue;

        index = Number(index);

        if (!isNaN(index) && index >= 0 && index < contacts.length) {
            console.log("Contact found:");
            console.log(
                contacts[index].name + " / " +
                contacts[index].phone + " / " +
                contacts[index].email
            );
        } else {
            console.log("Error: Invalid index.");
        }
    }

    // SHOW ALL CONTACTS
    else if (option === "all") {

        console.log("All contacts:");
        for (let i = 0; i < contacts.length; i++) {
            console.log(
                i + ": " +
                contacts[i].name + " / " +
                contacts[i].phone + " / " +
                contacts[i].email
            );
        }
    }

    // ADD NEW CONTACT
    else if (option === "add") {

        let name = prompt("Enter name:");
        if (name === null || name.trim() === "") {
            console.log("Error: Name is required.");
            continue;
        }

        let phone = prompt("Enter phone:");
        if (phone === null || phone.trim() === "") {
            console.log("Error: Phone is required.");
            continue;
        }

        let email = prompt("Enter email:");
        if (email === null || email.trim() === "") {
            console.log("Error: Email is required.");
            continue;
        }

        contacts.push({
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim()
        });

        console.log("Contact added successfully.");
    }

    // SEARCH CONTACT
    else if (option === "search") {

        let searchName = prompt("Enter name to search:");
        if (searchName === null || searchName.trim() === "") {
            continue;
        }

        let found = false;

        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].name.toLowerCase() === searchName.toLowerCase()) {
                console.log("Contact found:");
                console.log(
                    contacts[i].name + " / " +
                    contacts[i].phone + " / " +
                    contacts[i].email
                );
                found = true;
                break;
            }
        }

        if (!found) {
            alert("Contact not found");
        }
    }

    // INVALID OPTION
    else {
        console.log("Invalid option. Returning to menu...");
    }
}