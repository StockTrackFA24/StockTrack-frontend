import Form from '@/app/ui/dashboard/accounts/create_role/createForm'
import {checkPermission, permissions_map} from "@/app/lib/permissions";
import {auth} from "@/auth";
import PermissionDenied from "@/app/ui/dashboard/permissionDenied";
import Link from "next/link";

export const metadata = {
    title: 'Create Role'
}

export default async function Page() {
    const session = await auth();
    let authorized = checkPermission(session.user.permissions, permissions_map.CREATE_ROLE);
    if(authorized) {
        return (
            <main>
                <Form/>
            </main>
        )
    } else {
        return(
            <main>
                <PermissionDenied text={"You do not have permission to create a role."}/>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/dashboard/accounts"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Go Back
                    </Link>
                </div>
            </main>
        )
    }

}