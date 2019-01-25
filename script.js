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
        for (let i = 0; i < this.drinkMakes.length; i++) {
            if (drinkParam === this.drinkMakes[i]) {
                returnSentence = `${this.name} made you this ${drinkParam}`
                // console.log(`${this.name} made you this ${drinkParam}`)
            }
            // else{console.log(`${this.name} cannot make ${drinkParam}`)

        } return returnSentence;
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

//You can change the employees in the array and where they fit
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

// Practice: Represent your Pet
// Create an object that represents your pet.
// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

const petObject = {
    name: "Fido",
    species: "dog",
    nicknames: ["Spot", "Butch", "Fluffy Buns"],
    age: 10
}


// Practice: Fast Food Ordering
// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.


const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)

    }
}

// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
const chickenComboMeal = {
    sandwichType: "grilled chicken",
    fries: true,
    drinkSize: "small"
}

const burgerComboMeal = {
    sandwichType: "burger",
    fries: true,
    drinkSize: "medium"
}

const chzburgerComboMeal = {
    sandwichType: "cheeseburger",
    fries: false,
    drinkSize: "large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(chzburgerComboMeal)
restaurant.placeOrder(burgerComboMeal)

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()
console.table(restaurant.orders)

// Challenge: Political Campaign
// Challenges are optional exercises that you should attempt only if you've completed the practice exercises and understand the concepts.

// You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

// Her congressional district (you can use yours here)
// Her platform statements for the following issues.
// -Taxes
// -Jobs
// -Infrastructure
// -Health care
// -Crime and enforcement
// URL for donation form
// Calendar of events
// Volunteer information
// -Name
// -Address
// -Email
// -Phone number
// -Availability
// -What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
// Biography
// Image gallery
// -Head shot
// -Picture of family
// -Picture of constituents
// Mission statement
// URL for registering to vote

const elizabethObject = {
    congressDistrict: "19th",
    platformStatements:
        ["Taxes are the worst", "Jobs are the best", "Infrastructure is important", "Health-care is also important"],
    donationURL: "http://givememoney.com",
    eventCalendar:
        [
            {
                activity: "Feeding the Homeless",
                date: "1/27/19",
                location: "Huntington City Mission",
                time: "8:00 am"
            },
            {
                activity: "Ribbon Cutting for NewForce",
                date: "2/08/19",
                location: "Chase Bank CoWorks Space, Mezzanine",
                time: "10:00 am"
            },
            {
                activity: "Visiting sick children",
                date: "3/05/19",
                location: "Cabell Huntington Hospital",
                time: "3:00 pm"
            }
        ],
        addEvent: function(eventObject){
            this.eventCalendar.push(eventObject);
        },
    volunteerInfo:
        [
            {
                name: "Becky",
                address: "123 First Street",
                email: "becky@email.com",
                phoneNumber: "304-456-6789",
                available: true,
                activities: ["knocking doors", "raising money", "licking boots"]
            },
            {
                name: "Charlie",
                address: "456 Ninth Street",
                email: "charlie@email.com",
                phoneNumber: "304-123-6789",
                available: true,
                activities: ["knocking doors", "raising money", "posting flyers"]
            },
            {
                name: "Harold",
                address: "999 20th street",
                email: "harold@email.com",
                phoneNumber: "304-321-9457",
                available: false,
                activities: ["writing speeches", "raising money", "rubbing elbows"]
            }
        ],
        addVolunteer: function(name, address, email, phoneNumber, available, activities){
            this.volunteerInfo.push({name: name, address: address, email: email, phoneNumber: phoneNumber, available: available, activities: activities})
        },
    biography: "Elizabeth started out as a grocery store clerk but felt she could do a better job in politics than most other politicians because she actually tells the truth",
    changeBio: function(newBio) {
        this.biography = newBio;
        console.log(this)
    },
    imageGallery:
        [
            { image: "src", caption: "Head Shot" },
            { image: "src", caption: "family" },
            { image: "src", caption: "Constituents" }
        ],
    addImage: function(newImage, text) {
        this.imageGallery.push({image: newImage, caption: text})
        },
    missionStatement: "Elizabeth will do her best to serve her constituents",
    registrationURL: "vote.org"
}


//create a new event object
const newEvent = {
    activity: "Riding Horses",
    date: "1/30/19",
    location: "Melody Farms",
    time: "11:00 am"

}

//add a new event using an object argument.
elizabethObject.addEvent(newEvent);
console.table(elizabethObject.eventCalendar);
elizabethObject.addImage("src2", "mansion");

//add a new volunteer object by assigning values to the keys defined in the function
elizabethObject.addVolunteer("Shannon", "985 Main st", "shannon@email.com", "456-896-4567", true, ["anything!"]);

//change the bio by calling the changeBio function
elizabethObject.changeBio("I decided to become a politician for the money");

console.table(elizabethObject)
// After you have defined all the objects for representing the data about Elizabeth's campaign, write a corresponding function for each one whose purpose is to change the state of the object. Then use your functions to modify the existing data.

// Things to think about.

// Am I modifying an array? Then the function argument should be added to the target array with the push() method.
// Am I modifying an object? Then I should pass both the key name to be modified, and its corresponding value.
// This challenge is for you to practice writing functions, so the more you can write, the better. It helps make neural connections in your brain at this point since you're still building your software vocabulary.

// Example:

// function addToImageGallery(newImage) {
//     ...
// }

// function changeBiography (newBiography) {
//     ...
// }

// function changePlatform (topic, newPlatformStatement) {
//     ...
// }


