'use client';
import {useActionState} from 'react';
import Link from "next/link";
import {createBatch} from "@/app/lib/actions";
import {queryWarehouse} from "@/app/lib/data";

export function Form({itemList}) {
    const initialState = {message: null, errors: {}};
    const [state, formAction] = useActionState(createBatch, initialState);

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="item" className="mb-2 block text-sm font-medium">
                        Choose customer
                    </label>
                    <div className="relative">
                        <select
                            id="item"
                            name="itemName"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select an item to create a batch of
                            </option>
                            {itemList.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="stock" className="mb-2 block text-sm font-medium">
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
                                placeholder="Input the amount in the batch"
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
                <button type="submit">Create Item</button>
            </div>
        </form>
    )
}