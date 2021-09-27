// Event listener buttons for create new book, add new book, and remove pop up.
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');


class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value; 
        this.author = form.author.value; 
        this.pages = form.pages.value + 'pg'; 
        this.read = form.read.checked; 
    }
}

let myLibrary = []; // Add a few book objects to array to test display
let newBook;

// Takes user input and store new book object into array
function addBookToLibrary() {
    event.preventDefault();
    popUpForm.style.display = 'none';

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
    form.reset();
}

// Loops through array and displays each book in own card.
function render() {
    const display = document.getElementById('Library-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));
    
    //for loop to iterate through myLibrary
    for (let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}

// Creates DOM element for render()
function createBook(item) {
    const library = document.querySelector('#Library-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');


    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv)
    
    authDiv.textContent = item.author;
    authDiv.classList.add('author');
    bookDiv.appendChild(authDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn');
    bookDiv.appendChild(readBtn);
    if (item === false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#e04f63';
    } else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63';
    }

    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);

    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1);
        // setData()
        render();
    });

    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        // setData()
        render();
    });
};