import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./dialog"
import { Button } from "./button"
import type { Book } from "@/types/Book.types"


export function EditBookModal({ book, onClose, onSave }: { book: Book, onClose: () => void, onSave: (b: Book) => void }) {
    const [form, setForm] = useState<Book>({ title: "", author: "", yearPublished: null })
    useEffect(() => { setForm(book || { title: "", author: "", yearPublished: null }) }, [book])
    if (!book) return null
    return (
        <Dialog open={!!book} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Book</DialogTitle>
                </DialogHeader>
                <form onSubmit={e => { e.preventDefault(); onSave(form) }} className="space-y-2">
                    <input className="border rounded px-2 py-1 w-full" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
                    <input className="border rounded px-2 py-1 w-full" placeholder="Author" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
                    <input type="number" className="border rounded px-2 py-1 w-full" placeholder="Year" value={form.yearPublished} onChange={e => setForm({ ...form, yearPublished: e.target.value })} />
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                        <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
