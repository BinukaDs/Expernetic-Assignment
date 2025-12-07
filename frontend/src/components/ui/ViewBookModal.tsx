import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./dialog"
import { Button } from "./button"
import type { Book } from "@/types/Book.types"

export function ViewBookModal({ book, onClose }: { book: Book, onClose: () => void }) {
    if (!book) return null
    return (
        <Dialog open={!!book} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Book Details</DialogTitle>
                </DialogHeader>
                <div className="space-y-2">
                    <div><b>Title:</b> {book.title}</div>
                    <div><b>Author:</b> {book.author}</div>
                    <div><b>Year:</b> {book.yearPublished}</div>
                </div>
                <DialogFooter>
                    <Button onClick={onClose}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
