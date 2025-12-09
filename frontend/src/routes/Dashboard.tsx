import { useState, useEffect } from "react";
import { BooksTable } from "@/components/ui/BooksTable"
import { FetchBooks } from "@/services/Books.service";
import type { BookDataTypes } from "@/types/Book.types";
import { toast } from "sonner";
import { useContext } from "react";
import { BaseContext } from "@/context/BaseContext";

export function Dashboard() {
    const BASE = useContext(BaseContext);
    const [books, setBooks] = useState<BookDataTypes[]>([]);
    const loadBooks = async () => {
        try {
            const data = await FetchBooks(BASE);
            if (data) {
                console.log("Books: ", data);
                setBooks(data.books || []);
            } else return
        } catch (error) {
            console.error("error loading books:", error);
            toast.error("Error loading books.");
        }
    }

    useEffect(() => {
        (async () => loadBooks())();
    }, []);


    return (
        <BooksTable books={books} setBooks={setBooks} loadBooks={loadBooks} />
    )
}

export default Dashboard