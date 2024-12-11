import {Form} from '@/app/ui/dashboard/batches/createBatchForm'
import {queryWarehouse} from "@/app/lib/data";
import {checkPermission, permissions_map} from "@/app/lib/permissions";
import {auth} from "@/auth";

export const metadata = {
    title: 'Create Batch'
}

export default async function Page() {
    const session = await auth();
    let authorized = checkPermission(session.user.permissions, permissions_map.CREATE_STOCK)
    const queryList = await queryWarehouse('', -1);
    let potentialItems = []
    queryList.forEach(item => {
        potentialItems.push(item.name);
    })

    return(
        <Form itemList={potentialItems}/>
    )
}