import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./dialog"
import { Button } from "./button"
import type { BookDataTypes } from "@/types/Book.types"


export function CreateBookModal({ open, onClose, onCreate }: { open: boolean, onClose: () => void, onCreate: (b: BookDataTypes) => void }) {
    const [form, setForm] = useState<BookDataTypes>({ title: "", author: "", description: "" })



    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Book</DialogTitle>
                </DialogHeader>
                <form onSubmit={e => { e.preventDefault(); onCreate(form) }} className="space-y-2">
                    <div>
                        <label className="font-bold" htmlFor="title">Title</label>
                        <input name="title" required className="border rounded px-2 py-1 w-full" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="author">Author</label>
                        <input name="author" required className="border rounded px-2 py-1 w-full" placeholder="Author" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="description">Description</label>
                        <textarea name="description" className="border rounded px-2 py-1 w-full" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Create</Button>
                        <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
