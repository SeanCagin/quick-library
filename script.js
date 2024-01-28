"use strict";

function toggleRead() {

}

function Book(title, author, pageCount, read) {
    function linkBook(title, author, pageCount, read) {
        let classes = ["title", "author", "page-count", "read"];
        let wrapper = document.createElement("div");
        wrapper.classList.toggle("book");
        for (let i = 0; i < arguments.length; i++) {
            let el = document.createElement("div");
            el.classList.toggle(classes[i]);
            el.textContent = arguments[i];
            wrapper.appendChild(el);
        }
        let readButton = document.createElement("div");
        readButton.classList.add("read-button");
        readButton.textContent = "Toggle Read";
        readButton.addEventListener( "click", (e) => {
            this.read = !this.read;
            wrapper.querySelector(".read").textContent = this.read;
        })
        wrapper.appendChild(readButton); 

        return wrapper;
    }
    
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    let boundLinkBook = linkBook.bind(this);
    this.htmlEl = boundLinkBook(...arguments);
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pageCount} pages, ${read}`;
} 

const bookHolder = document.querySelector("body");
const myLibrary = [];

for (let i = 0; i < 2; i++) {
    let newBook = new Book(i, i, i, true);
    bookHolder.appendChild(newBook.htmlEl);
    myLibrary.push(newBook);
}

function addBook(library, book) {
    library.push(book);
}