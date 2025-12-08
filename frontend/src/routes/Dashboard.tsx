import { useState, useEffect } from "react";
import { BooksTable } from "@/components/ui/BooksTable"
import { FetchBooks } from "@/services/Books.service";
import type { BookDataTypes } from "@/types/Book.types";
const BASE = "http://localhost:5210/api/books";

const Dashboard = () => {

    const [books, setBooks] = useState<BookDataTypes>([]);

    const loadBooks = async (): Promise<BookDataTypes | void> => {

        try {
            const data = await FetchBooks(BASE);
            if (data) {
                console.log("Books: ", data);
                setBooks(data);
            } else return
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadBooks();
    }, []);


    return (
        <BooksTable books={books} setBooks={setBooks} />
    )
}

export default Dashboard