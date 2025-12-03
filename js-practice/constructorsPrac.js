const playerOne = {
    name: "tim",
    marker: "X"
  };
  
  const playerTwo = {
    name: "jenn",
    marker: "O"
  };

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }

function Book(title, author, pages, read){
    if (!new.target){
        throw Error("Must use new")
    }
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        const readStatus = this.read ? "already read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}

const theHobbit = new Book("The Hobbit", "JR Tolkein", 100, false)
console.log(theHobbit.info())

Player.prototype.sayHello = function(){
    console.log("Hello, I'm a player");
}

console.log(playerOne.hasOwnProperty('valueOf')); // false
console.log(Object.prototype.hasOwnProperty('valueOf')); // true