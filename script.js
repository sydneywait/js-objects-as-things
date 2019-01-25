// 1. Build three objects. Each one should represent an employee at the coffee shop.
// 2. Each employee object should have the following properties:
// - a name
// - a startDate
// - a jobTitle
// - a payRate
// - a favoriteDrink
// - an array of drinks they know how to make

const joshObject = {
    name: "Josh",
    startDate: "Nov 1 2017",
    jobTitle: "Barista",
    payRate: "$15/hr",
    favoriteDrink: "Mocha with soy milk",
    drinkMakes: ["americano", "cappucino", "espresso", "latte"],
    makeDrink: function makeDrink(drinkParam) {
        let returnSentence = `Sorry, ${this.name} can't make a ${drinkParam}`
        for(let i = 0; i<this.drinkMakes.length; i++){
        if(drinkParam === this.drinkMakes[i]){
            returnSentence = `${this.name} made you this ${drinkParam}`
        // console.log(`${this.name} made you this ${drinkParam}`)
    }
        // else{console.log(`${this.name} cannot make ${drinkParam}`)
            
        }return returnSentence;
        }
    }
    // LearnNewDrink: function newDrink(newDrinkParam) {
    //     this.drinkMakes.push(newDrinkParam)

    // },
    // changeName: function newName(newNameParam){
    //     this.name = newNameParam
    // }
let catchSentence1 = joshObject.makeDrink("cappucino");
console.log(catchSentence1);

let catchSentence2 = joshObject.makeDrink("macchiato");
console.log(catchSentence2);

const kimObject = {
    name: "Kim",
    startDate: "Jan 1 2017",
    jobTitle: "Barista",
    payRate: "$18/hr",
    favoriteDrink: "Mocha with soy milk",
    drinkMakes: ["americano", "cappucino", "espresso", "latte", "smoothies"],
    makeDrink: function makeDrink(drinkParam) {
        console.log(`${this.name} made you this ${drinkParam}`)
    }
}
const jordanObject = {
    name: "Jordan",
    startDate: "Jul 1 2017",
    jobTitle: "Barista",
    payRate: "$20/hr",
    favoriteDrink: "Mocha with soy milk",
    drinkMakes: ["americano", "cappucino"],
    makeDrink: function makeDrink(drinkParam) {
        console.log(`${this.name} made you this ${drinkParam}`)
    }
}






// 2. Build another object called coffeeShopStaff
// 3. This object should have two properties:
// - a property of fullTime that holds an array of full time staff members
// - a property of partTime that holds an array of part time staff members
// - Put two of your employee objects from steps 1 & 2 into the part time array. Put one of them in the full time array.
const coffeeShopStaff = {
    fulltime: [jordanObject],
    partTime: [joshObject, kimObject]
}
console.log("this is the first array", coffeeShopStaff);

coffeeShopStaff.fulltime = [jordanObject, kimObject];
coffeeShopStaff.partTime = [joshObject];

console.log(coffeeShopStaff);

// 1. Remember your employee objects from up there? Give one of them a method called makeCoffeDrink
// 2. This method should accept a parameter of drink and return a string of "Here's your [drink]!" 
// 3. Call the method and pass in any drink (string) you want
// 4. Call the method (be sure to catch the returned string in a variable!)
// Bous: If you have time, refactor your method so that it checks to see if the employee knows how to make the drink (i.e. if it's in the array of drinks they know how to make). If they do, you should return the string from step 2. If not, you should return a string that says "No can do!"








// A simple representation of an expense resource, in code, would look like this.
const expense = {
    dateCreated: "01/01/2017",
    location: "Bob's Burgers",
    dollarAmount: "14.34",
    purpose: "Lunch with very important client",
    code: "1001A"
}

// Here's a representation of a person who is an employee as a JavaScript object.
const employee = {
    firstName: "Michael",
    lastName: "Tambornino",
    role: "Sales Rep",
    accountNumber: "1-8349058340"
}

//  an object's state can change, i.e. property values can be reassigned.
employee.role = "Sales Manager"

// Here's a representation of an expense report resource. It's a collection of expenses, with a timestamp of when the report was generated.

const expenseReport = {
    dateCreated: "02/01/2017",
    expenses: [
        {
            amount: 14.34,
            dateCreated: "01/01/2017",
            vendor: "Bob's Burgers",
            code: "1001A"
        },
        {
            amount: 51.03,
            dateCreated: "01/03/2017",
            vendor: "Sunoco",
            code: "2213D"
        },
        {
            amount: 7.22,
            dateCreated: "01/07/2017",
            vendor: "Taco Bell",
            code: "1001A"
        }
    ]
}

// Functions can be placed inside of objects. These are called methods instead of properties.

// They are just regular functions, but software developers call them methods within the context of an object because they are defining behaviors of a specific thing.

// const rufusTheDog = {
//     age: 4,                 // Property
//     species: "Dalmatian",   // Property
//     bark: function () {     // Method
//         window.alert("WOOF!")
//     }
// }

// // call the function
// rufusTheDog.bark()

// const rufusTheDog = {
//     age: 4,
//     species: "Dalmatian",
//     bark: function (something) {
//         window.alert(`Rufus barks 'WOOF!' at ${something}`)
//     }
// }

// rufusTheDog.bark("mailman")
// rufusTheDog.bark("leaf")
// rufusTheDog.bark("child")

