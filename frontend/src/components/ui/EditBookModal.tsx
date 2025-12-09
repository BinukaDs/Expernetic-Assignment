import { useState, useEffect, type FormEvent } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./dialog"
import { Button } from "./button"
import type { BookDataTypes } from "@/types/Book.types"
import { toast } from "sonner"


export function EditBookModal({ book, onClose, onSave }: { book: BookDataTypes, onClose: () => void, onSave: (b: BookDataTypes) => void }) {
    const [form, setForm] = useState<BookDataTypes>({ title: "", author: "", description: "" })
    useEffect(() => {
        (async () => {
            setForm(book || { title: "", author: "", description: "" });
        })();
    }, [book])

    const handleOnSave = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(!form.title || !form.author) {
            return toast.info("Title and Author are required fields.");
        };

        if(form.title.length > 50) {
            return toast.error("Title cannot exceed 50 characters.");
        } else if(form.author.length > 50) {
            return toast.error("Author cannot exceed 50 characters.");
        }
        onSave(form);
    }

    if (!book) return null
    return (
        <Dialog open={!!book} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Book</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleOnSave} className="space-y-2">
                    <div>
                        <label className="font-bold" htmlFor="title">Title</label>
                        <input name="title" className="border rounded px-2 py-1 w-full" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="author">Author</label>
                        <input name="author" className="border rounded px-2 py-1 w-full" placeholder="Author" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="description">Description</label>
                        <textarea name="description" rows={5} maxLength={300} className="border rounded px-2 py-1 w-full" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                        <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

