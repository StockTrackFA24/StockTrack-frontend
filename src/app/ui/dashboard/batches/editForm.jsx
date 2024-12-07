'use client'
import {useActionState} from "react";
import {editBatch} from "@/app/lib/actions";
import Link from "next/link";

export default function Form({data}) {
    const initialState = {message: null, errors: {}};
    const id = data._id
    const stock = data.stock
    let formFunction = editBatch.bind(null, id, stock)
    const [state, formAction] = useActionState(formFunction, initialState);
    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="price" className="mb-2 block text-sm font-medium">
                        Stock
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="stock"
                                name="stock"
                                type="number"
                                step="1"
                                min="0"
                                defaultValue={data.stock}
                                required
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/batches"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <button type="submit">Edit Item</button>
            </div>
        </form>
    )
}