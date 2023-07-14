let myLibrary = []; //array for my books

function Book(author, title, pages, read) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) { 
    let book = myLibrary[i];
    let readStatus = book.read ? "True" : "False"; //capitalize the first letter of true or false
    let bookEl = document.createElement("div"); 
    bookEl.innerHTML = `
    <p> Title: ${book.title}</p>      
    <p> Author: ${book.author}</p>
    <p> Pages: ${book.pages}</p>
    <p> Read: ${readStatus}</p>
    <button class="remove-btn">Remove</button>
    `;
    libraryEl.appendChild(bookEl);
  }
}


function addBookToLibrary() {
  let author = document.querySelector("#author").value;
  let title = document.querySelector("#title").value; 
  let pages = document.querySelector("#pages").value; 
  let read = document.querySelector("#read").checked; 
  let newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook); 
  render();
}

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block"; 
})

document.querySelector("#new-book-form").addEventListener("submit", function(event){
  event.preventDefault();
  addBookToLibrary();
})

document.querySelector("#library").addEventListener("click", function (event){
  if (event.target.classList.contains("remove-btn")) {
    let bookEl = event.target.parentNode;
    let index = Array.from(bookEl.parentNode.children).indexOf(bookEl);
    myLibrary.splice(index, 1);
    render();
  }
})