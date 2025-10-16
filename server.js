const express = require('express');
const app = express();
const books = [
  { id: 1, title: "Backend", author: "Priya" },
  { id: 2, title: "Frontend", author: "Yamini" },
  { id: 3, title: "Sears", author: "Vishnu" },
  { id: 4, title: "StudentHub", author: "Meghana"},
  { id: 5, title: "Motu and patluu", author: "Bhooms"},
  { id: 6, title: "Tom and jerry", author: "Shamu"},
  { id: 7, title: "Planzo", author: "Bhanu"},
  { id: 8, title: "Seatease", author: "Yams"},
  { id: 9, title: "Magicland", author: "Sameena"},
  { id: 10, title: "Lost and Found", author: "Vissu"}

];
app.get('/books', (req, res) => {
  res.send(books);
});
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (book) {
    res.send(book);
  } else {
    res.send({ message: "Book not found" });
  }
});
app.listen(5080, () => {
  console.log("Server running on http://localhost:5080");
});
