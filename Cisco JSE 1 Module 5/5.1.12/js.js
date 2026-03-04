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

// Show a single contact
function showContact(list, index) {
    if (!(list instanceof Array)) return alert("Error: contacts must be an array.");
    if (typeof index !== "number" || index < 0 || index >= list.length) return alert("Error: invalid index.");

    const contact = list[index];
    alert(`Contact #${index}\nName: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
}

// Show all contacts
function showAllContacts(list) {
    if (!(list instanceof Array)) return alert("Error: contacts must be an array.");
    if (list.length === 0) return alert("No contacts available.");

    let output = "";
    list.forEach((c, i) => {
        output += `Contact #${i}\nName: ${c.name}\nPhone: ${c.phone}\nEmail: ${c.email}\n\n`;
    });
    alert(output);
}

// Add a new contact
function addNewContact(list) {
    if (!(list instanceof Array)) return alert("Error: contacts must be an array.");

    let name = prompt("Enter name:");
    let phone = prompt("Enter phone:");
    let email = prompt("Enter email:");

    if (!name || !phone || !email) return alert("Error: missing contact data.");

    list.push({ name, phone, email });
    alert("New contact added successfully.");
}

// Sort contacts by a field
function sortContacts(list, field) {
    if (!(list instanceof Array)) return alert("Error: contacts must be an array.");
    if (!["name", "phone", "email"].includes(field)) return alert("Error: invalid field.");

    list.sort((a, b) => {
        let valA = a[field].toLowerCase();
        let valB = b[field].toLowerCase();
        if (valA > valB) return 1;
        if (valA < valB) return -1;
        return 0;
    });

    alert(`Contacts sorted by ${field}.`);
}

// Interactive menu loop
while (true) {
    let action = prompt(
        "Contact Manager Menu:\n" +
        "1: Show all contacts\n" +
        "2: Show a contact by index\n" +
        "3: Add a new contact\n" +
        "4: Sort contacts\n" +
        "5: Exit"
    );

    if (action === "1") {
        showAllContacts(contacts);
    } else if (action === "2") {
        let index = parseInt(prompt("Enter contact index:"));
        showContact(contacts, index);
    } else if (action === "3") {
        addNewContact(contacts);
    } else if (action === "4") {
        let field = prompt("Sort by which field? (name, phone, email)");
        sortContacts(contacts, field);
    } else if (action === "5") {
        alert("Exiting Contact Manager. Goodbye!");
        break;
    } else {
        alert("Invalid choice! Please select a valid option.");
    }
}