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

let choice = prompt(`What do you want to do? 
    1 - See First Contact 
    2 - See Last Contact 
    3 - Add New Contact`);

if (choice == 1) {
    let firstContact = contacts[0];
    console.log("First contact:");
    console.log(firstContact.name + " / " + firstContact.phone + " / " + firstContact.email);

} else if (choice == 2) {
    let lastContact = contacts[contacts.length - 1];
    console.log("Last contact:");
    console.log(lastContact.name + " / " + lastContact.phone + " / " + lastContact.email);

} else if (choice == 3) {
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

} else {
    console.log("Option not in choices.");
}