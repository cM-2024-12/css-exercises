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

function displayLibrary() {
  myLibrary.forEach(book => {
    console.log(book.info());
    // OR create DOM elements to display each book
  });
}

const theHobbit = new Book('The Hobbit', 'JR', 295, true)  // Added missing params
const standByMe = new Book('Stand By Me', 'McCluskey', 192, false)

addBookToLibrary(theHobbit)
addBookToLibrary(standByMe)

function returnLibrary(){
  myLibrary.forEach(book => {
    return book
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


// Next Step is adding Data Attributie