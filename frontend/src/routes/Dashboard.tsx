import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar"
import { BooksTable } from "@/components/ui/BooksTable"

const Dashboard = () => {

    const [books, setBooks] = useState([
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925 },
        { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
        { id: 3, title: "1984", author: "George Orwell", yearPublished: 1949 },
    ]);
    return (
        <BooksTable books={books} setBooks={setBooks} />
    )
}

export default Dashboard