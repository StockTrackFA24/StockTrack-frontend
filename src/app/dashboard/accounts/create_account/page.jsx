import Form from '@/app/ui/dashboard/accounts/create_account/createForm'
import {queryRoles} from "@/app/lib/data";
import {checkPermission, permissions_map} from "@/app/lib/permissions";
import {auth} from "@/auth";
import PermissionDenied from "@/app/ui/dashboard/permissionDenied";
import Link from "next/link";

export const metadata = {
    title: 'Create User'
}

export default async function Page() {
    const session = await auth();
    let authorized = checkPermission(session.user.permissions, permissions_map.CREATE_ACCOUNT);
    if(authorized){

        const queryList = await queryRoles();
        let potentialRoles = []
        queryList.forEach(role => {
            potentialRoles.push(role.name);
        })

        return(
            <Form roleList={potentialRoles}/>
        );
    } else {
        return(
            <main>
                <PermissionDenied text={"You do not have permission to create an account."}/>
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