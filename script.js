let myLibrary = [];

function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return (title + ' by ' + author + ', ' + pages + ' pages' + ', ' + read)
    }
}

function addBookToLibrary() {

}

function bookRemoval() {

}


// const book1 = new Books('Invincible', 'Robert Kirkman', 400, "I've read it!");
// const book2 = new Books('Astrophysics for People in a Hurry', "Neil de'Grasse Tyson", 244, 'Also read it!');

// console.log(book1.info());
// console.log(book2.info());


// Books.prototype = Object.create(Books.prototype);
// const code = new Books('Code', 'Petzold', 393, 'Read some of it.');
// console.log(code.info()); 