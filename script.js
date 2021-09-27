// Event listener buttons for create new book, add new book, and remove pop up.
const addBtn = document.querySelector('addBtn');
addBtn.addEventListener('click', addBookToLibrary());

const newBookBtn = document.querySelector('newBtn');
newBookBtn.addEventListener('click', popUpForm.style.display = 'block');

const popUpForm = document.getElementById('form');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', popUpForm.style.display = 'none');



let myLibrary = []; // Add a few book objects to array to test display
let newBook;

class Book {
    constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.info = function() {
    //     return (title + ' by ' + author + ', ' + pages + ' pages' + ', ' + read)
    }
}

// Takes user input and store new book object into array
function addBookToLibrary() {
    event.preventDefault();
    popUpForm.style.display = 'none';

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
    FormData.reset();
}

// Remove book button
function bookRemoval() {

}

// Creates DOM element for render()
function createBook() {

}


// Loops through array and displays each book in own card.
function render() {
    const display = document.getElementById('Library-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));
    
    //for loop to iterate through myLibrary
    for (let i = 0; i < myLibrary; i++) {
        createBook(myLibrary[i]);
        
    }
}


//Book DOM elements for render()











// const book1 = new Books('Invincible', 'Robert Kirkman', 400, "I've read it!");
// const book2 = new Books('Astrophysics for People in a Hurry', "Neil de'Grasse Tyson", 244, 'Also read it!');

// console.log(book1.info());
// console.log(book2.info());


// Books.prototype = Object.create(Books.prototype);
// const code = new Books('Code', 'Petzold', 393, 'Read some of it.');
// console.log(code.info()); 