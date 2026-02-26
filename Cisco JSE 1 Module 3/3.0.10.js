
console.log("Exercise 1: Fill in the missing operators to get the expected result (replace the underscore symbol with the appropriate operator):")
console.log("2 * 3 + 1 = ", 2 * 3 + 1);      // expected 7
console.log("2 ** 4 = ", 2 ** 4);       // expected 16
console.log("5 * 1 = ", 5 * 1);       // expected 5
console.log("8 ** 2 - 5 ** 2 = ", 8 ** 2 - 5 ** 2); // expected 39 
console.log("")
console.log("Exercise 2: Fill in the missing comparison operators in that such a way that all expressions result in true (replace the underscore symbol with the appropriate operator)")
console.log("4 * 5 == 20: ", 4 * 5 == 20);
console.log("6 * 5 == '30': ", 6 * 5 == "30");
console.log("-17 != 0: ", -17 != 0);
console.log("25 > 1: ", 25 > 1);
console.log("2 + 2 * 2 != 4: ", 2 + 2 * 2 != 4); 
console.log("")
console.log("Exercise 3: Fill in the missing comparison operators in that such a way that all expressions result in true (replace the underscore symbol with the appropriate operator):")
console.log("true != false: ", true != false);
console.log("false == false:", false == false);
console.log("false == false == true: ", false == false == true);
console.log("true != false != false && true: ",true != false != false && true); 


let width = prompt("Volume of the box, enter width", 0);
let height = prompt("Volume of the box, enter height", 0);
let length = prompt("Volume of the box, enter length", 0);
let volume = width * height * length;
alert(`Calculated box volume is ${volume}`);