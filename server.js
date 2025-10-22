const express = require('express');
const app = express();
const books = [
  { id: 1, title: "PlanZo", author: "Yamini" },
  { id: 2, title: "LostAndFound", author: "Vishnu" },
  { id: 3, title: "Sears", author: "Priya" },
  { id: 4, title: "Resume", author: "Syamala"},
  { id: 5, title: "Zest", author: "Bhavya"},
  { id: 6, title: "Vignan", author: "Bhoomika"},
  { id: 7, title: "Analyser", author: "Oshitha"},
  { id: 8, title: "Event", author: "Uma"},
  { id: 9, title: "Holiday", author: "Koumudi"},
  { id: 10, title: "Founder", author: "Poojitha"}

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
