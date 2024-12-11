import {queryBatches} from "@/app/lib/data";
import {notFound} from "next/navigation";
import Form from '@/app/ui/dashboard/batches/editForm'
import {checkPermission, permissions_map} from "@/app/lib/permissions";
import {auth} from "@/auth";

export const metadata = {
    title: 'Edit Batch'
}

export default async function Page(props) {
    const session = await auth();
    let authorized = checkPermission(session.user.permissions, permissions_map.EDIT_STOCK)
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
}