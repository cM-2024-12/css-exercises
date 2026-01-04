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

Book.prototype.toggleRead = function() { 
    this.read = !this.read; // toggles other value? 
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}


const theHobbit = new Book('The Hobbit', 'JR', 295, true)  // Added missing params
const standByMe = new Book('Stand By Me', 'McCluskey', 192, false)

const bookContainer = document.querySelector("div.book-container")
const closeButton = document.querySelector("dialog button")
const dialog = document.querySelector("dialog");
const addBook = document.querySelector("#new-book")

function returnLibrary(){
  bookContainer.innerHTML = '' // clear container each time
  myLibrary.forEach(book => {
    const bookInfo = `${book.title}, written by ${book.author}. ${book.pages}. ${book.read}`
    const bookNode = document.createElement("div");
    bookNode.textContent = bookInfo
    bookNode.dataset.bookId = book.id

    const deleteBtn = document.createElement("button")
    deleteBtn.className = "delete-btn"
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", (e) => {
      console.log(e.target)
      console.log(e.target.parentElement)
      const bookId = e.target.parentElement.dataset.bookId
      const index = myLibrary.findIndex(book => book.id === bookId)
      myLibrary.splice(index, 1);
      returnLibrary();
    }); 

    const toggleBtn = document.createElement("button")
    toggleBtn.className = "toggle-btn"
    toggleBtn.textContent = "Read"
    toggleBtn.addEventListener("click", (e) => {
      const bookId = e.target.parentElement.dataset.bookId
      const book = myLibrary.find(book => book.id === bookId)
      book.toggleRead();
      returnLibrary();
    })

    bookNode.appendChild(deleteBtn)
    bookNode.appendChild(toggleBtn)
    bookContainer.appendChild(bookNode)
  })
}

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

// add JS Form Validation
const allInputs = document.querySelectorAll("input")
console.log(allInputs)
allInputs.forEach(input => {
  input.addEventListener("invalid", () => {
    if (input.validity.valueMissing) {
      input.setCustomValidity("Throw that shit in there!")
    };
  });
  input.addEventListener("input", () => {
    input.setCustomValidity(""); // Clear custom message when user starts typing
  });
});

addBookToLibrary(theHobbit);
addBookToLibrary(standByMe);
returnLibrary();