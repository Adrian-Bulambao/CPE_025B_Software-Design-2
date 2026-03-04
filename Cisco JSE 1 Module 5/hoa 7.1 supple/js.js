let contacts = [
    {
        name: "Linus Torvalds",
        role: "System Admin",
        skills: ["Linux", "Git", "Kernels"],
        availability: true
    },
    {
        name: "Ada Lovelace",
        role: "Logic Analyst",
        skills: ["Algorithms", "Math", "Analytics"],
        availability: false
    },
    {
        name: "Alan Turing",
        role: "Cryptographer",
        skills: ["Logic", "Enigma", "Security"],
        availability: true
    }
];
function showContact(index) {
    if (isNaN(index) || index < 0 || index >= contacts.length) return alert("Invalid index!");
    let c = contacts[index];
    alert(`Name: ${c.name}\nRole: ${c.role}\nFirst Skill: ${c.skills[0]}`);
}

function showAllContacts() {
    let output = "";
    for (let c of contacts) output += `${c.name}\n`;
    alert("All contacts:\n" + output);
}

function addContact() {
    let name = prompt("Enter Name:");
    let role = prompt("Enter Role:");
    let skillsInput = prompt("Enter Skills (separate by commas):");
    if (!name || !role || !skillsInput) return alert("Error: All fields are required!");
    let skillsArray = skillsInput.split(",").map(s => s.trim()).filter(s => s);
    contacts.push({ name: name, role: role, skills: skillsArray, availability: true });
    alert(`${name} added successfully!`);
}

function searchContact() {
    let searchName = prompt("Enter Name to search:");
    if (!searchName) return;
    let found = false;
    for (let c of contacts) {
        if (c.name.toLowerCase() === searchName.toLowerCase()) {
            let status = c.availability ? "Available" : "Busy";
            alert(`Role: ${c.role}\nStatus: ${status}`);
            found = true;
            break;
        }
    }
    if (!found) alert("Contact not found!");
}

while (true) {
    let action = prompt("Global Technical Support Directory:\nOptions: show, all, add, search, quit\nEnter an action:");
    if (!action) continue;
    action = action.toLowerCase();
    if (action === "quit") {
        alert("Goodbye!");
        break;
    } else if (action === "show") {
        let index = parseInt(prompt(`Enter contact index (0-${contacts.length - 1}):`));
        showContact(index);
    } else if (action === "all") {
        showAllContacts();
    } else if (action === "add") {
        addContact();
    } else if (action === "search") {
        searchContact();
    } else {
        alert("Invalid action! Please enter show, all, add, search, or quit.");
    }
}