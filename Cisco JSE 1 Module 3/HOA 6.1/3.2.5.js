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

// write your code here
let new_hire_name = prompt("Enter the name of the new hire:", "John Doe")
let new_hire_phone = prompt("Enter the phone number of the new hire", "0123456789")
let new_hire_email = prompt("Enter the email of the new hire", "newhire@email.com")

let newHire = {
    name: new_hire_name,
    phone: new_hire_phone,
    email: new_hire_email
};

contacts.push(newHire)


let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);