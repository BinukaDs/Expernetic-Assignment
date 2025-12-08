import { useState } from "react"
import { Button } from "./button"
import { Eye, Pencil, Trash } from "lucide-react"
import { ViewBookModal } from "./ViewBookModal"
import { EditBookModal } from "./EditBookModal"
import { DeleteBookModal } from "./DeleteBookModal"
import type { BookDataTypes } from "@/types/Book.types"

export function BooksTable({ books, setBooks }: { books: BookDataTypes[], setBooks: (b: BookDataTypes[]) => void }) {
    const [viewBook, setViewBook] = useState<BookDataTypes | null>(null)
    const [editBook, setEditBook] = useState<BookDataTypes | null>(null)
    const [deleteBook, setDeleteBook] = useState<BookDataTypes | null>(null)

    return (
        <div className="bg-white rounded shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Books</h2>
            <table className="min-w-full text-sm">
                <thead>
                    <tr className="border-b">
                        <th className="py-2 px-4 text-left">Title</th>
                        <th className="py-2 px-4 text-left">Author</th>
                        <th className="py-2 px-4 text-left">Year</th>
                        <th className="py-2 px-4 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id} className="border-b hover:bg-gray-50">
                            <td className="py-2 px-4">{book.title}</td>
                            <td className="py-2 px-4">{book.author}</td>
                            <td className="py-2 px-4">{book.yearPublished}</td>
                            <td className="py-2 px-4 flex gap-2 justify-center">
                                <Button variant="ghost" size="icon" onClick={() => setViewBook(book)}><Eye className="w-4 h-4" /></Button>
                                <Button variant="ghost" size="icon" onClick={() => setEditBook(book)}><Pencil className="w-4 h-4" /></Button>
                                <Button variant="ghost" size="icon" onClick={() => setDeleteBook(book)}><Trash className="w-4 h-4 text-red-500" /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ViewBookModal book={viewBook} onClose={() => setViewBook(null)} />
            <EditBookModal book={editBook} onClose={() => setEditBook(null)} onSave={(updated) => {
                setBooks(books.map(b => b.id === updated.id ? updated : b))
                setEditBook(null)
            }} />
            <DeleteBookModal book={deleteBook} onClose={() => setDeleteBook(null)} onDelete={() => {
                setBooks(books.filter(b => b.id !== deleteBook.id))
                setDeleteBook(null)
            }} />
        </div>
    )
}
