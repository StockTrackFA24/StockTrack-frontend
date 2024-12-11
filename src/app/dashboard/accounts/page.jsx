import Pagination from '@/app/ui/dashboard/pagination'; // Do
import AccountTable from '@/app/ui/dashboard/accounts/table';     // Do
import {lusitana} from "@/app/fonts/next_fonts";        // Do
import {findAccountPages} from "@/app/lib/data";
import Link from "next/link";
import {checkPermission, permissions_map} from "@/app/lib/permissions";
import {auth} from "@/auth";
import PermissionDenied from "@/app/ui/dashboard/permissionDenied";        // Do


export const metadata = {
    title: 'Accounts'
}

export default async function Page(props) {
    const session = await auth();
    let authorized = checkPermission(session.user.permissions, permissions_map.VIEW_ACCOUNT);
    if(authorized) {

        const searchParams = await props.searchParams;
        const currentPage = Number(searchParams?.page) || 1;
        const totalPages = await findAccountPages();

        return (
            <div className="w-full">
                <div className="flex w-full items-center justify-between">

                    <div className="flex w-full items-center justify-between">
                        <h1 className={`${lusitana.className} text-2xl`}>Accounts</h1>
                        <Link
                            className="bg-green-800 rounded px-5 py-2"
                            href="/dashboard/accounts/create_account"
                        >
                            Create a new User
                        </Link>

                        <Link
                            className="bg-green-800 rounded px-5 py-2"
                            href="/dashboard/accounts/create_role"
                        >
                            Create a new Role
                        </Link>
                    </div>

                </div>

                <AccountTable currentPage={currentPage}/>

                <div className="mt-5 flex w-full justify-center">
                    {<Pagination totalPages={totalPages}/>}
                </div>
            </div>
        );
    } else {
        return (
            <div className="w-full">
                <div className="flex w-full items-center justify-between">

                    <div className="flex w-full items-center justify-between">
                        <h1 className={`${lusitana.className} text-2xl`}>Accounts</h1>
                        <Link
                            className="bg-green-800 rounded px-5 py-2"
                            href="/dashboard/accounts/create_account"
                        >
                            Create a new User
                        </Link>

                        <Link
                            className="bg-green-800 rounded px-5 py-2"
                            href="/dashboard/accounts/create_role"
                        >
                            Create a new Role
                        </Link>
                    </div>

                </div>

                <PermissionDenied text={"You do not have permission to view accounts."}/>
            </div>
        )
    }


}