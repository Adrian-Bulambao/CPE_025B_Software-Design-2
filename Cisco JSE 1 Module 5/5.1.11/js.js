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


function showContact(list,index){
    if (!(list instanceof Array)) {
        console.log("Error: contacts must be an array.");
        return;
    }
    if (typeof index !== "number" || index < 0 || index >= contacts.length) {
        console.log("Error: invalid index.");
        return;
    }
    console.log("Name:", list[index].name);
    console.log("Phone:", list[index].phone);
    console.log("Email:", list[index].email);
}

function showAllContacts(list){
    if (!(list instanceof Array)) {
        console.log("Error: contacts must be an array.");
        return;
    }
    list.forEach(function(contact, index) {
        console.log(`Contact #${index}`);
        console.log("Name:", contact.name);
        console.log("Phone:", contact.phone);
        console.log("Email:", contact.email);
    });
}

function addNewContact(list, name, phone, email) {

    if (!(list instanceof Array)) {
        console.log("Error: contacts must be an array.");
        return;
    }
    

    if (!name || !phone || !email) {
        console.log("Error: missing contact data.");
        return;
    }
    
    

    list.push({
        name: name,
        phone: phone,
        email: email
    });

    console.log("New contact added successfully.");
}


let choice = prompt(
    "Welcome to Contact Manager!\n" +
    "1: Show a contact by index\n" +
    "2: Show all contacts\n" +
    "3: Add a new contact"
);

if (choice === "1") {
    let index = parseInt(prompt("Enter contact index:"));
    showContact(contacts, index);
} else if (choice === "2") {
    showAllContacts(contacts);
} else if (choice === "3") {
    let name1 = prompt("Enter name:");
    let phone1 = prompt("Enter phone:");
    let email1 = prompt("Enter email:");
    addNewContact(contacts, name1, phone1, email1);
} else {
    alert("Invalid choice!");
}
