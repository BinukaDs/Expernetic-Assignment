import { useState } from "react"
import { Button } from "./button"
import { Eye, Pencil, Trash, Plus } from "lucide-react"
import { ViewBookModal } from "./ViewBookModal"
import { EditBookModal } from "./EditBookModal"
import { DeleteBookModal } from "./DeleteBookModal"
import type { BookDataTypes } from "@/types/Book.types"
import { AddBook, DeleteBook, UpdateBook } from "@/services/Books.service"
import { CreateBookModal } from "./CreateBookModal"
import { toast } from "sonner"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "./table"

export function BooksTable({ books, setBooks, loadBooks }: { books: BookDataTypes[], setBooks: (b: BookDataTypes[]) => void, loadBooks: () => void }) {
    const [viewBook, setViewBook] = useState<BookDataTypes | null>(null)
    const [editBook, setEditBook] = useState<BookDataTypes | null>(null)
    const [deleteBook, setDeleteBook] = useState<BookDataTypes | null>(null)
    const [createOpen, setCreateOpen] = useState(false)

    // Create Book
    const handleCreate = async (newBook: BookDataTypes) => {
        try {
            const response = await AddBook("http://localhost:5210/api", newBook);
            console.log("Create response: ", response);
            if (response.status === 201) {
                setBooks([...books, newBook]);
                loadBooks();
                toast.success("New Book created.")

            }
        } catch (error) {
            console.error("Error creating book: ", error);
            toast.error("Failed to create Book.");
        }
    }

    // Update Book
    const handleUpdate = async (updated: BookDataTypes) => {
        try {
            const response = await UpdateBook("http://localhost:5210/api", updated);
            console.log("Update response: ", response);
            if (response.status === 200) {
                setBooks(books.map(b => b.id === updated.id ? updated : b))
                loadBooks();
            }
        } catch (error) {
            console.error("Error updating book: ", error);
        }
    }

    // Delete Book
    const handleDelete = async (BookId: number) => {
        try {
            const response = await DeleteBook("http://localhost:5210/api", BookId);
            console.log("Delete response: ", response);
            if (response.status === 204) {
                setBooks(books.filter(b => b.id !== BookId))
                loadBooks();
            }
        } catch (error) {
            console.error("Error deleting book: ", error);
        }
    }

    return (
        <div className="rounded w-full p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-accent">Books</h2>
                <Button variant="default" size="sm" onClick={() => setCreateOpen(true)}>
                    <Plus className="w-4 h-4 mr-1" /> Add Book
                </Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className="border-b bg-[#f0f4fc]">
                        <TableHead className="py-2 px-4 text-left">Title</TableHead>
                        <TableHead className="py-2 px-4 text-left">Author</TableHead>
                        <TableHead className="py-2 px-4 text-left">Description</TableHead>
                        <TableHead className="py-2 px-4 text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {books.map((book) => (
                        <TableRow key={book.id} className="border-b hover:bg-gray-50">
                            <TableCell className="py-2 px-4">{book.title}</TableCell>
                            <TableCell className="py-2 px-4">{book.author}</TableCell>
                            <TableCell className="py-2 px-4 "><p className="truncate w-64">{book.description}</p></TableCell>
                            <TableCell className="py-2 px-4 flex gap-2 justify-center">
                                <Button variant="ghost" size="icon" onClick={() => setViewBook(book)}><Eye className="w-4 h-4" /></Button>
                                <Button variant="ghost" size="icon" onClick={() => setEditBook(book)}><Pencil className="w-4 h-4" /></Button>
                                <Button variant="ghost" size="icon" onClick={() => setDeleteBook(book)}><Trash className="w-4 h-4 text-red-500" /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Modals for each feature */}
            <CreateBookModal open={createOpen} onClose={() => setCreateOpen(false)} onCreate={handleCreate} />
            <ViewBookModal book={viewBook} onClose={() => setViewBook(null)} />
            <EditBookModal book={editBook} onClose={() => setEditBook(null)} onSave={(updated) => {
                handleUpdate(updated);
                setEditBook(null)
            }} />
            <DeleteBookModal book={deleteBook} onClose={() => setDeleteBook(null)} onDelete={() => {
                if (deleteBook) handleDelete(deleteBook.id);
                setDeleteBook(null)
            }} />
        </div>
    )
}
