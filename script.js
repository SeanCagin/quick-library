"use strict";

class Book {
    
    constructor(title, author, pageCount, read) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.read = read;
        this.linkBook(this.title, this.author, this.pageCount, this.read);
    }

    linkBook(title, author, pageCount, read) {
        let classes = ["title", "author", "page-count", "read"];
        let wrapper = document.createElement("div");
        wrapper.classList.toggle("book");
        for (let i = 0; i < classes.length; i++) {
            let el = document.createElement("div");
            el.classList.toggle(classes[i]);
            el.textContent = arguments[i];
            wrapper.appendChild(el);
        }
        let readButton = document.createElement("div");
        readButton.classList.add("book-button");
        readButton.textContent = "Toggle Read";
        readButton.addEventListener( "click", (e) => {
            this.read = !this.read;
            wrapper.querySelector(".read").textContent = this.read;
        })
        let delBook = document.createElement("div");
        delBook.classList.add("book-button");
        delBook.id = "delete";
        delBook.textContent = "Remove Book";
        delBook.addEventListener("click", (e) => {
            wrapper.parentNode.removeChild(wrapper);
        });
        wrapper.appendChild(readButton); 
        wrapper.appendChild(delBook);

        bookHolder.appendChild(wrapper);
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pageCount} pages, ${read}`;
    }
}



const bookHolder = document.querySelector("body");
const addBookButton = document.querySelector(".add-book");
const bookFormHolder = document.querySelector(".book-form-holder");
const bookForm = document.querySelector(".book-form");
const submitButton = document.querySelector(".form-submit");
const closeButton = document.querySelector(".close-form");
const myLibrary = [];

addBookButton.addEventListener("click", () => {
    bookFormHolder.showModal();
});
closeButton.addEventListener("click", () => {
    bookFormHolder.close();
    bookForm.reset();
});
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (bookForm.checkValidity()) {
        let data = new FormData(bookForm);
        addBook(myLibrary, new Book(data.get("title"), data.get("author"), data.get("page-count"), data.get("read") === null ? false : true));
        bookForm.reset();
        bookFormHolder.close();
    } else {
        bookForm.reportValidity();
    }
});

function addBook(library, book) {
    library.push(book);
}