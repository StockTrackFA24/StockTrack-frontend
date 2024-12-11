import {queryWarehouse} from "@/app/lib/data";
import {notFound} from "next/navigation";
import Form from '@/app/ui/dashboard/warehouse/editForm'
import {checkPermission, permissions_map} from "@/app/lib/permissions";
import {auth} from "@/auth";

export default async function Page(props) {
    const session = await auth();
    let authorized = checkPermission(session.user.permissions, permissions_map.EDIT_ITEM)
    let params = await props.params;
    let id = params.id;
    const itemData = await queryWarehouse(id, -1);
    let data = itemData[0]
    if(!itemData || !data) {
        notFound();
    }

    return(
        <Form data={data}/>
    )
}