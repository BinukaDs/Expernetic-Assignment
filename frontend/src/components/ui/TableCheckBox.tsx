import type { BookDataTypes } from "@/types/Book.types"
import { Checkbox } from "./checkbox"

export function TableCheckBox({ bookId, multipleBooks, setmultipleBooks }: { bookId: BookDataTypes['id'], multipleBooks: number[], setmultipleBooks: (ids: number[]) => void }) {
    return (
        <div>
            <Checkbox onCheckedChange={(checked) => {
                if (checked) {
                   if(typeof bookId === "number") setmultipleBooks([...multipleBooks, bookId]);
                    // console.log("Selected IDs: ", multipleBooks);
                } else {
                    setmultipleBooks(multipleBooks.filter(id => id !== bookId));
                }
            }} />
        </div>
    )
}

export default TableCheckBox