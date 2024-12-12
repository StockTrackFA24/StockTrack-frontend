'use client';
import {useActionState} from 'react';
import {createRole} from "@/app/lib/actions";
import Link from "next/link";

export default function Form(props) {

    function handleChange(e) {
        if (e.target.checked) {
            document.getElementById("permissions").value = Number(document.getElementById("permissions").value) + Number(e.target.value);
        } else {
            document.getElementById("permissions").value = Number(document.getElementById("permissions").value) - Number(e.target.value);
        }
    }

    const initialState = {message: null, errors: {}};
    const [state, formAction] = useActionState(createRole, initialState);

    return (
        <form action={formAction}>


            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="role_name" className="mb-2 block text-sm font-medium">
                        Role Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="role_name"
                                name="role_name"
                                type="string"
                                placeholder="Role Name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="display_name" className="mb-2 block text-sm font-medium">
                        Role Display Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="display_name"
                                name="display_name"
                                type="string"
                                placeholder="Role Display Name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Role Description
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="description"
                                name="description"
                                type="string"
                                placeholder="Role Description"
                                required
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                label="Test Description"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4 rounded-md" style={{border: '1px solid gray'}}>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            View Warehouse
                                <input
                                    id="perm_viewWarehouse"
                                    name="perm_viewWarehouse"
                                    value="1"
                                    type="checkbox"
                                    onChange={handleChange}
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    label={'hello'}
                                />
                        </div>
                    </div>
                </div>

                <div className="mb-4 rounded-md" style={{border: '1px solid gray'}}>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            View Stock
                            <input
                                id="perm_viewStock"
                                name="perm_viewStock"
                                value="2"
                                type="checkbox"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4 rounded-md" style={{border: '1px solid gray'}}>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            Create Item
                            <input
                                id="perm_createItem"
                                name="perm_createItem"
                                value="4"
                                type="checkbox"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4 rounded-md" style={{border: '1px solid gray'}}>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            Edit Item
                            <input
                                id="perm_editItem"
                                name="perm_editItem"
                                value="8"
                                type="checkbox"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4 rounded-md" style={{border: '1px solid gray'}}>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            Delete Item
                            <input
                                id="perm_deleteItem"
                                name="perm_deleteItem"
                                value="16"
                                type="checkbox"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4 rounded-md" style={{border: '1px solid gray'}}>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            Create Stock
                            <input
                                id="perm_createStock"
                                name="perm_createStock"
                                value="32"
                                type="checkbox"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4 rounded-md" style={{border: '1px solid gray'}}>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            Edit Stock
                            <input
                                id="perm_editStock"
                                name="perm_editStock"
                                value="64"
                                type="checkbox"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4 rounded-md" style={{border: '1px solid gray'}}>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            Delete Stock
                            <input
                                id="perm_deleteStock"
                                name="perm_deleteStock"
                                value="128"
                                type="checkbox"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4 rounded-md" style={{border: '1px solid gray'}}>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            View Audit Log
                            <input
                                id="perm_viewAuditLog"
                                name="perm_viewAuditLog"
                                value="256"
                                type="checkbox"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4 rounded-md" style={{border: '1px solid gray'}}>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            View Accounts
                            <input
                                id="perm_viewAccounts"
                                name="perm_viewAccounts"
                                value="512"
                                type="checkbox"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4 rounded-md" style={{border: '1px solid gray'}}>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            Create Account
                            <input
                                id="perm_createAccount"
                                name="perm_createAccount"
                                value="1024"
                                type="checkbox"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4 rounded-md" style={{border: '1px solid gray'}}>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            Create Role
                            <input
                                id="perm_createRole"
                                name="perm_createRole"
                                value="2048"
                                type="checkbox"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="role_name" className="mb-2 block text-sm font-medium">
                        Permissions
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="permissions"
                                name="permissions"
                                type="number"
                                placeholder="0000"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                readOnly="readOnly"
                            />
                        </div>
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
                <button type="submit">Create Role</button>
            </div>
        </form>
    )
}