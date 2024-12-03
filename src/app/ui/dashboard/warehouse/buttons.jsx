import {TrashIcon, PencilIcon} from "@heroicons/react/24/outline";
import {deleteItem} from "@/app/lib/actions";
import Link from "next/link";


export function UpdateItem({ id }) {
    return (
        <Link
            href={`/dashboard/warehouse/${id}/editItem`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}

export function DeleteItem({ id }) {
    const deleteItemWithId = deleteItem.bind(null, id);

    return (
        <form action={deleteItemWithId}>
            <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-4" />
            </button>
        </form>
    );
}