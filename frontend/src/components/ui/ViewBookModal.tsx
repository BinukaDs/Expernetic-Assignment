import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./dialog"
import { Button } from "./button"
import type { BookDataTypes } from "@/types/Book.types"

export function ViewBookModal({ book, onClose }: { book: BookDataTypes | null, onClose: () => void }) {
    if (!book) return null
    return (
        <Dialog open={!!book} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{book.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-2">
                    <div><span className="font-bold">Author:</span> {book.author}</div>
                    <div><span className="font-bold">Description:</span> {book.description}</div>
                </div>
                <DialogFooter>
                    <Button onClick={onClose}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
