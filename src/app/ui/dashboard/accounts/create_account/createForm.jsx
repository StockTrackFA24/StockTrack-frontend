'use client';
import {useActionState} from 'react';
import {createAccount} from "@/app/lib/actions";
import Link from "next/link";

export default function Form({roleList}) {

    const initialState = {message: null, errors: {}};
    const [state, formAction] = useActionState(createAccount, initialState);

    console.log(roleList + "test again");

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="first_name" className="mb-2 block text-sm font-medium">
                        First Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="first_name"
                                name="first_name"
                                type="string"
                                placeholder="First Name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="middle_name" className="mb-2 block text-sm font-medium">
                        Middle Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="middle_name"
                                name="middle_name"
                                type="string"
                                placeholder="Middle Name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="last_name" className="mb-2 block text-sm font-medium">
                        Last Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="last_name"
                                name="last_name"
                                type="string"
                                placeholder="Last Name"
                                required
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="username" className="mb-2 block text-sm font-medium">
                        User Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="username"
                                name="username"
                                type="string"
                                placeholder="User Name"
                                required
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="mb-2 block text-sm font-medium">
                        Password
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                required
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="item" className="mb-2 block text-sm font-medium">
                        Choose Role
                    </label>
                    <div className="relative">
                        <select
                            id="role"
                            name="role"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select a role for the user
                            </option>
                            {roleList.map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

            </div>

            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/accounts"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <button type="submit">Create Account</button>
            </div>
        </form>
    )
}