import { useState } from "react"
import { Navbar } from "./components/ui/Navbar"
import { BooksTable } from "./components/ui/BooksTable"
import { Routes } from "react-router"



function App() {
 
  
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
    { id: 3, title: "1984", author: "George Orwell", yearPublished: 1949 },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-3xl mx-auto mt-10">
        <BooksTable books={books} setBooks={setBooks} />
      </main>
    </div>
  )
}

export default App
