import {queryBatches} from "@/app/lib/data";
import {notFound} from "next/navigation";
import Form from '@/app/ui/dashboard/batches/editForm'
import {checkPermission, permissions_map} from "@/app/lib/permissions";
import {auth} from "@/auth";
import PermissionDenied from "@/app/ui/dashboard/permissionDenied";
import Link from "next/link";

export const metadata = {
    title: 'Edit Batch'
}

export default async function Page(props) {
    const session = await auth();
    let authorized = checkPermission(session.user.permissions, permissions_map.EDIT_STOCK);
    if(authorized) {
        let params = await props.params;
        let id = params.id;
        const itemData = await queryBatches(id, -1);
        let data = itemData[0]
        console.log(data)

        if(!itemData || !data) {
            notFound();
        }

        return(
            <Form data={data}/>
        )
    } else {
        return(
            <main>
                <PermissionDenied text={"You do not have permission to edit a batch."}/>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/dashboard/batches"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Go Back
                    </Link>
                </div>
            </main>
        )
    }

}