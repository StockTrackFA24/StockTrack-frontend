import {Form} from '@/app/ui/dashboard/batches/createBatchForm'
import {queryWarehouse} from "@/app/lib/data";
import {checkPermission, permissions_map} from "@/app/lib/permissions";
import {auth} from "@/auth";
import PermissionDenied from "@/app/ui/dashboard/permissionDenied";
import Link from "next/link";

export const metadata = {
    title: 'Create Batch'
}

export default async function Page() {
    const session = await auth();
    let authorized = (checkPermission(session.user.permissions, permissions_map.CREATE_STOCK) && checkPermission(session.user.permissions, permissions_map.VIEW_WAREHOUSE));
    if(authorized){
        const queryList = await queryWarehouse('', -1);
        let potentialItems = []
        queryList.forEach(item => {
            potentialItems.push(item.name);
        })
        return(
            <Form itemList={potentialItems}/>
        );
    } {
        return(
            <main>
                <PermissionDenied text={"You do not have permission to create a batch. This could be caused by not having permission to view warehouse items."}/>
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