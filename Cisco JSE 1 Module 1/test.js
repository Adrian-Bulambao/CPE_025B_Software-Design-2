let Team = [{
Name: "Leo Brooks ",
Role: "Designer ",
Skills: ["UI", "UX", "Figma"],
Available: true
}, {
Name: "Sasha Ivana",
Role: "Developer",
Skills: ["HTML", "CSS", "JS"],
Available: false
}, {
Name: "Jordan Lee",
Role: "Manager",
Skills: ["Planning", "Agile"],
Available: true
}];

let newHire = {
    Name: "Casey Moore",
    Role: "QA Engineer",
    Skills: ["Testing", "Debugging"],
    Available: true
};

Team.push(newHire);

console.log("Name; ",Team[0].Name,", Role: ", Team[0].Role, ", Skills: ", Team[0].Skills,", Available: ", Team[0].Available )

console.log("Name; ",Team[1].Name,", Role: ", Team[1].Role, ", Skills: ", Team[1].Skills,", Available: ", Team[1].Available )

console.log("Name; ",Team[2].Name,", Role: ", Team[2].Role, ", Skills: ", Team[2].Skills,", Available: ", Team[2].Available )
console.log("Name; ",Team[3].Name,", Role: ", Team[3].Role, ", Skills: ", Team[3].Skills,", Available: ", Team[3].Available )