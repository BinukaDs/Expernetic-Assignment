import type { BookDataTypes } from "@/types/Book.types"
import { Checkbox } from "./checkbox"

export function TableCheckBox({ bookId, multipleBooks, setmultipleBooks }: { bookId: BookDataTypes['id'], multipleBooks: BookDataTypes['id'][], setmultipleBooks: (ids: number[]) => void }) {
    return (
        <div>
            <Checkbox onCheckedChange={(checked) => {
                if (checked) {
                    setmultipleBooks([...multipleBooks, bookId]);
                    console.log("Selected IDs: ", multipleBooks);
                } else {
                    setmultipleBooks(multipleBooks.filter(id => id !== bookId));
                    console.log("Selected IDs: ", multipleBooks);
                }
            }} />
        </div>
    )
}

export default TableCheckBox