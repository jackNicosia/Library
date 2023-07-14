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
    //can add two seprate div classes for header of book card and then book info. 
    //Then add bookEl.setAttribute ("class", "class-name"); 
    let book = myLibrary[i];
    let bookEl = document.createElement("div"); 
    bookEl.innerHTML = `
    <p> Title: ${book.title}</p>      
    <p> Author: ${book.author}</p>
    <p> Pages: ${book.pages}</p>
    <p> Read: ${book.read}</p>
    
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
