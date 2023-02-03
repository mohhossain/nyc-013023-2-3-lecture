let header = document.getElementsByTagName("h1")[0];
// returns a list
// getElementsByTagName, querySelectorAll, getElementsByClassName

//returns a single object
// querySelector, getElementById

// let name = document.createElement("h3");
// name.textContent = "Harry Potter";

// let author = document.createElement("p");
// author.textContent = "J.K Rowling";

// let year = document.createElement("p");
// year.textContent = "1997";

let array = [1, 23];
console.log(array[0]);
let num = 1;
console.log(num);

let bookDiv = document.getElementsByClassName("books")[0];

// bookDiv.append(name, author, year);
// bookDiv.appendChild(name);
// bookDiv.appendChild(author);

// header.textContent = "Hello"

// HTTP requests: GET, POST, PATCH, DELETE

fetch("http://localhost:3000/books/")
  .then((response) => response.json())
  .then((data) => renderBooks(data));

const renderBooks = (books) => {
  books.forEach((book) => {
    let name = document.createElement("h3");
    name.textContent = book.title;

    let author = document.createElement("p");
    author.textContent = book.author;

    let year = document.createElement("p");
    year.textContent = book.year;

    bookDiv.append(name, author, year);
  });
};

const newBook = {
  title: "Harry Potter",
  author: "J.K Rowling",
  year: 1997,
};

let button = document.createElement("button");
button.textContent = "Post a new book";

button.addEventListener("click", (e) => {
  console.log("button was clicked!");
  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ newBook }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
document.getElementsByTagName("body")[0].appendChild(button);
// fetch("http://localhost:3000/books", {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify(newBook),
// });
