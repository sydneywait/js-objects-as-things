
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

const rufusTheDog = {
    age: 4,                 // Property
    species: "Dalmatian",   // Property
    bark: function () {     // Method
        window.alert("WOOF!")
    }
}

// call the function
rufusTheDog.bark()

const rufusTheDog = {
    age: 4,
    species: "Dalmatian",
    bark: function (something) {
        window.alert(`Rufus barks 'WOOF!' at ${something}`)
    }
}

rufusTheDog.bark("mailman")
rufusTheDog.bark("leaf")
rufusTheDog.bark("child")

