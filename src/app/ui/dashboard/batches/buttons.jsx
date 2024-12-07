import {PencilIcon, TrashIcon} from "@heroicons/react/24/outline";
import {deleteBatch} from "@/app/lib/actions";
import Link from "next/link";

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

export function UpdateBatch({ id }) {
    return (
        <Link
            href={`/dashboard/batches/${id}/editBatch`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}