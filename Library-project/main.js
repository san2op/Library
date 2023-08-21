



const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  // the constructor...
}

Book.prototype.readBtn = function(){
    this.read = !this.read;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value ;
    let author = document.querySelector("#author").value ;
    let pages = document.querySelector("#pages").value ;
    let read = document.querySelector("#read").checked ;

    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);

    displayBook();

  // do stuff here
}

function displayBook(){
    let allBooks = document.querySelector("#books");
    allBooks.innerHTML = " ";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        bookElement.innerHTML = `
        <div class="card-header">
        <h3 class="title"> ${book.title}</h3>
        <h5 class="author"> By ${book.author}</h5>
        </div>
        <div class="card-body">
        <p> ${book.pages} Pages </p>
        <p class="read-status"> ${book.read ? "Read" : "Not Read "}</p>
        <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        <button class="read-btn" onclick="readBtn(${i})">Edit READ</BUTTON>
        </div>
        `;
        allBooks.appendChild(bookElement);

    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBook();
}

function readBtn(index){
    myLibrary[index].readBtn();
    displayBook()
}

let newBookBtn = document.querySelector('#newbook');
newBookBtn.addEventListener("click",function(){
    let newBookForm = document.querySelector("#newbook-form");
    newBookForm.style.display = "block";
})


let addBookBtn = document.querySelector("#newbook-form");
addBookBtn.addEventListener("submit",function(event){
event.preventDefault();
addBookToLibrary();
})






