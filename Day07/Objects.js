/**
 * Activity 1: Object Creation and Access
 * Task: 1 create a object book with properties like tile author ,year and console.
 * Task: 2 Access the and log the title and author.
 */

const book = {
    title: "Girl in Room 105",
    author: "Chetan Bhagat",
    year: 2018
}

// Accessing data using dot notation
console.log("Book title:", book.title); 

// Accessing data using bracket notation (useful for dynamic keys)
const key = "author";
console.log("Book author:", book[key]);

/**
 * Activity 2: Object Methods
 * Task: 3 add method that returns a string with book title and author and log.
 * Task: 4 add method that takes paramete year and updates the book's year property and log updated object.
 */

// adding method in book object
book.getBookDetails = function(){
    return `the Book ${this.title} by ${this.author} published in ${this.year}`;
}

console.log(book.getBookDetails());

// adding method that update year
book.bookYearUpdate = function(year){
    this.year = year;
}

book.bookYearUpdate(2019);
console.log("After updating book published year Updated Object:", book);


/**
 * Activity 3: Nasted Objects
 * Task: 5 create a nested object representing a library with properties like name and books (array of book objects) and log libraray object.
 * Task: 6 console library name and books collection.
 */


const Library = {
    name: "Aspirant Library",
    books: [
        {
            title: "Girl in Room 105",
            author: "Chetan Bhagat",
            year: 2018
        },
        {
            title: "The Power of your subconscious mind",
            author: "Joseph Murphy",
            year: 1963
        },
        {
            title: "Do Epic shit",
            author: "Ankoor Warikoo",
            year: 2021
        },
        {
            title: "Think and grow Rich",
            author: "Napoleon Hill",
            year: 1937
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            year: 1988
        },
    ]
}

// console the libray
console.log("Library Name:", Library.name, "books collection", Library.books);


/**
 * Activity 4: The `this` keyword
 * Task: 7 add method to book object that used `this` keyword to return a string with book's title and year and log result of calling this method. 
 */

// adding method on book object that return book'title and publish year
book.getTitleAndPublishYearDetail = function(){
    return `Book title: ${this.title} published year: ${this.year}`;
}

// calling method
console.log(book.getTitleAndPublishYearDetail());

/**
 * Activity 5: Object Iteration
 * Task: 8 use `for..in` loop to iterate over the properties of the book object and each property and value.
 * Task: 9 use `Object.keys` and `object.values` method to log all the key and value of the book object.
 */

for (const key in book) {
    if(typeof book[key] !=='function'){
        console.log(`Key is ${key} value of this key : ${book[key]}`);
    }
}

const keys = Object.keys(book)
console.log('Book Object All keys:', keys) // array of keys

const values = Object.values(book);
console.log('Book Object All Values:',values)// array of values