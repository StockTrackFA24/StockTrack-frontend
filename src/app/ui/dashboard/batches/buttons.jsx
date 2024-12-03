import {TrashIcon} from "@heroicons/react/24/outline";
import {deleteBatch} from "@/app/lib/actions";

export function DeleteBatch({ id }) {
    const deleteItemWithId = deleteBatch.bind(null, id);

    return (
        <form action={deleteItemWithId}>
            <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-4" />
            </button>
        </form>
    );
}