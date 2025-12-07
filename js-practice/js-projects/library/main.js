const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("Must use new")
    }
    this.id = crypto.randomUUID()
    this.title = title 
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      const readStatus = this.read ? "already read" : "not read yet";
      return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

// function displayLibrary() {
//   myLibrary.forEach(book => {
//     console.log(book.info());
//     // OR create DOM elements to display each book
//   });
// }

const theHobbit = new Book('The Hobbit', 'JR', 295, true)  // Added missing params
const standByMe = new Book('Stand By Me', 'McCluskey', 192, false)



const bookContainer = document.querySelector("div.book-container")

function returnLibrary(){
  bookContainer.innerHtml = '' // clear container each time
  myLibrary.forEach(book => {
    const bookInfo = `${book.title}, written by ${book.author}. ${book.pages}. ${book.read}`
    const bookNode = document.createElement("div");
    bookNode.textContent = bookInfo
    bookContainer.appendChild(bookNode)
  })
}


const closeButton = document.querySelector("dialog button")
const dialog = document.querySelector("dialog");
const addBook = document.querySelector("#new-book");

// "Show the dialog" button opens the dialog modally
addBook.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
})

const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("book-read").value === "true";
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  form.reset();
  dialog.close();
  returnLibrary();
})

addBookToLibrary(theHobbit);
addBookToLibrary(standByMe);
returnLibrary();