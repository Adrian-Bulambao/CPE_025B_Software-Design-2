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

let choice;

while (true) {

    choice = prompt(`Choose an option:
1 - Show first contact
2 - Show last contact
3 - Show all contacts
4 - Add new contact
5 - Quit`);

    if (choice === "1") {

        let firstContact = contacts[0];
        console.log("First contact:");
        console.log(firstContact.name + " / " + firstContact.phone + " / " + firstContact.email);

    } else if (choice === "2") {

        let lastContact = contacts[contacts.length - 1];
        console.log("Last contact:");
        console.log(lastContact.name + " / " + lastContact.phone + " / " + lastContact.email);

    } else if (choice === "3") {

        console.log("All contacts:");
        for (let i = 0; i < contacts.length; i++) {
            console.log(
                contacts[i].name + " / " +
                contacts[i].phone + " / " +
                contacts[i].email
            );
        }

    } else if (choice === "4") {

        let name = prompt("Enter name:");
        let phone = prompt("Enter phone:");
        let email = prompt("Enter email:");

        if (name && phone && email) {
            contacts.push({
                name: name,
                phone: phone,
                email: email
            });
            console.log("New contact added successfully.");
        } else {
            console.log("Error: All fields are required. Contact not added.");
        }

    } else if (choice === "5") {

        console.log("Program ended.");
        break;

    } else {

        console.log("Invalid option. Please choose 1-5.");
    }
}