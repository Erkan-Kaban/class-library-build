// Created class Book with constructor and getters
// Three methods that get toggle and addRating
class Book {
    constructor(author, title, pages, ratings = [], isCheckedOut = false) {
        this._author = author;
        this._title = title;
        this._pages = pages;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }
    get author() {
        return this._author;
    }
    get title() {
        return this._title;
    }
    get pages() {
        return this._pages;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    getAverageRating() {
        let numberOfRatings = this._ratings.length;
        let addedRating = 0;
        for (let rating of this._ratings) {
            addedRating += rating;
        }
        let averageRating = addedRating / numberOfRatings;
        return averageRating;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(rating) {
        this._ratings.push(rating);
    }
}

// Created class Movie that extends Book
// with constructor and getters
// and a method that gets the director and runTime
class Movie extends Book {
    constructor(director, title, runTime, isCheckedOut, ratings) {
        super(title, ratings, isCheckedOut);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

// Created class Cd that extends Book
class Cd extends Book {
    constructor(artist, title, isCheckedOut, ratings, songs) {
        super(title, ratings, isCheckedOut);
        this._artist = artist;
        this._songs = songs;
    }
}

// Created a new book with the constructor
// and used the methods to toggle the checkout status
const historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
);

// Used the toggleCheckOutStatus method to toggle the checkout status
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)

// Added ratings to the book
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

// Used the getAverageRating method to get the average rating
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116)

// Used the toggleCheckOutStatus method to toggle the checkout status
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)

// Added ratings to the movie
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

// Used the getAverageRating method to get the average rating
console.log(speed.getAverageRating())