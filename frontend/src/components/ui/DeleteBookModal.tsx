
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./dialog"
import type { Book } from "../../types/Book.types"
import { Button } from "./button"

export function DeleteBookModal({ book, onClose, onDelete }: { book: Book, onClose: () => void, onDelete: () => void }) {
    if (!book) return null
    return (
        <Dialog open={!!book} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Book</DialogTitle>
                </DialogHeader>
                <div>Are you sure you want to delete <b>{book.title}</b>?</div>
                <DialogFooter>
                    <Button variant="destructive" onClick={onDelete}>Delete</Button>
                    <Button variant="secondary" onClick={onClose}>Cancel</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
